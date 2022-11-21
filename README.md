# Norbit homework

## Install
> Install the dependencies with the following command:
> `npm install` in all folders (Provider, Server, client)

## Launch:
> First launch the server with `npm run dev`
> then start the client with `npm start`
> after that you can start the provider with `npm run dev`
- Sidenote: The provider is a separate application so you can launch it whenever you want

## Description:

#### Provider(ExpressJs/Socket.io):
  - The provider reads ship coordinates from a csv file
  - provides coordinate/1hz to any server that connects to it.
  
#### Server(ExpressJs/Socket.io):

  - Connects and recives coordinate data from the provider real time.
  - Handles joining clients (saves them in memory)
  - Sends the coordinate datas to the client
  
#### Client(React.Js/Socket.io/OpenLayers):

  - Sends and recives usernames to/from the server.
  - displays the clients name and all the active clients in a list.
  - recives and displays coordinates on a map as a red triangle


## Devlog:
 - 2022.11.12 (Saturday)
 
    > Started to learn ExpressJs by
    > crating a Todo list with ExpressJs and Postgres
    
 - 2022.11.13 (Sunday)
 
    > Created a chat room app to learn about socket.io
    
 - 2022.11.14 (Monday)
 
    > Planned how is want to create a provider
    > started working on it and It could read and write one coordinate / sec
    
 - 2022.11.15 (Tuesday)
 
    > Finnished the provider and connected the server to it
    > after a lot of reseaching and reading realized that i can
    > think of my server as a client to the provider, it was very needed because 
    > I couldn't think of a idea how would two server communicate
    
 - 2022.11.16 (Wednesday)
 
    > Learnt about ipmplementation of socket.io in React.Js
    > Displayed the incoming coordinates
    
 - 2022.11.17 (Thursday)
 
    > Created the user card in React.
    
 - 2022.11.18 (Friday)
 
    > Created a Utility module to handle users in memory (basic CRUD)
    
 - 2022.11.19 (Saturday)
 
    > Started to learn about openLayers, spent the whole day reading documentations
    > and watching videos (both where very rarely usefull for a full beginner)
    
 - 2022.11.20 (Sunday)
 
  > Implemented the open layer map to render ship coordinates
  > map succesfully only renders the triangle every time the coordinates changes
  
 - 2022.11.20 (Monday)
 
  > Writhing read me and reading through my code to think about features I could implement
  
