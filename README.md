# Portfolio Website - Anis Mhamid

This project is a portfolio website developed by Anis Mhamid to showcase his work in web development and demonstrate his skills and achievements. The site includes various sections such as "About Us," "Services," "Our Projects," and "Contact Us," providing a comprehensive view of Anis Mhamid's expertise in web development.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [File Structure](#file-structure)
- [Projects](#projects)
- [Publishing](#publishing)
- [Dependencies](#dependencies)
- [Contact Information](#contact-information)
- [Author](#author)

## Description

This project is a portfolio website created to highlight Anis Mhamid's skills and achievements in web development. It features various sections that provide insight into his work, services, and contact information.

## Features

- **Navbar:** Provides easy navigation through the website and remains available on all pages.
- **About Us:** Offers insight into the project's mission, values, and background.
- **Services:** Clearly presents the services provided.
- **Our Projects:** Showcases previous projects or work, demonstrating capabilities and expertise.
- **Contact Us:** Provides a platform for visitors to communicate via a contact form or direct contact information.
- **Footer:** Contains useful additional links, including quick links to different website sections, social media links, and copyright information.

## File Structure

- **HTML Files:** Contains well-organized HTML files for different sections of the site.
- **SASS Folders:** Used to organize CSS styles, making them more manageable and easy to maintain.
- **main.css:** Compiled CSS file from SASS styles.
- **pages.css:** Additional styles for specific pages, if applicable.

## Projects

### Project Definition

The projects are categorized into two main types:

- **HTML/CSS Projects:** Web projects primarily using HTML and CSS.
- **JavaScript Projects:** Interactive projects primarily using JavaScript.

### Data Structure

Each project in each category contains the following fields:

- **id:** Unique identifier for each project.
- **title:** Title of the project.
- **image:** Path to the promotional image of the project.
- **description:** Description of the project.
- **pageUrl:** URL link to the project's page.
- **alt:** Alternative text for the image.
- **buildYear:** Year the project was built.

### `generateProjectHTML` Function - [File( javascript.generatingProjects.js )](javascript/generatingProjects.js)

This function dynamically creates HTML for each project based on the project data. The function handles the data as follows:

- **Create a `div` element:** Contains the project data and its appearance.
- **Add HTML to the element:** Generates HTML that displays the project title, promotional image, and a button to view project details.
- **Add a Modal:** Provides additional details about the project. A modal is created for each project, which appears when clicking the "More Details" button.
- **Add elements to a `DocumentFragment`:** Used to improve performance by batching all elements and then adding them to the DOM at once.

### Adding HTML to DOM

After creating the HTML for each project category, it is added to the specified elements on the page:

- **HTML/CSS Projects:** Added to the element with id "row1".
- **JavaScript Projects:** Added to the element with id "row2".

### HTML/CSS Projects

1. **Take the Future**
   - **Description:** Designed to deliver an advanced and visually appealing user experience across various devices.
   - **Skills Used:** HTML, CSS, SASS, Bootstrap.
   - **Results:** Offers an attractive and intuitive user experience on different devices, blending elegance and functionality.
   - **Page URL:** [Take the Future](./pages/future.html)
   - **Alt Text:** Anis Mhamid Let Us Lead You Forward

2. **Here and Now**
   - **Description:** Features an elegant design, creating a delightful browsing experience for users.
   - **Skills Used:** HTML, CSS, SASS.
   - **Results:** Impressive clean and organized design that enhances user experience and ease of navigation.
   - **Page URL:** [Here and Now](./pages/here-and-now.html)
   - **Alt Text:** Anis Mhamid Here and Now

3. **Free Consultation**
   - **Description:** Interactive page showcasing the "Free Consultation" service to users.
   - **Skills Used:** HTML, CSS, SASS.
   - **Results:** Boasts a responsive design, ensuring an optimal viewing experience across various devices.
   - **Page URL:** [Free Consultation](./pages/free-consultation-page.html)
   - **Alt Text:** Anis Mhamid Free Consultation Page

4. **Let Us Lead You Forward**
   - **Description:** Offers a unique, attractive, and elegant user experience.
   - **Skills Used:** HTML, CSS, SASS.
   - **Results:** Provides a distinct and captivating user experience, leaving a lasting impression on visitors.
   - **Page URL:** [Let Us Lead You Forward](./pages/leading-forward.html)
   - **Alt Text:** Anis Mhamid Free Consultation Page

5. **Good Coffee for the Morning**
   - **Description:** Designed to provide a pleasant user experience across all screen sizes, featuring an impressive image and registration form.
   - **Skills Used:** HTML, CSS, SASS.
   - **Results:** Provides a high-quality experience for users across various devices.
   - **Page URL:** [Good Coffee for the Morning](./pages/morning-coffe-page.html)
   - **Alt Text:** Anis Mhamid Morning Coffee

6. **See the World Up Close**
   - **Description:** Combines elegance and functionality in web design with an emphasis on readability and visual comfort.
   - **Skills Used:** HTML, CSS, SASS.
   - **Results:** Offers a smooth user experience with a responsive design that balances aesthetics and functionality.
   - **Page URL:** [See the World Up Close](./pages/see-the-wold-page.html)
   - **Alt Text:** Anis Mhamid See The World

7. **Thinking Outside the Box**
   - **Description:** Responsive design suitable for various screen sizes, ensuring a smooth user experience.
   - **Skills Used:** HTML, CSS, SASS.
   - **Results:** Facilitates user experience with a design that adapts to different devices.
   - **Page URL:** [Thinking Outside the Box](./pages/think-so-far-page.html)
   - **Alt Text:** Anis Mhamid Think Far

8. **Let Us Build Your Dream Home**
   - **Description:** Facilitates user experience with a responsive design suitable for various screen sizes.
   - **Skills Used:** HTML, CSS, SASS.
   - **Results:** Responsive design adapts to different devices, ensuring a seamless user experience.
   - **Page URL:** [Let Us Build Your Dream Home](./pages/dream-home.html)
   - **Alt Text:** Anis Mhamid Dream Home

9. **Welcome to Our Fashion World**
   - **Description:** Provides an attractive and easy-to-use user experience on different devices.
   - **Skills Used:** HTML, CSS, SASS.
   - **Results:** Ensures an engaging user experience with an elegant design.
   - **Page URL:** [Welcome to Our Fashion World](./pages/fation.html)
   - **Alt Text:** Anis Mhamid Fashion World

### JavaScript Projects

1. **Calculator**
   - **Description:** HTML for page structure and Bootstrap for improved interface design and responsiveness. JavaScript for implementing programming logic and calculations.
   - **Skills Used:** HTML, Bootstrap, JavaScript.
   - **Page URL:** [Calculator](./pages/calculator.html)
   - **Alt Text:** Anis Mhamid Calculator
   - **Date:** June

2. **Flappy Bird Game**
   - **Description:** A responsive game suitable for various devices, from desktop computers to mobile phones.
   - **Skills Used:** HTML, CSS, JavaScript.
   - **Page URL:** [Flappy Bird](./pages/flappyBird.html)
   - **Alt Text:** Anis Mhamid Flappy Bird Game
   - **Date:** July

3. **Products Cart**
   - **Description:** Provides an attractive and user-friendly experience across different devices.
   - **Skills Used:** HTML, CSS, JavaScript.
   - **Page URL:** [Products Cart](./pages/products-cart.html)
   - **Alt Text:** Anis Mhamid Products Page
   - **Date:** July

4. **My Account**
   - **Description:** An interactive page offering an engaging and user-friendly experience.
   - **Skills Used:** HTML, CSS, JavaScript.
   - **Page URL:** [My Account](./pages/myAccount.html)
   - **Alt Text:** Anis Mhamid My Account
   - **Date:** August

5. **Ultimata Tic Tac Toe**
   - **Description:** A game providing an engaging user experience across different devices.
   - **Skills Used:** HTML, CSS, JavaScript.
   - **Page URL:** [Ultimata Tic Tac Toe](./pages/x-O.html)
   - **Alt Text:** Anis Mhamid Ultimata Tic Tac Toe
   - **Date:** July

6. **Snake**
   - **Description:** A game designed for a pleasant user experience on various devices.
   - **Skills Used:** HTML, CSS, JavaScript.
   - **Page URL:** [Snake](./pages/snake.html)
   - **Alt Text:** Anis Mhamid Snake Game
   - **Date:** July

7. **Manage U**
   - **Description:** An interactive page providing an engaging and user-friendly experience.
   - **Skills Used:** HTML, CSS, JavaScript.
   - **Page URL:** [Manage U](./pages/manageU.html)
   - **Alt Text:** Anis Mhamid Manage U
   - **Date:** July

8. **Flags API**
   - **Description:** An interactive page showcasing a user-friendly experience with various flags.
   - **Skills Used:** HTML, CSS, JavaScript.
   - **Page URL:** [Flags API](./pages/flagsApi.html)
   - **Alt Text:** Anis Mhamid Flags API
   - **Date:** July

9. **Api Fetching To Cards**
   - **Description:** A page demonstrating API fetching to display data in card format.
   - **Skills Used:** HTML, CSS, JavaScript.
   - **Page URL:** [Api Fetching To Cards](./pages/fetchMarketApi.html)
   - **Alt Text:** Anis Mhamid Api Fetching To Cards
   - **Date:** July

10. **Weather API Application**
    - **Description:** Simple weather application that fetches weather data using the OpenWeatherMap API and displays it to the user.
    - **Skills Used:** HTML, CSS, JavaScript.
    - **Page URL:** [Weather API Application](./pages/weather.html)

## Publishing

1. Download the project files.
2. Open the `index.html` file in your web browser and Enjoy (-_-)-/

## Dependencies

- **HTML:** Structure of the web pages.
- **CSS:** Styling for visual appearance.
- **SASS:** Used to organize and improve the writing of CSS styles.
- **JavaScript:** Adds interactivity and functionality.
- **Bootstrap:** Creates a responsive and attractive design.
- **FontAwesome:** Provides web icons.

## Contact Information

For any inquiries or comments, please contact us:

- **Email:** anesmhamed1@gmail.com
- **Phone:** +972 538346915

## Author

Anis Mhamid
