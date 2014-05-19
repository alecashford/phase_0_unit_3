# U3.W7: Intro to SQLite

## Release 0: Create a dummy database

-- Loading resources from /Users/aashford/.sqliterc

SQLite version 3.7.13 2012-07-17 17:46:21
Enter ".help" for instructions
Enter SQL statements terminated with a ";"

## Release 1: Insert Data 
sqlite> select * from users;
id          first_name  last_name   email                  created_at           updated_at         
----------  ----------  ----------  ---------------------  -------------------  -------------------
1           Kimmey      Lin         kimmy@devbootcamp.com  2014-05-18 05:40:59  2014-05-18 05:40:59

## Release 2: Multi-line commands
<!-- paste your terminal output here -->

## Release 3: Add a column
sqlite> select * from users;
id          first_name  last_name   email                  created_at           updated_at           nickname  
----------  ----------  ----------  ---------------------  -------------------  -------------------  ----------
1           Kimmey      Lin         kimmy@devbootcamp.com  2014-05-18 05:40:59  2014-05-18 05:40:59  Kimchee   

## Release 4: Change a value
id          first_name  last_name   email                  created_at           updated_at           nickname   
----------  ----------  ----------  ---------------------  -------------------  -------------------  -----------
1           Kimmy       Lin         kimmy@devbootcamp.com  2014-05-18 05:40:59  2014-05-18 06:26:06  Ninja Coder

## Release 5: Reflect
<!-- Add your reflection here -->

I enjoyed this challenge, and working in SQL. I find SQL quite intuitive and because it is not difficult it is enjoyable. One thing I don't like is how rigid it is, but I suppose this is not much different from many other languages. I would also love to see a graphical integration/implementation for database management, but this may conflict with the goals of the language.