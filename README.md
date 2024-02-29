# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Endpoints

### 1. Possible Endpoints

This project provides four endpoints that you can use:

1. **User Information:**
   - Endpoint: `http://localhost:3000/user/${userId}`
   - Description: Retrieves information from a user, including user id, user information (first name, last name, and age), the current day's score (`todayScore`), and key data (calories, macronutrients, etc.).

2. **User Activity:**
   - Endpoint: `http://localhost:3000/user/${userId}/activity`
   - Description: Retrieves a user's activity day by day with kilograms and calories.

3. **Average Sessions:**
   - Endpoint: `http://localhost:3000/user/${userId}/average-sessions`
   - Description: Retrieves the average sessions of a user per day. The week starts on Monday.

4. **User Performance:**
   - Endpoint: `http://localhost:3000/user/${userId}/performance`
   - Description: Retrieves a user's performance metrics (energy, endurance, etc.).

**Warning:** Currently, only two users have been mocked with userIds 12 and 18, respectively.

### 2. Examples of Queries

1. Retrieve the performance of the user with id 12:
   - Example Query: `http://localhost:3000/user/12/performance`

2. Retrieve main information for user 18:
   - Example Query: `http://localhost:3000/user/18`
