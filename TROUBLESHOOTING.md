# 🔧 Troubleshooting Guide

Common issues and their solutions for the MERN Portfolio project.

---

## 🚨 Installation Issues

### PowerShell Script Execution Error

**Error:**
```
running scripts is disabled on this system
```

**Solution:**
1. Open PowerShell as **Administrator**
2. Run:
   ```powershell
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```
3. Type `Y` to confirm
4. Try running `.\setup.ps1` again

**Alternative:** Use `setup.bat` instead

---

### npm Command Not Found

**Error:**
```
npm : The term 'npm' is not recognized
```

**Solution:**
1. Install Node.js from [nodejs.org](https://nodejs.org/)
2. Choose LTS version (recommended)
3. Restart your terminal/PowerShell
4. Verify installation:
   ```bash
   node --version
   npm --version
   ```

---

### Package Installation Fails

**Error:**
```
npm ERR! network
npm ERR! ECONNREFUSED
```

**Solutions:**
1. Check your internet connection
2. Clear npm cache:
   ```bash
   npm cache clean --force
   ```
3. Delete `node_modules` folder and `package-lock.json`
4. Run `npm install` again
5. Try using a different network (sometimes corporate networks block npm)

---

## 💾 MongoDB Issues

### Cannot Connect to MongoDB (Local)

**Error:**
```
MongooseServerSelectionError: connect ECONNREFUSED 127.0.0.1:27017
```

**Solutions:**

1. **MongoDB Not Running**
   ```bash
   # Start MongoDB
   mongod
   ```

2. **MongoDB Not Installed**
   - Download from [mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)
   - Install and start MongoDB service
   
3. **Use MongoDB Atlas Instead** (Easier!)
   - Create free account at [mongodb.com/atlas](https://www.mongodb.com/cloud/atlas/register)
   - Create cluster
   - Get connection string
   - Update `backend/.env`:
     ```
     MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
     ```

---

### MongoDB Atlas Connection Issues

**Error:**
```
MongoNetworkError: connection timed out
```

**Solutions:**

1. **Whitelist Your IP**
   - Go to MongoDB Atlas → Network Access
   - Click "Add IP Address"
   - Choose "Allow Access from Anywhere" (0.0.0.0/0)
   - Or add your specific IP

2. **Check Connection String**
   - Make sure you replaced `<password>` with actual password
   - No angle brackets `< >` should remain
   - Example:
     ```
     mongodb+srv://myuser:MyPassword123@cluster0.abcde.mongodb.net/portfolio
     ```

3. **Database User Exists**
   - Go to Database Access
   - Ensure user is created with password
   - User has "Read and write to any database" permission

---

### Seed Script Fails

**Error:**
```
Error seeding database: ...
```

**Solutions:**

1. Make sure MongoDB is running/connected
2. Check `.env` file has correct MONGODB_URI
3. Run from backend directory:
   ```bash
   cd backend
   npm run seed
   ```
4. Check for typos in seed.js

---

## 🌐 Server Issues

### Backend Port Already in Use

**Error:**
```
Error: listen EADDRINUSE: address already in use :::5000
```

**Solutions:**

1. **Change Port**
   - Edit `backend/.env`:
     ```
     PORT=5001
     ```
   
2. **Kill Existing Process** (Windows)
   ```bash
   # Find process using port 5000
   netstat -ano | findstr :5000
   
   # Kill process (use PID from above)
   taskkill /PID <PID> /F
   ```

3. **Kill Existing Process** (Alternative)
   - Open Task Manager
   - Find "Node.js" processes
   - End task

---

### Frontend Port Already in Use

**Error:**
```
Port 3000 is in use
```

**Solution:**

Vite will automatically ask if you want to use a different port. Type `Y`:
```
Port 3000 is in use, trying another one...
Using port 3001 instead
```

Or manually change in `vite.config.js`:
```javascript
server: {
  port: 3001,
  // rest of config
}
```

---

### CORS Errors

**Error:**
```
Access to XMLHttpRequest has been blocked by CORS policy
```

**Solution:**

1. Make sure backend has CORS enabled (already included in server.js)
2. Check if backend is running on correct port (5000)
3. Vite proxy should be configured (already done in vite.config.js)
4. Restart both servers

---

## 🎨 Frontend Issues

### Blank White Page

**Possible Causes & Solutions:**

1. **Check Browser Console** (F12)
   - Look for JavaScript errors
   - Fix any import/syntax errors

2. **Backend Not Running**
   - Start backend server:
     ```bash
     cd backend
     npm start
     ```

3. **API Connection Failed**
   - Open browser console (F12)
   - Check Network tab
   - Ensure API call to `/api/profile` succeeds

4. **No Data in Database**
   - Run seed script:
     ```bash
     cd backend
     npm run seed
     ```

---

### React Component Not Updating

**Solution:**

1. Hard refresh browser: `Ctrl + Shift + R` (Windows)
2. Clear browser cache
3. Restart Vite dev server
4. Check if you're editing the correct file

---

### Styles Not Loading

**Solution:**

1. Verify CSS import in component:
   ```javascript
   import './ComponentName.css';
   ```

2. Check CSS file path is correct

3. Hard refresh browser: `Ctrl + Shift + R`

4. Check browser console for CSS errors

---

### Module Not Found Error

**Error:**
```
Module not found: Can't resolve './components/Navbar'
```

**Solutions:**

1. Check file exists at specified path
2. Check file extension (.jsx vs .js)
3. Check import statement matches filename:
   ```javascript
   // Correct
   import Navbar from './components/Navbar';
   import Navbar from './components/Navbar.jsx';
   
   // Incorrect
   import Navbar from './components/navbar'; // wrong case
   ```

---

## 📊 Data Issues

### "Profile not found" Error

**Solution:**

Database is empty. Seed it:
```bash
cd backend
npm run seed
```

Or create profile via API:
```bash
curl -X POST http://localhost:5000/api/profile -H "Content-Type: application/json" -d "{\"name\":\"Test User\",\"role\":\"Developer\",\"about\":\"Test\",\"skills\":[\"JS\"],\"projects\":[],\"email\":\"test@test.com\"}"
```

---

### Profile Data Not Updating

**Solutions:**

1. **Clear Database and Re-seed**
   ```bash
   cd backend
   npm run seed
   ```
   (Seed script clears old data automatically)

2. **Update via API**
   - Use Postman/Thunder Client
   - POST to `http://localhost:5000/api/profile`
   - Send updated profile JSON

3. **Check MongoDB Directly**
   - Install MongoDB Compass
   - Connect to your database
   - View/edit documents manually

---

## 🔐 Environment Variable Issues

### .env File Not Loading

**Error:**
```
undefined connection string
```

**Solutions:**

1. **File Named Correctly**
   - Must be exactly `.env` (not `env.txt` or `.env.txt`)
   - Should be in `backend/` folder

2. **No Quotes Needed**
   ```bash
   # Correct
   MONGODB_URI=mongodb://localhost:27017/portfolio
   
   # Incorrect
   MONGODB_URI="mongodb://localhost:27017/portfolio"
   ```

3. **Restart Server**
   - Environment variables load on server start
   - Stop server (Ctrl+C) and restart

---

## 🚀 Build Issues

### Frontend Build Fails

**Error:**
```
Build failed with errors
```

**Solutions:**

1. Check for console errors in code
2. Fix all ESLint/compilation errors
3. Make sure all imports are valid
4. Delete `node_modules` and reinstall:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

---

## 🌐 API Issues

### 404 Not Found on API Calls

**Solutions:**

1. **Backend Running?**
   - Check if backend server is running
   - Should see "Server is running on port 5000"

2. **Correct URL?**
   - Should be: `http://localhost:5000/api/profile`
   - Check API base URL in `profileApi.js`

3. **Route Defined?**
   - Verify route exists in `backend/routes/profileRoutes.js`

---

### 500 Internal Server Error

**Solutions:**

1. **Check Backend Console**
   - Error details will be logged there
   - Read error message carefully

2. **Common Causes:**
   - Database connection failed
   - Missing required fields in request
   - Syntax error in controller code

3. **Check Request Data**
   - Ensure you're sending correct JSON format
   - All required fields included

---

## 🎯 Development Tips

### Fast Troubleshooting Checklist

When something breaks, check in this order:

1. ✅ Is MongoDB running/connected?
2. ✅ Is backend server running?
3. ✅ Is frontend dev server running?
4. ✅ Are there errors in browser console?
5. ✅ Are there errors in backend console?
6. ✅ Did you save all files?
7. ✅ Did you refresh the browser?
8. ✅ Is data in the database?

### Useful Commands

```bash
# Check if port is in use (Windows)
netstat -ano | findstr :5000

# View all npm packages
npm list

# Check Node/npm versions
node --version
npm --version

# Clear npm cache
npm cache clean --force

# Reinstall all dependencies
rm -rf node_modules package-lock.json && npm install
```

---

## 📞 Getting Help

If you're still stuck:

1. **Read Error Messages Carefully**
   - They usually tell you exactly what's wrong
   - Google the specific error message

2. **Check Documentation**
   - README.md - Full documentation
   - QUICKSTART.md - Setup guide
   - Code comments - Implementation details

3. **Search Online**
   - Stack Overflow
   - MongoDB documentation
   - React documentation
   - Express.js guides

4. **Debugging Tools**
   - Browser DevTools (F12)
   - MongoDB Compass (database viewer)
   - Postman (API testing)
   - VS Code debugger

---

## ✅ Verification Checklist

Use this to verify everything is working:

### Backend Verification
- [ ] `npm install` completed successfully
- [ ] `.env` file exists with correct values
- [ ] MongoDB is running/connected
- [ ] `npm run seed` executed successfully
- [ ] `npm start` runs without errors
- [ ] Can access http://localhost:5000/api/health
- [ ] Returns: `{"success":true,"message":"Server is running"}`

### Frontend Verification
- [ ] `npm install` completed successfully
- [ ] `npm run dev` runs without errors
- [ ] Can access http://localhost:3000
- [ ] No errors in browser console (F12)
- [ ] Hero section displays with your name
- [ ] Projects section shows project cards
- [ ] Contact section displays email

### Data Verification
- [ ] Seed script ran successfully
- [ ] Profile data appears on frontend
- [ ] Skills show as tags
- [ ] Projects are listed
- [ ] Email link works (opens email client)

---

**Still Having Issues?**

Double-check you followed the QUICKSTART.md guide exactly. Most issues come from:
- Skipping steps
- Not waiting for installations to complete
- Forgetting to start MongoDB
- Wrong directory when running commands

**Take it one step at a time, and you'll get it working! 💪**
