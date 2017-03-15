## DOM Collection Exercises
#### Explorer Mode Instructions
- use data linked below to create a simple webpage with a list of each of the Austin Farmer's markets that are less than 10 miles away. The market's distance is the number at the beginning of the marketname property. Don't show user anything other than the market name.
  - hard coded html should not contain <li>
- use the data linked below to display to the user a series of cat gif thumbnails
  - hard coded html should contain only a container into which you can put the images


## Think it out
- so far we know we need to create a **list**
  - list contains market names
  - we can use <ul> in the HTML
- create a container where the images will go in
  - create a div
- the miles at the beginning of market name is 3 char long

- look at slice and split methods
array.slice(begin,end)
fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
var citrus = fruits.slice(1,3) = ['Orange, 'Lemon]
- slice took item at index 1, index 2, stopped and did NOT grab index 3

split() splits a string object into an array of strings by separating the strings into substrings
- string.split('') = separates each char into it's own index number

.shift() removes the first element from an array and returns that element.
- var a = [1,2,3]
- a.shift(); => 1
- var a = [2,3]
