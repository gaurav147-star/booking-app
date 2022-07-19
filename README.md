# Aron-Bookings 🏝

[![Netlify Status](https://api.netlify.com/api/v1/badges/2e5e3ce1-1a33-41c4-a6d3-21be63729647/deploy-status)](https://aronhotelbooking-app.netlify.app)
## Table of Contents
* [General Info](#general-info)
* [Features](#features)
* [Technologies](#technologies)
* [Screenshot](#screenshot)
* [Getting Started](#screenshot)



## General Info
Mernstack hotel booking website created using the MERN stack and implementing Redux. This website contains multiple pages that showcase the hotel's amenties and offerings and allows users to browse multiple rooms and book them. All bookings are stored and managed in the backend and user's are only able to book rooms that are currently available based on their selected dates as well as number of guests.

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

## Screenshot
![home_page](https://user-images.githubusercontent.com/78996081/176459502-7c8437bd-fcce-4db2-abed-3feef81f9a6c.png)

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
