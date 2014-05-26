# U3.W8-9: 


# I worked on this challenge [by myself, with: ].

# 2. Pseudocode



# 3. Initial Solution

def is_fibonacci?(num)
    num_plus_4 = ((5.0 * (num**2.0)) + 4.0)
    num_min_4 = ((5.0 * (num**2.0)) - 4.0)
    puts Math.sqrt(num)
    if Math.sqrt(num_plus_4) == Math.sqrt(num_plus_4).to_i|| Math.sqrt(num_min_4) == Math.sqrt(num_min_4).to_i
        return true
    else
        return false
    end
end


# 4. Refactored Solution






# 1. DRIVER TESTS GO BELOW THIS LINE






# 5. Reflection 
=begin
This challenge was pretty easy, it mostly entailed looking online for efficient ways to demonstrate
a number is a fibonacci number and integrating that into my code. Learned a few new tricks, like the
sqrt().




