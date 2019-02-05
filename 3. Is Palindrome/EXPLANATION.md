# Is Palindrome

A Palindrome is any word, phrase or number that is read the same way both forward and backwards. 

### Example: 
radar     => radar
madam     => madam
race car  => rac ecar 
10801     => 10801
star rats => star rats

## Array Method

In solving this algorithm we came across some array method. So i feel we need to cover basic array methods

#### pop()

This method removes the last array element.

```javascript
var color = ["blue", "black", "yellow", "green"];
color.pop();

console.log(color);

 ==> ["blue", "black", "yellow"];   // green is gone
``` 


#### push()

This method adds a new element at the "End" of an array.

```javascript
var color = ["blue", "black", "yellow", "green"];
color.push('red');

console.log(color);

 ==> ["blue", "black", "yellow", "green", "red"];   // red is added at the end
``` 

####  shift()

This method removes the first element in an array

```javascript
var color = ["blue", "black", "yellow", "green"];
color.shift();

console.log(color);

 ==> ["black", "yellow", "green"];   // blue is gone
``` 

#### unshift()

This method adds a new element at the beginning of an array

```javascript
var color = ["blue", "black", "yellow", "green"];
color.unshift('red');

console.log(color);

 ==> ["red", "blue", "black", "yellow", "green"];   // red is been added as the first element
``` 

#### toString()

This method converts an array to a string using a comma "," as the separator

```javascript
var color = ["blue", "black", "yellow", "green"];
color.toString();

console.log(color);

 ==> "blue,black,yellow,green"  
``` 


#### join()

This method can also convert an array into a string but will be separated by parameters passed into the method.

```javascript
var color = ["blue", "black", "yellow", "green"];
color.join('/');

console.log(color);

 ==> "blue/black/yellow/green"  
``` 