# Aron-Bookings 🏝

[![Netlify Status](https://api.netlify.com/api/v1/badges/2e5e3ce1-1a33-41c4-a6d3-21be63729647/deploy-status)](https://aronhotelbooking-app.netlify.app)
## Table of Contents
* [General Info](#general-info)
* [Screenshot](#screenshot)
* [Features](#features)
* [Technologies](#technologies)
* [Getting Started](#screenshot)



## General Info
Mernstack hotel booking website created using the MERN stack and implementing Redux. This website contains multiple pages that showcase the hotel's amenties and offerings and allows users to browse multiple rooms and book them. All bookings are stored and managed in the backend and user's are only able to book rooms that are currently available based on their selected dates as well as number of guests.
## Screenshot

1. Register Page
   - Seamless registration page which asks for basic details of the user and registers new users using mail id and password which is encrypted!


    - When password and confirm password are not same or the email id already exist, it will display an error message.
    

2. Login Page
   - When the user already have an account and clicks the sign in button, he/she will be directed to the login page where the user needs to enter the registered email id.

   - If the user enters an incorrect password or tries to login by entering an unregisterted email id, it will display an error message.

   - When the user enters valid email id and password, he/she will be allowed to add items to cart and buy them successfully. 

4. Home Page


5. Logout
   - The navbar has a dropdown on User's name from where user can click on logout button which directs the user back to the login page.

Also the website has a favicon icon to enhance its UI and increase its authenticity.

## Features
* Fullstack MERN Hotel Website that utilizes CRUD functionality 
* Users can browse rooms and create bookings on selected dates
* Users enter their details in a checkout form to create a booking and store their information
* Backend handles date collision's and notifies user's if a room is available or unavailable on the selected dates
* User can view and delete their bookings by entering the provivded confirmation code or email
* Room and booking data is stored within a MongoDB databse
* Website is fully responsive and looks great across multiple platforms


## Technologies
The app was created with the following technologies
* MongoDB
* Express.JS
* ReactJS
* Redux
* NodeJS
* SASS


## Getting Started

### Prerequisites

Have NodeJS and MongoDB installed on your machine.

### Required Environment Variables

VARIABLE | Sample value
---- | ---
JWT_SEC  | sample_key
MONGO_URL  | mongodb://localhost/<Database name>

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/gaurav147-star/booking-app.git
   ```
2. ```sh
   cd ./booking-app
   ```
3. Install node dependencies in all folders.
   ```sh
   npm install
   ```
4. Create a new .env file in server directory.
5. Setup the environment variables as described above.
6. Start the server
   ```sh
    nodemon ./index.js
   ```
7. Start the client
   ```sh
    npm start
   ```
8. The frontend is now running at http://localhost:3000/  and backend is now running at http://localhost:8080/
