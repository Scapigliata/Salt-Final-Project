# Please note
Images, names and values has been changed to not show real data

# App
The app is an application for the consumers to get information and choose restaurants based on CO2 emission labeling. The user can see a map based on the person’s location, and has access to information regarding restaurants within the area and can sort by emission, price and name.

# Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

The app has two project setup, client and server.

# Server
CD into to the server folder and install its dependencies.

## Installing
To install dependencies go to the terminal and type this script:
### `npm install`

To run the environment:
### `npm run dev`

The server is running on port 3000 localhost in development mode.

## Usage for environment in Server
Rename the `.env.mock` file in the root of your project in the server folder to `.env`.

Add your application configuration to your .env file:
 <br/>
  *`GOOGLE_MAPS_API_KEY=YOUR_SECRET_KEY_GOES_HERE`*
 <br/>
  *`DB_URI=YOUR_SECRET_MONGODB_URI_GOES_HERE`*

# Client
CD into to the client and install its dependencies.

## Installing
Go to the terminal and enter this script:
### `npm install` 

To run the environment:
### `npm run start`

This will open Metro Bundler in your browser.

## Usage environment in Client
Rename the file called `env.mock.js` to `env.js` in the root of the client repo. Inside the file, add:

 *`export const LOCAL_IP='YOUR_IP_HERE'`* 
 <br/>
 *`export const GOOGLE_MAPS_API_KEY='YOUR_GOOGLE_API_KEY_HERE'`*

## To Run Tests
### `npm run test`

## To Run linter
### `npm run lint`

Eslint has been setup with Airbnb ruleset.

## View Examples

# Discover,  Nearby, Profile
![Examples](/Examples.png)  
<br/>

## Debug with React-Native Redux
Before you can test the application with Redux, you will need to download the `React Native Debugger`.

After you have download it or already have it on the computer, open up the menu in the emulator and run `Debug Remote JS` and open the debbuger.
 
# Deployment
Built With:
[Expo](https://docs.expo.io/versions/v35.0.0/)

## Client
* React-native
* React
* Redux
* React-redux
* React-native-paper

## Server
* Express - Server framework
* MongoDB - NoSQL database
* Mongoose - MongoDB schema

## Authors
* [Anel Mesic](https://github.com/AMMesic)
* [Christian Aman Johansson](https://github.com/Christian-Aman)
* [Paulina Ludwig Torreblanca](https://github.com/Scapigliata)
* [Otkur Ötkur](https://github.com/OtkurO)

## Copyright
All rights reserved School of Applied Technology 
