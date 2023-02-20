# Javascrip Operators and Control Flow

Assignment on Javascript Operators & Control Flow

## Question 1

The symbols for javascript operators are:

1. **Arithmetic operators**: The arithmetic operators are:

- (+) Addition
- (-) Subtraction
- (\*) Multiplication
- / (Division)
- % (Modulus)
- \*\* (Exponential operator)
- ++ (Increment)
- -- (Decrement)

2. **Assignment operators**:The assignment operators are:

- = (Assignment)
- += (Addition assignment)
- -= (Subtraction assignment)
- \*= (Multiplication assignment)
- /= (Division assignment)

3. **Comparison operators**: The comparison operators are:

- == (Loose Equality)
- === (Strict Equality)
- != (Not Equal)
- !== (Strict Not Equal)
- (>) Greater than
- (>=) Greater than or equal
- < (Less than)
- <= (Less than or equal)

4. **Logical operators**: The logical operators are:

- && (Logical AND)
- || (Logical OR)
- ! (Logical NOT)

5. **Bitwise operators**: The bitwise operators are:

- & (Bitwise AND)
- | (Bitwise OR)
- ^ (Bitwise XOR)
- ~ (Bitwise NOT)

## Question 2

Examples for javascript operators

1. **ARITHMETIC OPERATORS**:

- **MODULUS**(%)  
  Example 1:  
  const total = 50;  
  console.log(total % 2); //0

- **EXPONENTIAL**(\*\*)  
  Example 1:  
  const tip = 5;  
  console.log(tip\*\*2); //25

2. **ASSIGNMENT OPERATORS**

- **ADDITION ASSIGNMENT**(+=)  
  Example 1:  
  const z = 5  
  console.log(z += 3); //8

- **SUBTRACTION ASSIGNMENT**(-=)  
  Example 1:  
  const myShirt = 20  
  console.log(myShirt -= 3); //17

3. **COMPARISON OPERATORS**

- **LOOSE EQUALITY** (==)
  Example 1:  
  const a = 1;  
  const b = '1';  
  console.log(a == b); //true

- **STRICT EQUALITY**(===)  
  Example 1:  
  const n= 5;  
  const b = '5';  
  console.log(n === b); //false

4. **LOGICAL OPERATORS**

- **LOGICAL AND** (&&)  
  Example 1:
  const myAge = 18;
  const hasDriverLiscence = true;
  console.log(myAge === 18 && hasDriverLiscence === true); //true

- **LOGICAL OR**(||)  
  Example 1:  
  const myBirthYear = 1996;  
  const shoeSize = 40;
  console.log(myBirthYear === 1996 || shoeSize === 39); // true

-

5. **BITWISE OPERATORS**

- **BITWISE AND**(&)  
  Example 1:  
  console.log(15 & 9); //9

- **BITWISE NOT**(~)  
  Example 1:  
  console.log(~5); //10

## Question 4

The result when the program below is executed is:  
 for(let i = 1; i < 20; i += 7){  
 console.log(i);  
 }  
 // i = 1;  
 // i = 8;  
 // i = 15;
