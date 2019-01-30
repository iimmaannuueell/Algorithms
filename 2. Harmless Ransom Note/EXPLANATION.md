# Harmless Ranson Note

This is used to know if there is enough word in the smaller string from the big string.

## Big O Notation

Big O is a notation use to classify how scalable an algorithm or function is and it allows us to estimate the worst case run time of an algorithm. It tells use how long it will take a function to run if it's input size grow.

### Big O Examples
1. Constant runtime  also * "0 (1)" *
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


2. Linear runtime also  * O (n) *

As input size increases, the runtime increases. if the element is 7 the operation will have to run 7 time

```javascript
function logAll(array) {
    for (var i - 0; i < array.lenght; i++){
        console.log(array[i]);
    }
}
logAll([1,2,3,4,5]);

logAll([a,b,c,d,e,f,g]);

```
