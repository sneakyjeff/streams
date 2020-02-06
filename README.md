# Streaming Web Application using React/Redux/OBS (Open Broadcaster Software)

Streaming Web Application

## Description

Creating Web streaming service that allows users basic CRUD operations to create, edit, update, and delete streams.

## Features

- User Sign Up/Sign In with Google OAuth
- User Create, Edit, Update, and Delete Streams
- Global state management using React/Redux
- Ability to stream using OBS (Open Broadcaster Software) services in REAL TIME
- Basic styling using Semantic-UI CSS library

## How To Run

After git cloning and npm install in both server/client, cd to server and run command `npm run dev`

## Folder Structure
```
client/
    public/
        index.html
    src/
        actions/
        api/
        components/
        reducers/
        index.js
rtmpserver/
    index.js
server/
    db.json
```

## Sample Flow
Landing page shows available streams to watch under Stream List and supports ability to Log In/Sign Up from landing page.

![Alt text](/client/src/images/showcase1.png)

Logged in users see a nav bar vs Guest users and logged in users are able to 'Create' streams

![Alt text](/client/src/images/showcase2.png)

Users are ability to create a stream using the stream form that has error handling.

![Alt text](/client/src/images/showcase3.png)

Users are then able to use third party software like OBS and stream to the corresponding URL.

![Alt text](/client/src/images/showcase4.png)
