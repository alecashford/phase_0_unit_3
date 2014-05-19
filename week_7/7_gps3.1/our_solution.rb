class Item
  attr_accessor :name, :quantity
  def initialize(name, quantity)
    @name = name
    @quantity = quantity
  end
  
  def purchase_item
    @quantity = 0
  end
  
  def display
    puts "Name: #{@name}, Quantity: #{@quantity}"
  end
end


class GroceryList
  
  def initialize
    @grocery_list = []
  end
  
  def add(item_name, item_quantity = 1)
    @grocery_list.push(Item.new(item_name, item_quantity))
  end
  
  def purchase(item_name)
    @grocery_list.select{|item| item.name == item_name}[0].purchase_item    

  end
  
  def print_list
    @grocery_list.each{|item| item.display}
  end
end

=begin
This was a fairly straightforward challenge, although my pairing session was unique
because I was part of a group of three and not two (even though I'm confident I signe up
for the slot first). Regardless we worked through the challenge well and fulfilled the
expectations. There were a couple things that I feel we overcomplicated but overall
I think it went smoothly; I definitely think programming is most efficient when you
do it on your own, or if that is not possible, in a pair.