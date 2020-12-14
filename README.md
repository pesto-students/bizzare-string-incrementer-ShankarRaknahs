## Instructions

Given a bizarre string, increment the string by 1. Refer to the test cases for more info.  

## Functions

bizarreStringIncrementer --> To verify the string, filter the number from string and process the increment operation.  

pad --> Utility function to handle the zero padding in the numbers  

## Logic

step 1 --> Verify the input string has number at the end  
step 2 --> If not a number in the end, append 1 to the end of the string and return  
step 3 --> If number in the end, find all the numbers in string, identify the last number  
step 4 --> process the increment on the last number  
step 5 --> pad the leading zero's based on the input string's last number length  
step 6 --> return the string with the updated last number string  


## Test case result

 PASS  ./bizarreStringIncrementer.test.js  
  bizarreStringIncrementer  
    ✓ bizarreStringIncrementer adds the number 1 if string does not end in a number (2 ms)  
    ✓ bizarreStringIncrementer increments by 1 the number if the string ends with a number  
    ✓ bizarreStringIncrementer considers leading zeros when incrementing (1 ms)  
    ✓ bizarreStringIncrementer increments by one even when number of digits increase  
    ✓ bizarreStringIncrementer fills leading zeros  
    ✓ bizarreStringIncrementer looks at only the last digits (1 ms)  
    ✓ should always pad the only the leading zeroes  

Test Suites: 1 passed, 1 total  
Tests:       7 passed, 7 total  
Snapshots:   0 total  
Time:        1.051 s  
Ran all test suites.  
