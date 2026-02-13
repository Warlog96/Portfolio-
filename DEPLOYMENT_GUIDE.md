# Deployment Guide for MERN Stack Portfolio

Your application consists of two parts:
1.  **Frontend**: React (Vite) - Running on Netlify
2.  **Backend**: Node.js (Express + MongoDB) - **Needs to be deployed**

The error "failed to load profile data" happens because your frontend on Netlify is trying to talk to an API that doesn't exist on Netlify. You need to deploy your backend to a service like **Render** or **Railway** and then tell your frontend where to find it.

## Step 1: Deploy Backend to Render (Free Tier)

1.  **Push your code to GitHub** (you likely already did this).
2.  **Sign up/Log in to [Render](https://render.com/)**.
3.  Click **"New +"** and select **"Web Service"**.
4.  Connect your GitHub repository.
5.  **Configure the service**:
    *   **Name**: `portfolio-backend` (or similar)
    *   **Root Directory**: `backend` (Important! This tells Render the app is in the backend folder)
    *   **Environment**: `Node`
    *   **Build Command**: `npm install`
    *   **Start Command**: `node server.js`
    *   **Instance Type**: `Free`
6.  **Environment Variables** (Scroll down to "Advanced" or "Environment"):
    *   Add `MONGODB_URI`: Your MongoDB connection string (e.g., from MongoDB Atlas).
    *   Add `NODE_ENV`: `production`
    *   Add `PORT`: `5000` (optional, Render sets its own PORT usually, your code should use `process.env.PORT`)
7.  Click **"Create Web Service"**.
8.  **Wait for deployment**: Once finished, Render will give you a URL (e.g., `https://portfolio-backend.onrender.com`). **Copy this URL.**

## Step 2: Configure Frontend on Netlify

Now you need to tell your Netlify frontend where your backend lives.

1.  Go to your **Netlify Dashboard**.
2.  Select your site.
3.  Go to **Site configuration** > **Environment variables**.
4.  Click **"Add a variable"**.
5.  **Key**: `VITE_API_URL`
6.  **Value**: Your Render Backend URL (e.g., `https://portfolio-backend.onrender.com/api`)
    *   **Note**: Make sure to include `/api` at the end if your routes generally start with it, or check your `profileApi.js`.
    *   Your `profileApi.js` appends `/profile` to the base URL.
    *   If your base URL is just the domain, set it to `https://portfolio-backend.onrender.com`.
7.  **Re-deploy Key Step**:
    *   Go to **Deploys**.
    *   Click **"Trigger deploy"** > **"Deploy site"**.
    *   This is required for the new environment variable to take effect.

## Step 3: Verify

Once both are deployed:
1.  Open your Netlify URL.
2.  The "failed to load profile data" error should disappear.
3.  Your data from MongoDB should appear on the site.

## Step 4: Seed the Database (Important!)

Your production database (MongoDB Atlas) starts empty. You need to put your profile data into it.

1.  **Locally**, open your `backend/.env` file.
2.  Temporarily change `MONGODB_URI` to your **production connection string** (the one you used in Render).
3.  Run the seed script in your terminal:
    ```bash
    cd backend
    npm run seed
    ```
4.  Alternatively, use a tool like **MongoDB Compass** to connect to your production database and import your data manually.
5.  **Don't forget** to change your local `MONGODB_URI` back to your local database afterwards if you want to keep developing locally!

## Troubleshooting

-   **CORS Issues**: Your backend is configured to allow all origins (`app.use(cors())`), so this should work fine.
-   **MongoDB Access**: Ensure your MongoDB Atlas "Network Access" allows connections from anywhere (`0.0.0.0/0`) since Render IPs change.
-   **Cold Starts**: The Render free tier spins down after inactivity. The first request might take 50+ seconds. Be patient!
