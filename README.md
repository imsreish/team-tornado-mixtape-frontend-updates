# Mixtape-Updates

## This is a *forked* version of the original repo, used for bug fixing and feature adding. Please go [here](https://github.com/team-tornado-mixtape/team-tornado-mixtape-frontend) if you are looking for the production version of our app.

![Mixtape Logo](/mixtape/src/images/markdown/MixBanner.png)


### *The best way to find and share songs, regardless of the streaming service you use.*


- [Overview](#overview)
- [Installation](#installation)
- [Give feedback](#feedback)


# Overview


#### Mixtape is [Team Mixtape's](https://github.com/team-tornado-mixtape) final project as students of [Team 12](https://github.com/Momentum-Team-12) at [Momentum](https://www.momentumlearn.com/). It is a web app that breaks the Spotify/Apple Music duopoly -- allowing you to create playlists ("mixtapes") that aren't restricted to either streaming service. All of this is offered in a skeumorphic, themable UX reminiscent of the cassette days of yesteryear.


#### When you create a mixtape, you are prompted to add songs. When you search for songs in our interface, our backend makes requests to Spotify and Apple Music asynchronously, checks for matches between the two services and only surfaces song results that are available on both streaming services. The song objects that are returned to the user contain basic metadata -- such as track previews, titles, artists and albums -- as well as more streaming service-specific information -- such as a track's respective Apple Music/Spotify URIs. This is what allows us to make mixtapes that are not exclusively for Spotify or Apple Music -- each song object contains the necessary metadata for each streaming service.


#### We have several upcoming goals to better improve this project:
- #### Normalization of the UX and improving support for smaller-screened devices.
- #### Allowing a Spotify/Apple Music user to provide their credentials, so they can save mixtapes as Spotify/Apple Music playlists.
    - #### *At the moment, we have this  working locally for Spotify, but the request to save a mixtape as a Spotify playlist times itself out in production.*
- #### Allowing a Spotify or Apple Music user to provide their credentials, so they can stream mixtapes directly within our app.
- #### Expanding our song search functionality to search additional streaming services, and subsequently allowing users to provide those credentials to perform the actions described above.
- #### Allowing users of Mixtape to interact with one another with more of a social media-type experience.
        

# Installation


#### Use this guide if you'd like to run this app locally.


#### *This guide presumes you have knowledge of working with GitHub, have git & npm installed and understand navigating your terminal.*


1) Get the link to clone this repo by clicking the Code button at the top of this page, and copy the given link to your clipboard.
2) In your terminal, ```cd``` into your directory of choice.
3) Type ```git clone``` and append your pasted link. Press enter to clone this repo.
4) Once cloned, ```cd``` into ```team-tornado-mixtape-frontend/```, then into ```mixtape/```.
5) Run ```npm install``` to install/resolve any missing dependencies associated with this project.
6) Run ```npm start``` to begin running the installation locally.


# Feedback


#### This project was really fun for our group to work on as a final project. While we are no longer in school together, we are still looking to work on this project! If you come across bugs, have questions, suggestions, or constructive criticisms, please reach out to our team:


- #### Backend
    - #### [Shawna Cooper](https://www.linkedin.com/in/scooper1920/)
    - #### [Gerardo Ayes](https://www.linkedin.com/in/gea23/)
- #### Frontend
    - #### [Jamie Simmonds](https://www.linkedin.com/in/jamie-simmonds-b02b0838/)
    - #### [Stephen Reish](https://www.linkedin.com/in/stephenreish/)


#### *Thanks for checking out our team's final project!*
