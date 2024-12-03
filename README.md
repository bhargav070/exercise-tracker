---

# Exercise Tracker

An **Exercise Tracker** application built using the **MERN (MongoDB, Express, React, Node.js)** stack. This application allows users to create, view, edit, and delete exercises and user profiles, providing an intuitive interface for tracking workouts and physical activities.

---

## 🌟 Features

1. **User Management**:
   - Add new users with unique usernames.
   - View a list of registered users.
   - Using JWT token for authorising Logged in users to access exercise page.

2. **Exercise Tracking**:
   - Add exercises with details like description, duration, and date.
   - View all exercises in a list with edit and delete options.
   - Update existing exercises as needed.

3. **Responsive Design**:
   - Fully responsive UI for seamless access across devices.

4. **Backend API**:
   - RESTful API built with Express.js for handling user and exercise operations.
   - MongoDB as the database for storing persistent data.

5. **Secure & Scalable**:
   - API configured with CORS for frontend-backend communication.
   - Designed for scalability with modular components.

---

## 🚀 Live Demo

Webapp: [https://exercise-tracker-1-54e9.onrender.com/] 

![image](https://github.com/user-attachments/assets/c68e2758-2966-41ec-be61-477f7750215d)


---

## 🛠️ Tech Stack

### Frontend
- **React.js**: For building the user interface.
- **Bootstrap**: For styling and layout.

### Backend
- **Node.js**: For backend runtime.
- **Express.js**: For building the API.
- **MongoDB**: NoSQL database for storing data.
- **Axios**: For making HTTP requests.

---

## 📂 Directory Structure

```
/backend
  ├── models/         # Mongoose models for User and Exercise
  ├── routes/         # API routes for users and exercises
  ├── server.js       # Entry point for the backend server
  ├── .env            # Environment variables for backend
  ├── package.json    # Backend dependencies and scripts

/frontend
  ├── src/
      ├── components/ # React components for UI
      ├── App.js      # Main React App file
      ├── index.js    # Entry point for React app
  ├── .env            # Environment variables for frontend
  ├── package.json    # Frontend dependencies and scripts

.gitignore            # Ignored files
README.md             # Project documentation
```

---

## 🖥️ Local Setup

Follow these steps to set up the project on your local machine:

### Prerequisites
- Node.js (v16+ recommended)
- MongoDB (local or cloud instance)
- Git

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/bhargav070/exercise-tracker.git
   cd exercise-tracker
   ```

2. Navigate to the `/backend` directory and install dependencies:
   ```bash
   cd backend
   npm install
   ```

3. Set up the `.env` file in the `/backend` directory:
   ```plaintext
   PORT=5000
   MONGO_URI=<your-mongodb-connection-string>
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

5. Open a new terminal, navigate to the `/frontend` directory, and install dependencies:
   ```bash
   cd ../frontend
   npm install
   ```

6. Set up the `.env` file in the `/frontend` directory:
   ```plaintext
   REACT_APP_API_URL=http://localhost:5000
   ```

7. Build and run the frontend:
   ```bash
   npm start
   ```

8. Visit the app at [http://localhost:3000](http://localhost:3000).

---

---

## 🔑 API Endpoints

### Base URL: `https://your-backend-url`

| Method | Endpoint               | Description                     |
|--------|-------------------------|---------------------------------|
| GET    | `/users/`              | Get all users.                 |
| POST   | `/users/add`           | Add a new user.                |
| GET    | `/exercises/`          | Get all exercises.             |
| POST   | `/exercises/add`       | Add a new exercise.            |
| GET    | `/exercises/:id`       | Get a specific exercise by ID. |
| POST   | `/exercises/update/:id`| Update an exercise.            |
| DELETE | `/exercises/:id`       | Delete an exercise.            |

---

## 🔧 Logic Overview

### Frontend Logic
- **Component Structure**:  
  Each feature (Users, Exercises) is managed by a dedicated React component.
- **API Integration**:  
  - Axios is used for fetching data from the backend.
  - State management is handled using React's `useState` and `useEffect` hooks.
- **Routing**:  
  - React Router is used for navigation between pages.

### Backend Logic
- **RESTful API**:  
  Routes are set up to handle CRUD operations for users and exercises.
- **Database Integration**:  
  - Mongoose is used for schema definition and database queries.
  - The `MONGO_URI` is stored securely using environment variables.

---

## 🛡️ Security Measures

- Sensitive data such as API keys and database URIs are stored in `.env` files.
- Implemented CORS to restrict API access to trusted domains.

---

## 🐛 Troubleshooting

- **Frontend Fails to Fetch Data**:  
  Check if the `REACT_APP_API_URL` in the frontend `.env` is pointing to the correct backend URL.
- **Database Connection Issues**:  
  Verify the `MONGO_URI` in the backend `.env` file.
- **CORS Errors**:  
  Ensure the backend CORS configuration allows requests from your frontend domain.

---

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

---
