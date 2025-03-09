# Restaurant Page

This is a simple restaurant website built using JavaScript and Webpack as part of The Odin Project. It dynamically renders different sections of the website using JavaScript modules.

## Features
- Homepage with a restaurant welcome message
- Menu page displaying available dishes
- Contact page with an input form
- Navigation through dynamically created tabs
- Styled using Tailwind CSS

## Project Structure
```
Restaurant-Page/
│-- dist/               # Output directory for bundled files
│-- node_modules/       # Dependencies installed via npm
│-- src/                # Source files
│   │-- contact.js      # Contact page module
│   │-- index.js        # Main entry point
│   │-- input.css       # Tailwind CSS input file
│   │-- loadpage.js     # Initial page load logic
│   │-- menu.js         # Menu page module
│   │-- restaurant.js   # Restaurant page module
│   │-- tabs.js         # Tab switching logic
│-- package.json        # Project metadata and dependencies
│-- tailwind.config.js  # Tailwind CSS configuration
│-- webpack.config.js   # Webpack configuration
```

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/Restaurant-Page.git
   cd Restaurant-Page
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```

## Technologies Used
- JavaScript (ES6 Modules)
- Webpack (Module Bundler)
- Tailwind CSS (Styling)

## License
This project is licensed under the ISC License.

## Acknowledgments
This project is part of [The Odin Project](https://www.theodinproject.com) curriculum.

