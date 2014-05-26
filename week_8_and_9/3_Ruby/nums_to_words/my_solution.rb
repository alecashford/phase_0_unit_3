# U3.W8-9: Numbers to English Words


# I worked on this challenge [by myself, with: ].

# 2. Pseudocode
=begin
1. Create a hash. 1-19 have their own words spelled out, then 20, 30, and so on
2. Create a method that spits out the english name if the input is lower than 20.
	if above 19, take first digit--if followed by 0, return pure number name (eg twenty),
	else read the next digit and pair it with its one digit pair (eg 21)

=end


# 3. Initial Solution

$words = {1 => "one", 2 => "two", 3 => "three", 4 => "four", 5 => "five", 6 => "six",
	7 => "seven", 8 => "eight", 9 => "nine", 10 => "ten", 11 => "eleven", 12 => "twelve",
	13 => "thirteen", 14 => "fourteen", 15 => "fifteen", 16 => "sixteen", 17 => "seventeen",
	18 => "eighteen", 19 => "nineteen", 20 => "twenty", 30 => "thirty", 40 => "fourty", 50 =>
	"fifty", 60 => "sixty", 70 => "seventy", 80 => "eighty", 90 => "ninety", 100 => "one hundred"}

def in_words(num)
    if num < 20
        return $words[num]
    else
        to_array = num.to_s.split("")
        last_digit = to_array[to_array.length - 1].to_i
        return "#{$words[num - last_digit]} #{$words[last_digit]}"
    end
end



# 1. DRIVER TESTS/ASSERT STATEMENTS GO BELOW THIS LINE


puts in_words(10) == "ten"
puts in_words(99) == "ninety nine"
puts in_words(34) == "thirty four"



# 5. Reflection 
=begin
The thing about this challenge, as is the case in many others, is that I started with
an initial idea, and then realized it wasn't going to work. I then, in the moment,
came up with a new idea and coded it out, and it worked on the first try. I
realize that my coding style is kind of free form, not disorganized because I
stay consistent, but I'm always coming up with new ideas and testing them in the
moment. I find it's a more pleasant way to code, I end up learning more, and
my ideas end up being better.