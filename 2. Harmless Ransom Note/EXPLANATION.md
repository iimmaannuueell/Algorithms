# Harmless Ranson Note

This is used to know if there is enough word in the smaller string from the big string.

In solving this let try to understand what Big 0 notation means

## Big O Notation

Big O is a notation use to classify how scalable an algorithm or function is and it allows us to estimate the worst case run time of an algorithm. It tells use how long it will take a function to run if it's input size grow.

### Big O Examples
#### 1. Constant runtime  also  "0 (1)" 
```javascript
function log(array) {
    console.log(array[0]);
}
log([1,2,3,4,5,6,7]);
// => 1

log([a,b,c,d,e,f,g]);
// => a
```
Here it is always the first element that will always be loged out no matter the size of the array. The input can increase but the runtime will always be constant.


##### 2. Linear runtime also  " O (n) "

As input size increases, the runtime increases. if the element is 7 the operation will have to run 7 time. 0 stands for the function we are evaluating and n stands for the size of the input.

```javascript
function logAll(array) {
    for (var i - 0; i < array.lenght; i++){
        console.log(array[i]);
    }
}
logAll([1,2,3,4,5]);

logAll([a,b,c,d,e,f,g]);

```
#### 3. Exponential runtime  also " 0 (n^2) "

```javascript
function addAndLog(array) {
    for (var i = 0; i <array.length; i++){
        for (var j = 0; j <array.length; j++){
            console.log(array[i]) + array[j]);
        }
    }
}
addAndLog(['a', 'b', 'c'])  // 9 pairs logged
```
The function above gives every possible combination of pairs in the array. for each element it gets to on the first loop it runs the inner loop again so all possible combination are made. This method is not efficient.

#### 4. Logarithmic runtime also  " 0 (log n) "

Logarithm search or binary search is a search alogrithm that finds the position of a target value within a sorted array.
There is always 2 input, 1 is the list of sorted element and the other is just word(s) that you want to search for within the list. In logarithmic runtime every operation performed is cutting the input to half.
What this means is that the runtime grows in proportion to the logarithm of the input size.

NOTE: Logarithm in simplest means how many of a particular number do multiply to iself to get another number. eg 2 x 2 x 2 = 8. 2 is multiplied 3 times. So the logaorithm is = 3'

```javascript
function binarySearch(array, search){
    var low = 0;
    var high = array,length - 1;
    var mid;
    var element;

    while (low <= high) {
        mid = Math.floor((low + high) / 2, 10);
        element = array[mid];
        if (element < key) {
            low = mid + 1;
        } else if (element > key) {
            high = mid - 1
        } else { 
            return mid;
        }
    }
    return -1;
}
```

##
 
In solving the harmlessRansomNote we will use the linear time complexity "0 (n) " because we have to loop through all the words provided to determie if the words in the magazineText will be be enough based on the words from the noteText.