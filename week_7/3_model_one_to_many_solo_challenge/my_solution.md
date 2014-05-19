# U3.W7: Modeling a Real-World Database (SOLO CHALLENGE)

## Release 0: Users Fields
<!-- Identify the fields Twitter collects data for -->
photo
header
name
location
website
bio


## Release 1: Tweet Fields
<!-- Identify the fields Twitter uses to represent/display a tweet. What are you required or allowed to enter? -->
main_text
photo
location

## Release 2: Explain the relationship
The relationship between `users` and `tweets` is: 
<!-- because... -->
To identify which tweet comes from which user. They are definitely connected; within each user category there must be a tweet table, and within that tweet table that contains the information for every tweet.

## Release 3: Schema Design
https://github.com/zagadooga/phase_0_unit_3/blob/master/week_7/imgs/solo.png

## Release 4: SQL Statements
<!-- Include your SQL Statements. How can you make markdown files show blocks of code? -->

all the tweets for a certain user id
the tweets for a certain user id that were made after last Wednesday (whenever last Wednesday was for you)
all the tweets associated with a given user's twitter handle
the twitter handle associated with a given tweet id

SELECT users.id, tweets.main_text FROM tweets
JOIN users
ON tweets.user_id = users.id;

SELECT users.id, tweets.main_text FROM tweets
JOIN users
ON (tweets.user_id = users.id) AND (tweets.date_added > 2014-05-14);

SELECT users.name, tweets.main_text FROM tweets
JOIN users
ON tweets.user_id = users.id;

SELECT users.name, tweets.id FROM tweets
JOIN users
ON tweets.user_id = users.id
WHERE users.name LIKE "zagadooga";


## Release 5: Reflection
<!-- Be sure to add your reflection here!!! -->

I am not sure how well I did on this challenge. While I understand the principals generally, I feel like I can read SQL much better than I can write it, at least at this time. It will take some more time and more experimentation before I feel more confident with this language. One thing I really wish I had was a practice database I could have used, that was exacly like the one I made up in the editor, so I could see if my SQL code worked in real time.