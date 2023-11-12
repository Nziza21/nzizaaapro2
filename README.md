Cat's Images Application
Welcome to the Cat's Images Application, a simple React-based web application that allows users to view a gallery of cat images and apply filters based on minimum width and height.

Author
NZIZA SAMUEL

Overview
This application fetches cat images from the The Cat API and presents them in a gallery format. Users can apply filters to display only those images that meet specific width and height criteria.

Project Structure
The project is structured into several components:

Header: Displays the title of the application, "Cat's Image Gallery."

Filters: Allows users to input minimum width and height values and apply filters to the cat images.

Gallery: Renders a gallery of cat images, utilizing the CatImage component for each image.

CatImage: Displays an individual cat image with additional information such as height and width.

Footer: Displays a simple footer with the author's name and copyright information.

App: The main component that orchestrates the entire application. It fetches cat images on mount, passes data down to child components, and manages filter state.

Getting Started
To run the Cat's Images Application locally, follow these steps:

Clone the repository: git@github.com:Nziza21/nzizaaapro2.git

bash
git clone [git@github.com:Nziza21/nzizaaapro2.git]
Navigate to the project directory:

bash
cd cat-images-application
Install dependencies:

bash
npm install
Start the application:

bash
npm start
The application will be accessible at http://localhost:3000 in your web browser.

Alternatively, you can view the deployed version of the application on Netlify: Cat's Images App on Netlify

Usage
Upon loading the application, a gallery of cat images is displayed.

Use the filters section to input minimum width and height values.

Click the "Apply Filters" button to filter the cat images based on the specified criteria.

Explore the cat images and enjoy the adorable feline pictures!

Dependencies
React
The Cat API
Acknowledgments
Special thanks to The Cat API for providing the delightful cat images used in this application.

License
This project is licensed under the MIT License - see the LICENSE file for details.
