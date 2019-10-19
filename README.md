# The Generation Change Project

Hi 👋 Welcome to [The Generation Change Project](https://generation-change.netlify.com/), a website that allows educators (teachers, scout leaders and anyone that works or volunteers with young adults) to find local social action projects for their young people. 👨‍👨‍👦‍👦

## Our problem 🤔

[Generation Change](https://www.generationchange.org.uk/) is a charity with a mission to make social action a normal and ordinary part of growing up for the youth of the UK. After years of working in the sector and conducting research, director [David Reed](https://www.generationchange.org.uk/our-team) realised that young people and the people that work with them were keen to get involved in social impact projects, and projects were more than willing to have them - but often the methods of connecting them were poor or non existent. The need for a website that allows educators to easily search for local social action projects was evident, and he came to [Founders & Coders](https://www.foundersandcoders.com/) to see if they could help him find an answer.

## Team 🤼‍♂️

* [Sam Harris](https://github.com/samjam48) - QA Lead
* [Christine Altmann](https://github.com/xIrusux) - DevOps Lead
* [Gergana Minova](https://github.com/gminova) - UX/UI Lead
* [Georgia Shaw](https://github.com/georgiamshaw) - Scrum Master

Find our more about the [team members](https://github.com/fac-17/Generation-Change/wiki/Team) and their [roles](https://github.com/fac-17/Generation-Change/wiki/Team-Roles) in this project.

## Getting Started 🏁

To download our project:

    git clone git@github.com:fac-17/Generation-Change.git

    cd Generation-Change

    npm i
    
    touch .env

To run the project locally:

    netlify dev

## Tech Stuff 💻

Read about what we're using and why in our [tech stack](https://github.com/fac-17/Generation-Change/wiki/Tech-Stack) and [dependencies](https://github.com/fac-17/Generation-Change/wiki/Dependencies) sections in the wiki.

## Talking you through the project

This project was built over three week long sprints - the first was a design sprint, and this was followed by two build sprints.

### Design Sprint

During this week, we refined our key [user journey](https://github.com/fac-17/Generation-Change/wiki/08.-User-Journeys) and our [user stories](https://github.com/fac-17/Generation-Change/wiki/09.-User-Stories). We also put together our [prototypes](https://www.figma.com/file/hGRdFiJBUSRzSzAAlDqv9G/Generation-Change?node-id=6%3A610).

We conducted user testing on networks of educators that already existed with our team - you can find an example of a questionnaire that was sent out [here.](https://docs.google.com/forms/d/e/1FAIpQLSfcFrBDQ7es6ap54KL29hYTFuoGKvEBvRlez47gYqsyX-YxBA/viewform?usp=sf_link) Our project manager David also conducted some user research, and you can find the results of that here. 

### Build Sprint 1

**What we've achieved:**
 * We have managed to hide our Airtable API key using Lambda functions
 * We can display our data from our Airtable on the browser
 * We have some styling
 * We can map through our data and display the same data for different social action projects on the same page

**What we're stuck on:**
 * We have been trying to use Google Maps Javascript API, but we're struggling to find a way to hide the API key in a Lambda function. All the docs we've found suggest that the API key is supposed to be used on the front end, and we can't find anything that shows how to hide it on the back end. We think maybe it's because if it was on the backend we'd have to call the backend with every re-render. The Google Maps API description has it embedded in the front end [(see code here)](https://developers.google.com/maps/documentation/javascript/tutorial) but we don't particularly want our API key to be visible. We are considering just moving to an open source maps API like [Leaflet.](https://github.com/Leaflet/Leaflet)
 * We haven't really found much info about how to use Google Maps or just a maps API with React Hooks.
 * At the moment, we are taking the postcode that has been entered into our Airtable and manually converting that to latitude and longitude, which we then store in our Airtable and use for our API calls. Obviously, this is laborious and we would love to be able to automate this - so someone can enter data into the Airtable, and the postcode they put in automatically gets converted into longitude and latitude. You can fnd out more by checking out [this issue](https://github.com/fac-17/Generation-Change/issues/48) and maybe [this issue,](https://github.com/fac-17/Generation-Change/issues/41) too.
 
### Build Sprint 2

**What we've achieved:**
* We have all the basic functionality we need for our MVP.
* Leaflet Maps is working and we can display and add markers to the map.
* Styling is getting there and just needs a bit of cleaning up ahead of handover with Product Manager on Friday.

**What we're stuck on:**
* Two things that are really important for the map that we're working on today are:
    * Taking the postcode inputted into the searchbar and using that as the central point of our map.
    * Linking the markers on the map to the location of the results shown on the results page (so that each marker represents       a result and shows its location).
* If you enter your postcode on the landing page, and go to the results page, you'll see your results. However, if you then refresh the results page, you get an error. This happens on the details page too. We've created an issue for it [here,](https://github.com/fac-17/Generation-Change/issues/92) which explains it a bit more in detail.
