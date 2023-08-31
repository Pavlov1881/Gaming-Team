# Gaming-Team
**Gaming-Team** is a multipage application using MVC architecture for my JS Back-End course final exam preparation

## Introduction
The visitors can view the home page and All Games Code catalog with the available offers. They can also register with an email, username, and password, which will allow them to create their offers for game code and buy games (if the current user is not the owner of the game). Authors can edit or delete posts at any time.

The application provide **guests** (not logged-in users) with the functionality to **login**, **register**, and view the home page, the All Games Code page, and the details page.

The application should provide **users** (logged-in) with the functionality to:

•	view the home page and all the other pages with logged-in navigation;

•	view the All Games Code page;

•	create а new game offer (Create Game Offer);

•	access the game details pages (Details);

•	buy games (if the current user is not the owner of the offer);

•	delete or edit the offer depending on the user's authentication (only for the owner of the current game offer).

## << Application Pages >>

### Home Page (Guests and Logged-in Users) 
![home-page](https://github.com/Pavlov1881/Gaming-Team/blob/main/public/images/home-page.png)

### Game Catalog (Guests and Logged-in Users)
![catalog](https://github.com/Pavlov1881/Gaming-Team/blob/main/public/images/game-catalog.png)

### Details Page (Guests)
![details-guests](https://github.com/Pavlov1881/Gaming-Team/blob/main/public/images/details%20page%20-%20guests.png)

### Login Page (Guests)
![login-page](https://github.com/Pavlov1881/Gaming-Team/blob/main/public/images/login-page.png)

### Register Page (Guests)
![register-pate](https://github.com/Pavlov1881/Gaming-Team/blob/main/public/images/register-page.png)

## Database Models 

**User**

•	username: string (required),

•	email: string (required),

•	password: string (required)

**Game**

•	name: string (required),

•	image: string (required),

•	price: number (required),

•	description: string (required),

•	genre: string (required),

•	platform: string (required; one of the following: "PC", "Nintendo", "PS4", "PS5", "XBOX"),

•	boughtBy: a collection (array) of users (references to the "User" model)

•	owner: object ID (a reference to the "User" model)


## << Security features >>
•	Guests (not logged-in) can access the home page.

•	Guests (not logged-in) can access the login page and functionality.

•	Guests (not logged-in) can access the register page and functionality.

•	Guests (not logged-in) and users (logged-in) can access the All Games Code (where all game offers are listed).

•	Guests (not logged-in) can access the details page without functionality.

•	Logged-in users can access the home page.

•	Logged-in users can access the details page and functionality.

•	Logged-in users (not the owner of the current offer) can buy the game code.

•	The logged-in owner of the current game offer can edit and delete it.

•	Logged-in users can access Create Game Offer page and functionality.

•	Logged-in users can access logout functionality.

## << Validation and Error Handling >>

**User**

•	The username should be at least five characters long.

•	The email should be at least ten character long.

•	The password should be at least four characters long.

•	The password confirmation should be equal to the password.
 
**Game**

•	The platform must be one of the following options: "PC", "Nintendo", "PS4", "PS5", "XBOX".

•	The name should be at least four characters.

•	The game image should start with "http://" or "https://".

•	The price should be a positive number.

•	The genre should be at least two characters long.

•	The description should be at least ten characters long.






