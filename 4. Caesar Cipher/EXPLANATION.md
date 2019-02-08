# Caesar Cipher

A cipher is a method of concealing the meaning of a word.
In crytolography it is an algorithm that perfom encryption and decryption

The objective of caesar cipher is to shift every letter of a string by the number provided either forward or backward.

EXAMPLE
```javascript
function caesarCipher(string, num){
	// Algoritm here;
}
caesarCipher('emmanuel', 2)

==> 'goocpwgm'
```

### Note: 
If we have gotten to the end of the alphabet we have to loop it back to the beginning to start from 'A', and if moving backward and we have gotten to the beginning we should have to loop it back to 'Z'.

## Steps

*