# Trender: A Reddit Clone

## General

- Need it addresses
    - Hackernews is a well-curated community
    - Reddit's biggest pitfall is the lack of quality content because of the "hivemind" mentality that downvoting encourages.

- API Calls
    - Popular Words Data Visualization
        - [Example](https://io9.gizmodo.com/fascinating-data-visualization-shows-which-words-we-use-1720354752)
        - Need to find actual API
    - [Clarifai Computer Vision AI](https://clarifai.com/)
        - Upload image/video and the AI will classify what the image with a certain probability
        - Can be used to help users filter by topics similar to results
            - Maybe tie to first five results
            - Give user the chance to remove result that is inaccurate
            - Could this be used to train their model?


- Database
    - Sequelize & PostgreSQL
    - Tables
        - Subreddits
        - Topics
        - Users
        - Posts

## Ideas

- Allow for custom subs
    - Merge together existing subs

- Reactions Instead of Upvote/Downvote
    - Generic upvote/like/good reaction by default
    - Add ability to have other reactions enabled
        - Funny
        - Informative
        - Sad/Angry
    - Downvote/dislike/bad reaction restricted by a certain metric
        - Default metric could be 500 good/neutral reactions/karma
        - Other metrics:
            - Time subscribed to sub
            - Age of account
        - Make it customizable by subcreator/moderators

- Inspiration & Guides
    - [Dribble Designs](https://dribbble.com/RDCLder/buckets/1011227-Reddit-Clone)
    - [React/Firebase Clone](https://www.sitepoint.com/reddit-clone-react-firebase/)
    - [Official Reddit Github](https://github.com/reddit/)

## Schedule

- TBD