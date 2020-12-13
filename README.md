## Instructions

Given a bizarre string, increment the string by 1. Refer to the test cases for more info.

## Functions

bizarreStringIncrementer --> To verify the string, filter the number from string and process the increment operation

pad --> Utility function to handle the zero padding in the numbers

## Logic

step 1 --> Verify the input string has number at the end
step 2 --> If not a number in the end, append 1 to the end of the string and return
step 3 --> If number in the end, find all the numbers in string, identify the last number
step 4 --> process the increment on the last number
step 5 --> pad the leading zero's based on the input string's last number length
step 6 --> return the string with the updated last number string