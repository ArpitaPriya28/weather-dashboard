# Weather Dashboard

A responsive and dynamic weather dashboard built using **React.js**, **Vite**, and **Tailwind CSS**.  
It allows users to search for any city and view real-time weather conditions along with a 5-day forecast, powered by the **OpenWeatherMap API**.

---

## Live Demo

[Click here to view the live app](https://arpitapriya28.github.io/weather-dashboard/)

---

## Features

- Search any city to get weather information
- Current weather display including:
  - City name
  - Temperature (°C)
  - Weather condition icon and description
  - Humidity and Pressure
  - Wind speed
- 5-day weather forecast (fetched from forecast API)
- Auto-location weather on first load (if permission granted)
- Loading indicators and error handling
- Responsive layout for all screen sizes

---

## Tech Stack Used

- **Framework:** React.js with Vite
- **Styling:** Tailwind CSS
- **API:** OpenWeatherMap (Current & Forecast)
- **State Management:** React Hooks (`useState`, `useEffect`)
- **Deployment:** GitHub Pages (`gh-pages` package)

---

## Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/ArpitaPriya28/weather-dashboard.git
cd weather-dashboard

2. Install dependencies

npm install 

3. Run the development server

npm run dev

4. Build for production

npm run build

5. Preview the production build

npm run preview
__________________________________________________________________________________________________________________________________________________________________________

API Integration:

This app uses the OpenWeatherMap Current Weather API.

API Endpoint:
https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric
Get your free API key at: https://openweathermap.org/api

Add the key inside your React component (App.jsx) where the fetch call is made.

Deployment Instructions
This app is deployed using GitHub Pages via the gh-pages npm package.

1. Update vite.config.js
export default defineConfig({
  plugins: [react()],
  base: '/weather-dashboard/' // your GitHub repo name
});


2. Add deploy scripts to package.json

"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}

3. Deploy using the command line

npm run deploy

4. App will be live at:
[https://arpitapriya28.github.io/weather-dashboard](https://arpitapriya28.github.io/weather-dashboard)

_________________________________________________________________________________________________________________________________________________________________________

Contact
Author: Arpita Priya
Email: 2205278@kiit.ac.in
GitHub: https://github.com/ArpitaPriya28/weather-dashboard
__________________________________________________________________________________________________________________________________________________________________________

License
This project is open source and free to use for learning purposes.
