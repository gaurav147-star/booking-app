# Aron-Bookings
![image](https://github.com/gaurav147-star/booking-app/assets/78996081/36bd7835-c39a-4043-9e2c-54ccf1c43a8c)

<p align="center">
  <a href="https://aronhotelbooking-app.netlify.app/">View Deployed Website</a>
</p>

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
   - A seamless registration page collects basic user information like name, email, and password. When a user signs up, their password is encrypted for security purposes before being stored in the database. This ensures that sensitive information remains protected.

     ![image](https://github.com/gaurav147-star/booking-app/assets/78996081/035a074a-7a28-40f9-85af-44c7bd2cb7de)

2. Login Page
   - When the user already have an account and clicks the sign in button, he/she will be directed to the login page where the user needs to enter the registered email id.

      ![image](https://github.com/gaurav147-star/booking-app/assets/78996081/98c61bd7-cb4a-469b-af76-c0d0247f1531)

3. Home Page
   - The homepage is like a picture gallery of hotels. It shows images, names, ratings, and quick details about different places to stay. It's a visual snapshot to help you decide where you might want to book.
     
      ![image](https://github.com/gaurav147-star/booking-app/assets/78996081/bd3883a7-46d2-4ca0-a669-2ad2f9479b9e)

4. Profile Page
   - At the top right corner of the homepage, there's a little box you can click on. When you click it, a menu drops down. In that menu, there's an option called "Profile." If you select that, it takes you to a page where you can see and manage your personal information, like your name, email, and maybe other details you provided when you signed up.

     ![image](https://github.com/gaurav147-star/booking-app/assets/78996081/244784bd-877a-4394-a6c3-97ed08fc5317)
   - This page shows your profile with all your details. It's like your personal info card, displaying things like your name, email, and any other information you shared when signing up.

     ![image](https://github.com/gaurav147-star/booking-app/assets/78996081/7608d5cf-137b-49fd-8412-7f8bc24eef01)

5. Search bar
   - In the search bar, type where you want to go and pick the dates. Then, say how many adults, kids, and rooms you need. It helps find the right place for your stay based on those details.

      ![image](https://github.com/gaurav147-star/booking-app/assets/78996081/448e5355-37df-430b-b0a3-c9edf869b8a9)
6. Hotels page after filter
   -  On the hotels page, you can use the search bar to type where you want to go. It then shows you all the hotels available in that destination.

      ![image](https://github.com/gaurav147-star/booking-app/assets/78996081/ea09eb97-114b-4d53-82f4-e2966912f468)
  
   -  On the hotels page, there's a way to set a price range using a minimum and maximum amount. When you do this, it filters and shows only the hotels that fit within that price range.
   
      ![image](https://github.com/gaurav147-star/booking-app/assets/78996081/06266b45-db6e-4dbf-85bb-d1941cc63c3e)


7. Particular Hotel page
   - When you click on a specific hotel, it gives you all the details you need: where it is, a description of the place, what facilities they have, and options to reserve or book a room right there. It's like a mini-guide for that hotel to help you decide if it's the right one for you.

      ![image](https://github.com/gaurav147-star/booking-app/assets/78996081/4fbae525-f7c4-475d-aeec-ae421493c1c3)
8. Payment page
   - On the payment page, fill in your details. If there's a "pay at hotel" option, you might see that choice. Click "book now" after entering everything. A confirmation message will pop up, and that means your booking is complete!

      ![image](https://github.com/gaurav147-star/booking-app/assets/78996081/54c087ab-cb25-4e44-a7fd-1947ee6af7c9)
      
      ![image](https://github.com/gaurav147-star/booking-app/assets/78996081/c02b405d-7d07-49de-9e9b-a5fd6d780bdb)

9. Logout
    - The navbar has a dropdown on User's name from where user can click on logout button which directs the user back to the login page.

      ![image](https://github.com/gaurav147-star/booking-app/assets/78996081/bc9707de-3012-40b2-be60-a90d5b20c5fa)


Also the website has a favicon icon to enhance its UI and increase its authenticity.
![image](https://github.com/gaurav147-star/booking-app/assets/78996081/7169d422-dc4b-4ba2-b975-332cdeb8cb73)

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
