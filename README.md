# Coin Pulse

Coin Pulse is a cryptocurrency tracking application that allows users to fetch and view data from the Coin Market Cap API. It features pagination, sorting, search filter, dark & light mode, and detailed pages for individual crypto coins with charts and price calculator.

## Live Demo

- Front-end: [https://coin-pulse.vercel.app/](https://coin-pulse.vercel.app/)
- Back-end API: [https://coin-pulse.onrender.com/](https://coin-pulse.onrender.com/)

## Technologies Used

- Front-end:
  - React: A popular JavaScript library for building user interfaces.
  - TypeScript: A superset of JavaScript that adds static typing to the language.
  - Tailwind CSS: A utility-first CSS framework for rapidly building custom user interfaces.
  - React Router DOM: A library for routing in React applications.
  - Axios: A promise-based HTTP client for making API requests.
  - Apex Charts: A modern charting library for building interactive charts.
  - React Icons: A library of popular icons for React applications.
  - React Masonry CSS: A responsive masonry layout library for React.

- Back-end:
  - Node.js: A JavaScript runtime for building server-side applications.
  - Express: A popular web framework for building APIs with Node.js.
  - Axios: A promise-based HTTP client for making API requests.
  - Body-parser: A middleware for parsing HTTP request bodies.
  - Cors: A middleware for handling Cross-Origin Resource Sharing.
  - Dotenv: A module for loading environment variables from a `.env` file.

## Features

- Pagination: Users can navigate through the list of crypto coins using pagination.
- Sorting: Users can sort the list of crypto coins by various criteria such as name, price, market cap, etc.
- Search Filter: Users can search for specific crypto coins by name or symbol.
- Dark & Light Mode: Users can switch between dark and light mode for better visual experience.
- Detailed Pages: Users can view detailed information about a specific crypto coin, including price charts and a price calculator.

## Installation

1. Clone the repository: `git clone https://github.com/ShrideepP/coin-pulse.git`
2. Install dependencies for front-end: `cd client && npm install`
3. Install dependencies for back-end: `cd server && npm install`
4. Create a `.env` file in the `server` directory and set your API key for Coin Market Cap API as `API_KEY=<your-api-key>`
5. Start the development server for front-end: `cd client && npm run dev`
6. Start the development server for back-end: `cd server && npm run dev`
7. Access the application in your web browser at `http://localhost:5173`

## API Usage

Coin Pulse uses the Coin Market Cap API to fetch cryptocurrency data. To use the application, you need to obtain an API key from Coin Market Cap and set it in the `.env` file in the `server` directory.

## Contributions

Contributions to Coin Pulse are welcome! If you would like to contribute, please fork the repository and submit a pull request with your changes. Be sure to follow the code style and guidelines of the project.

## Contact

For any inquiries or questions, please contact me at shrideeppakhare2005@gmail.com.

Happy coding!
