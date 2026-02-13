# MERN Portfolio Website

A professional, full-stack portfolio website built with the MERN (MongoDB, Express, React, Node.js) stack. This project demonstrates clean architecture, separation of concerns, and modern web development best practices.

## 🚀 Features

- **Full-Stack Architecture**: Complete MERN implementation with proper MVC separation
- **REST API**: Backend API serving portfolio data
- **Dynamic Content**: All portfolio data fetched from MongoDB database
- **Modern UI**: Beautiful, responsive design with smooth animations
- **Production-Ready**: Clean, maintainable code suitable for deployment

## 📁 Project Structure

```
portfolio-mern/
│
├── backend/                # Node.js + Express backend
│   ├── config/
│   │   └── db.js          # MongoDB connection
│   ├── models/
│   │   └── Profile.js     # Mongoose schema
│   ├── controllers/
│   │   └── profileController.js    # Business logic
│   ├── routes/
│   │   └── profileRoutes.js        # API routes
│   ├── server.js          # Express server entry point
│   ├── .env.example       # Environment variables template
│   └── package.json
│
├── frontend/              # React frontend (Vite)
│   ├── src/
│   │   ├── api/
│   │   │   └── profileApi.js       # API service layer
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Projects.jsx
│   │   │   └── Contact.jsx
│   │   ├── pages/
│   │   │   └── Home.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   └── package.json
│
└── README.md
```

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **dotenv** - Environment variable management
- **cors** - Cross-origin resource sharing

### Frontend
- **React** - UI library
- **Vite** - Build tool and dev server
- **Axios** - HTTP client
- **CSS3** - Styling with modern features

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn

### Backend Setup

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` file with your configurations:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/portfolio
   NODE_ENV=development
   ```

4. **Start MongoDB** (if running locally)
   ```bash
   mongod
   ```

5. **Start the backend server**
   ```bash
   npm start
   ```
   
   For development with auto-reload:
   ```bash
   npm run dev
   ```

   Backend will run on `http://localhost:5000`

### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

   Frontend will run on `http://localhost:3000`

## 🎯 Usage

### Initial Data Setup

To add your portfolio data, send a POST request to `http://localhost:5000/api/profile` with your data:

```json
{
  "name": "Your Name",
  "role": "Full Stack Developer",
  "about": "Passionate developer with expertise in MERN stack...",
  "skills": ["React", "Node.js", "MongoDB", "Express", "JavaScript", "HTML", "CSS"],
  "projects": [
    {
      "title": "E-Commerce Platform",
      "description": "A full-featured online shopping platform with cart, payments, and admin panel",
      "technologies": ["React", "Node.js", "MongoDB", "Stripe"],
      "link": "https://example.com",
      "github": "https://github.com/yourusername/project"
    }
  ],
  "email": "your.email@example.com"
}
```

You can use tools like:
- **Postman** - API testing tool
- **Thunder Client** (VS Code extension)
- **curl** command line tool
- **MongoDB Compass** - Direct database insertion

### Example using curl:

```bash
curl -X POST http://localhost:5000/api/profile \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "role": "MERN Stack Developer",
    "about": "Computer Science student passionate about building scalable web applications",
    "skills": ["MongoDB", "Express", "React", "Node.js", "JavaScript", "REST APIs"],
    "projects": [
      {
        "title": "Task Manager",
        "description": "A productivity app for managing daily tasks with authentication",
        "technologies": ["React", "Node.js", "MongoDB"],
        "link": "",
        "github": "https://github.com/johndoe/task-manager"
      }
    ],
    "email": "john.doe@example.com"
  }'
```

## 🌐 API Endpoints

### GET /api/profile
Fetch portfolio data

**Response:**
```json
{
  "success": true,
  "data": {
    "_id": "...",
    "name": "Your Name",
    "role": "Full Stack Developer",
    "about": "...",
    "skills": [...],
    "projects": [...],
    "email": "your.email@example.com"
  }
}
```

### POST /api/profile
Create or update portfolio data

**Request Body:** Profile object (see Initial Data Setup)

**Response:**
```json
{
  "success": true,
  "data": { /* updated profile */ }
}
```

### GET /api/health
Health check endpoint

**Response:**
```json
{
  "success": true,
  "message": "Server is running"
}
```

## 🎨 Features Breakdown

### Backend Architecture
- **MVC Pattern**: Clear separation between models, controllers, and routes
- **Error Handling**: Comprehensive error handling middleware
- **Async/Await**: Modern asynchronous JavaScript
- **Validation**: Mongoose schema validation
- **CORS**: Configured for cross-origin requests

### Frontend Features
- **Component-Based**: Reusable React components
- **State Management**: React hooks (useState, useEffect)
- **API Integration**: Centralized API service layer
- **Responsive Design**: Mobile-first approach
- **Modern CSS**: Gradients, animations, glassmorphism
- **Loading States**: User feedback during data fetching
- **Error Handling**: Graceful error display

## 🚀 Deployment

### Backend Deployment (Example: Heroku, Railway, Render)

1. Add start script to package.json (already included)
2. Set environment variables on hosting platform
3. Deploy backend code
4. Update MONGODB_URI to production database

### Frontend Deployment (Example: Vercel, Netlify)

1. Build the frontend:
   ```bash
   npm run build
   ```

2. Update API base URL to production backend
3. Deploy dist folder

### Database (MongoDB Atlas)

1. Create free cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Get connection string
3. Update MONGODB_URI in backend .env

## 📝 Development Notes

- Backend runs on port 5000
- Frontend runs on port 3000
- Vite proxy configured for `/api` requests
- MongoDB connection managed in `config/db.js`
- All components use modern ES6+ syntax
- CSS uses CSS custom properties (variables)

## 🔧 Scripts

### Backend
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon

### Frontend
- `npm run dev` - Start Vite dev server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🎓 Learning Outcomes

This project demonstrates:
- ✅ Full-stack application architecture
- ✅ RESTful API design
- ✅ Database modeling with Mongoose
- ✅ React component composition
- ✅ Async data fetching
- ✅ Modern CSS techniques
- ✅ Environment configuration
- ✅ Error handling
- ✅ Code organization and separation of concerns

## 📄 License

This is an open-source project. Feel free to use it for your portfolio!

## 🤝 Contributing

This is a portfolio template. Fork it and make it your own!

## 📧 Contact

For questions or suggestions, reach out through the portfolio contact form.

---

**Built with ❤️ using the MERN Stack**
