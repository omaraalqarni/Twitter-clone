# Twitter-clone

Lets hope it works:)

A basic twitter clone built to demonstrate the full stack 🥞 (client, server, database).

With the following features:

* User can send tweets 🐦✉️
* Users can see all Tweets that have been sent 🐦🗂

## Objectives

* [ ] 📝 Diagram the Full Stack
* [ ] ⌨️ Get user input on the Client
* [ ] ➡️ Send user input from the client with fetch to the server
* [ ] 🗃 Store data in a database
* [ ] 🔍 Retrieve data from a database on the Server
* [ ] ⬅️ Retrieve data from a server on the client using Fetch
* [ ] 🙈 Hide/Show elements on the client
* [ ] ✨ Add elements to the page on the client
* [ ] 🚀 Deploy the client with now.sh
* [ ] 🚀 Deploy the database with mlab
* [ ] 🚀 Deploy the server with now.sh

## Front-end

* [x] Setup index.html
* [x] Bring in Materialize CSS
  * https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css
* [x] Create Header
* [x] Create form
  * [x] Name
  * [x] Content

* [x] link to jQuery
* [x] Listen for form submit
* [x] Hide the form
* [x] Show loading spinner
* [x] Get data from form and log it
✅ Get user input on the Client
✅ Hide/Show elements on the client

## Back-end

* [x] npm init -y
* [x] npm install express morgan helmet cookie-parser
* [x] Setup index.js
* [x] Add GET / route
* [x] Add POST /tweets route
  * [x] log out req.body

## Front-end

* [x] fetch POST /tweets with form data
* [ ] setup cors
* [ ] Send user input from the client with fetch to the server

## Back-end

* [ ] npm install cors
* [ ] Make sure the server is recieving the data
* [ ] Add JSON body parser middleware
* [ ] Validate name and content
  * [ ] Must be a string
  * [ ] Cannot be empty
* [ ] If not valid
  * [ ] Error code 422
  * [ ] Invalid tweet, must contain name and content
* [ ] Setup DB Connection
  * [ ] npm install monk
  * [ ] connect to db
  * [ ] create document collection (tweets)
* [ ] If Valid
  * [ ] Create tweet object with
    * [ ] name, content, created_date
  * [ ] Insert into DB
  * [ ] Respond with created tweet object
* [ ] Store data in a database

## Front-end

* [ ] Log out created tweet after POST request
* [ ] Show the form
* [ ] Hide loading spinner

## Back-end

* [ ] GET /tweets
  * [ ] Respond with tweets from DB
* [ ] Retrieve data from a database on the Server

## Front-end

* [ ] fetch GET /tweets
  * [ ] Iterate over array
  * [ ] Append each to page
  * [ ] Reverse before appending
  * [ ] Show the form
  * [ ] Hide loading spinner
* [ ] fetch GET /tweets after creating a tweet
* [ ] Retrieve data from a server on the client using Fetch
* [ ] Hide/Show elements on the client
* [ ] Add elements to the page on the client

## Back-end

* [ ] npm install bad-words
  * [ ] Use filter before inserting into DB
* [ ] npm install express-rate-limit
  * [ ] Limit to 1 request every 15 seconds

## Deploy

* [ ] Deploy server with now
  * [ ] Setup environment variables
    * [ ] Database connection
      * process.env.MONGO_URI
  * [ ] Show mlab
  * [ ] Deploy with environment variable
    * now -e MONGO_URI=@meower-db
  * [ ] Add alias
* [ ] Deploy client folder with now
  * [ ] Set API_URL based on hostname

## What's next?

* Add comments/replies to a tweet
* User Accounts
  * Don't just have the user enter their name
  * Sign up/Login
* User Profiles
  - Only show tweets from a given user
* Search tweets
* Hashtags
* User @mentions
* Realtime feed of tweets