# U3.W8-9: Reverse Words


# I worked on this challenge [by myself, with: ].

# 2. Pseudocode
=begin
1. define method that takes a string as input
2. splice string into individual words, anything that's seperated by a space
3. loop through and reverse each word
4. join each item in that array, seperate by a space.

=end
# 3. Initial Solution

def reverse_word(str)
    return str.split(" ").each { |word| word.reverse! }.join(" ")
end


# 1. DRIVER TESTS/ASSERT STATEMENTS GO BELOW THIS LINE

def random_word(length = 5)
  rand(36**length).to_s(36)
end

word1 = random_word
word2 = random_word

puts reverse_word("") == ""
puts reverse_word(word1) == word1.reverse
puts reverse_word("#{word1} #{word2}") == "#{word1.reverse} #{word2.reverse}"
puts reverse_word("Ich bin ein Berliner") == "hcI nib nie renilreB"




# 5. Reflection 
=begin

Interesting challenge, the most important thing I learned was how fast a language starts to
go when you're not regularly being challenged. This will be vital to remember as I continue
learning and past it, I must not forget to keep challenging myself with new material.