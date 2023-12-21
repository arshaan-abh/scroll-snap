# React / Vite / TypeScript Boilerplate with Tailwind CSS

## Overview

This project is a template for kickstarting React applications with Vite as the build tool, TypeScript for type safety, and Tailwind CSS for a utility-first CSS framework. It also includes Prettier for code formatting, PostCSS for transforming styles, SWC as the JavaScript compiler, and prettier-plugin-tailwindcss for sorting Tailwind classes.

## Features

- **React**: A popular JavaScript library for building user interfaces.
- **Vite**: A fast, opinionated frontend build tool that aims to provide a faster and leaner development experience.
- **TypeScript**: A superset of JavaScript that adds static types to the language.
- **Tailwind CSS**: A utility-first CSS framework that makes it easy to create responsive and visually consistent designs.
- **Prettier**: An opinionated code formatter that enforces a consistent coding style.
- **PostCSS**: A tool for transforming styles with JavaScript plugins.
- **SWC**: A fast JavaScript/TypeScript compiler.
- **prettier-plugin-tailwindcss**: A Prettier plugin for sorting Tailwind CSS classes.
- **Linting**: Integrated ESLint for JavaScript/TypeScript linting.

## Getting Started

1. Clone this repository:

   ```bash
   git clone https://github.com/arshaan-abh/template-react.git
   ```

2. Navigate to the project directory:

   ```bash
   cd template-react
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Available Scripts

In the project directory, you can run:

- **Development Server:**

  ```bash
  npm run dev
  ```

  Runs the app in development mode. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

- **Build for Production:**

  ```bash
  npm run build
  ```

  Builds the app for production to the `dist` folder.

- **Linting:**

  ```bash
  npm run lint
  ```

  Lints JavaScript/TypeScript files using ESLint.

- **Formatting with Prettier:**

  ```bash
  npx prettier . --write
  ```

  Formats the code using Prettier.

## Pre-Commit Hooks

This project is configured with pre-commit hooks using [Husky](https://github.com/typicode/husky) to run linting and formatting before each commit. This ensures consistent code quality throughout the development process.

## Customize Configuration

- **Tailwind CSS Configuration:**

  Tailwind CSS configuration is located in the `tailwind.config.js` file. Customize this file to tailor Tailwind to your project's specific needs.

- **PostCSS Configuration:**

  PostCSS configuration is in the `postcss.config.js` file. Add or modify plugins here to enhance or modify your styles.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.txt) file for details.

## Acknowledgments

- Thanks to the creators and maintainers of React, Vite, TypeScript, Tailwind CSS, Prettier, PostCSS, SWC, ESLint, and stylelint for their amazing tools and contributions to the development community.
