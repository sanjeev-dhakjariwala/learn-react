# Learn React: E-Commerce Store

A modern e-commerce frontend application built with React, Vite, and TypeScript. This project serves as a comprehensive example of building scalable, typed React applications using contemporary best practices and tooling.

## 🚀 Technologies Used

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **API/Data**: [FakeStoreAPI](https://fakestoreapi.com/)
- **Styling**: CSS Modules for scoped, maintainable styling

## ✨ Features

- **Product Listing**: Displays a grid of products fetched dynamically from FakeStoreAPI.
- **Search Functionality**: Users can search and filter products by title or category in real-time.
- **Product Details**: A dedicated page for each product showing full details, including dynamic star ratings, formatted prices, and detailed descriptions.
- **Category Navigation**: Dedicated routes for `/electronics`, `/groceries`, and more.
- **Responsive Design**: Built using modern CSS to ensure the app looks great on all devices.
- **Robust Data Fetching**: Uses modern patterns like `AbortController` in `useEffect` for clean request management and cleanup.

## 📁 Project Structure

```text
src/
├── assets/          # Static assets (images, icons)
├── components/      # Reusable UI components (ProductInfo, SearchBar)
├── container/       # Page-level components & routing views
│   ├── about/       # About page
│   ├── electronics/ # Electronics category page
│   ├── groceries/   # Groceries category page
│   ├── header/      # Main application header navigation
│   ├── home/        # Home page (product listing & search)
│   └── product-details/ # Individual product detail view
├── types/           # TypeScript type definitions (ProductInfoType, etc.)
├── utils/           # Utility functions and constants (API_URL)
├── App.tsx          # Main application component & route configuration
└── main.tsx         # Application entry point
```

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm, yarn, or pnpm

### Installation

1. Clone the repository and navigate to the project directory:
   ```bash
   cd learn-react
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173/` (or the port specified by Vite).

## 📜 Scripts

- `npm run dev` - Starts the Vite development server.
- `npm run build` - Compiles TypeScript and builds the application for production.
- `npm run lint` - Runs ESLint to identify and report on patterns found in ECMAScript/JavaScript code.
- `npm run preview` - Boots up a local static web server to serve the files from the `dist` folder.

## 🧠 Learning Highlights

This project demonstrates several key React concepts:
- **Hooks**: Extensive use of `useState`, `useEffect`, and `useCallback` for state management and optimization.
- **Custom Routing**: Structured navigation using `react-router-dom` with parameters (`/home/:id`).
- **Data Fetching Patterns**: Handling loading states, error boundaries, and request cancellation.
- **TypeScript Integration**: Strong typing for API payloads and component props.
