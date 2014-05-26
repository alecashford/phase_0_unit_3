## Evaluate a Website! 
 
1) How does this website follow HTML Best Practices? Are there any places where 
it does not?  Provide examples of the "bad" code.

Something I'm noticing right off the bat is the fact that a lot of the CSS is written inline. This is definitely not considered a best practice, so it surprises me that a website called "Hacker News" could
include something like this.
 
2) What do you think of the HTML? Did the writers use IDs and Classes properly?

Overall I am tending not to like the HTML, it seems like there are better (perhaps more DRY?) ways to write the page than to use tables within tables within tables. Classes look fine but again I has
something of a problem with the inline CSS, so most classes aren't even utilized to their full extent.

Did you like the way they used HTML tags?  Please use examples with your arguments.

As I've said, I find their use of tables to be a little bit overkill.
 
3) How did the authors handle formatting? Did they include it in the HTML or 
separate it into a CSS file? Or did they do both?  Again, include examples.

As I've mentioned, virtually all of the formatting is inline, which is something I find immediately alarming and distracting. On one hand it means that all of your text is on a single page. On the other hand, it means that ONLY that page is formatted, you can't recycle your css for another page even if you wanted to (which they might not, maybe they only have one page).
 
4) Did the authors include anything you didn't immediately understand? 
If so, what?


I actually spent a lot of time trying to understand a block of code before I realized it was javascript. Also, their entire formatting seems odd, what with all of the tables.
 
5) How did the authors organize the CSS file? Was it DRY?
 
The CSS file contained mostly font information and text stying, not layout. I want to say it wasnt' DRY, but on reflection I actually think it is, because even though they take up a lot of space repeating font styles, each line refers to something different, there is not a directly repeated class, for example.

6) Did the authors incorporate any responsive design into the site?

Yes, to their credit, the site is responsive. However, the layout and style are so simple that all they had to do was use tables and percentages. It is not a complex responsive design at all.

7) What are your overall thoughts on the HTML/CSS from this website based on 
what you've read?

surprisingly I am not impressed. Although it gets the job done, they have opted for code that is on one hand very complex and also very ugly. The page itself is not aesthetically well designed at all, and in several areas they did not follow best practices. For a site that is supposedely supposed to cater to a high-tech crowd, I am less than impressed.