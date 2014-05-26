# U3.W8-9: 


# I worked on this challenge [by myself, with: ].

# 2. Pseudocode



# 3. Initial Solution

def super_fizzbuzz(array)
    new_array = []
    for i in 0...array.length
        if (array[i] % 3 == 0) && (array[i] % 5 == 0)
            new_array.push("FizzBuzz")
		elsif array[i] % 3 == 0
            new_array.push("Fizz")
        elsif array[i] % 5 == 0
            new_array.push("Buzz")
        else
            new_array.push(array[i])
        end
    end
    return new_array
end



# 4. Refactored Solution






# 1. DRIVER TESTS/ASSERT STATEMENTS GO BELOW THIS LINE






# 5. Reflection 
=begin
I found this test pretty simple, and did not take very long. I wrote it out more or less as-is,
only got confused when it came to test it. Ruby handles ranges a little bit different than I'm
used to so once I got that sorted out the rest was pretty simple.

