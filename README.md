🌍 World Atlas - An Interactive Country Explorer
A dynamic and responsive single-page application (SPA) built with React.js that allows users to explore countries around the world. The application features a sleek dark theme, live search, and region-based filtering, all powered by the REST Countries API.

Live Demo: https://your-live-demo-url.vercel.app

(Note: Replace the image URL above with a real screenshot or a GIF of your project. This is highly recommended!)

📖 About The Project
This project was built to demonstrate a comprehensive understanding of modern frontend development with React. The primary goal was to create a clean, fast, and user-friendly interface for fetching and displaying a large amount of data from a public API.

The application's architecture is centered around reusable React components and efficient state management using React Hooks. All data is fetched asynchronously from the REST Countries API. The main challenge was to implement client-side search and filtering logic that provides an instant, responsive user experience without constant API calls for every keystroke.

A key feature is the implementation of dynamic routing using react-router-dom. This allows for a seamless multi-page experience within a single-page application architecture. Each country has a unique, shareable URL, and navigating between a country's detail page and its bordering countries is intuitive and fast.

Special attention was also given to the user interface and experience, highlighted by the dark mode feature. The user's theme preference is persisted across sessions using localStorage, demonstrating a practical understanding of enhancing user experience through state persistence.

✨ Key Features
This application includes a range of features designed to showcase core frontend development skills:

🌐 Comprehensive Country Data: Browse all countries from the API, displayed on clean, responsive cards.

🔍 Live Search Functionality: Instantly find any country by typing its name in the search bar. The list updates in real-time, showcasing efficient client-side state management.

🗂️ Filter by Region: Easily filter the list of countries by continent (e.g., Africa, Americas, Asia, Europe, Oceania), demonstrating controlled component logic.

🌗 Dark/Light Theme Toggle: A user-friendly theme switcher for comfortable viewing. This feature highlights an understanding of state persistence by saving the user's choice in localStorage.

🚀 Dynamic Routing: Click on any country card to navigate to a dynamically generated page (/country/:name) with more detailed information, including bordering countries that are themselves clickable links. This is powered by react-router-dom.

📱 Fully Responsive Design: The layout is optimized with modern CSS (or a framework like Tailwind CSS/Bootstrap) to look and function perfectly on all devices, from large desktops to small mobile phones.

🛠️ Tech Stack
This project was built using the following technologies:

React.js: For building the component-based user interface.

React Hooks: (useState, useEffect) for state management and handling side effects like API calls.

React Router: For all client-side routing and dynamic page creation.

Axios: For making asynchronous GET requests to the REST Countries API.

CSS / Bootstrap / Tailwind CSS: For styling and creating a responsive layout.

REST APIs: For data consumption.

⚙️ Getting Started
To get a local copy up and running, follow these simple steps.

Clone the repository


Navigate to the project directory

cd your-repo-name

Install NPM packages

npm install

Start the development server

npm run dev