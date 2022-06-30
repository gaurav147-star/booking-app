# Aron-Bookings 🏝

[![Netlify Status](https://api.netlify.com/api/v1/badges/2e5e3ce1-1a33-41c4-a6d3-21be63729647/deploy-status)](https://aronhotelbooking-app.netlify.app)
## Table of Contents
* [General Info](#general-info)
* [Usage](#usage)
* [Features](#features)
* [Technologies](#technologies)
* [Screenshot](#screenshot)



## General Info
This is a Proof of Concept (POC) fullstack hotel website created using the MERN stack and implementing Redux. This website contains multiple pages that showcase the hotel's amenties and offerings and allows users to browse multiple rooms and book them. All bookings are stored and managed in the backend and user's are only able to book rooms that are currently available based on their selected dates as well as number of guests.


## Usage
Simply click on the demo link provided.
If you wish to download the code and use it, you must first download or clone the repo.
If you want to use your own MongoDb Atlas server, you must configure the .env file with your MongoDB database and then run ```npm install ``` to install the dependencies and then start the server with ```npm start ```

If you just want to use the client then simply go to the client folder, run ```npm install ``` to install the dependencies and then start the client with ```npm start ```

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
