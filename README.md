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

- **ADDITION**(+):  
   Example 1:  
   const n = 2;  
   console.log(n + 1); // 3

  Example 2:  
   const x = 2;  
   console.log(x + 2); // 4

- **SUBTRACTION(-)**:  
   Example 1:  
   const myBirthYear = 1996  
   console.log(2023 - myBirthYear); //27

  Example 2:  
   const myAge = 27;  
   const presentYear =2023;  
   const birthYear = presentYear - myAge
  console.log(birthYear); //1996

- **MULTIPLICATION**(\*)
  Example 1:  
  const a = 5;  
  const b = 10;  
  console.log(a\*b); //50

  Example 2:  
  const starNum = 5;  
  const row = 2 \* starNum;  
  console.log(row); //10

- **DIVISION**(/)  
  Example 1:  
  const x = 20;  
  console.log(x / 10); //2

  Example 2:  
  const y = 100;  
  console.log(y / 2); //50

- **MODULUS**(%)  
   Example 1:  
   const total = 50;  
   console.log(total % 2); //0

  Example 2:  
   const bill = 12;  
   console.log(bill % 5); //2

- **EXPONENTIAL**(\*\*)  
  Example 1:  
  const tip = 5;  
  console.log(tip\*\*2); //25

  Example 2:  
  const totalRow = 10;  
  console.log(totalRow\*\*3); //1000

- **INCREMENT**(++)  
  Example 1:  
  const n = 3  
  console.log(n++); //4

  Example 2:  
  const myBag = 10  
  console.log(myBag++); //11

- **DECREMENT**(--)  
  Example 1:  
  const myShoes = 20;  
  console.log(myShoes--); //19

  Example 2:
  const num = 14;  
  console.log(num--); //13

2. **ASSIGNMENT OPERATORS**

- **ASSIGNMENT**(=)
  Example 1:  
  const myName = 'Chidinma';
  console.log(myName)

  Example 2:  
  const lastName = 'Ukazu';
  console.log(lastName)

- **ADDITION ASSIGNMENT**(+=)  
  Example 1:  
  const z = 5  
  console.log(z += 3); //8

  Example 2:
  const num = 10
  console.log(num += 8); //18

- **SUBTRACTION ASSIGNMENT**(-=)  
  Example 1:  
  const myShirt = 20  
  console.log(myShirt -= 3); //17

  Example 2:  
  const myTowel = 40  
  console.log(myTowel += 8); //32

- **MULTIPLICATION ASSIGNMENT**(\*=)
  Example 1:  
  const myPhone = 20  
  console.log(myPhone \*= 2); //40

  Example 2:  
  const lastNum = 40  
  console.log(lastNum \*= 4); //160

- **DIVISION ASSIGNMENT**(/=)  
  Example 1:  
  const myNum = 50  
  console.log(myNum /= 2); //25

  Example 2:  
  const a = 10  
  console.log(a /= 5); //2

3. **COMPARISON OPERATORS**

- **LOOSE EQUALITY** (==)
  Example 1:  
  const a = 1;  
  const b = '1';  
  console.log(a == b); //true

  Example 2:  
  const x = 2;  
  const y = 1;  
  console.log(x == y);//false

- **STRICT EQUALITY**(===)  
  Example 1:  
  const n= 5;  
  const b = '5';  
  console.log(n === b); //false

  Example 2:  
  const myName = 'Chidinma;  
  console.log(myName === 'Chidinma'); //true

- **NOT EQUAL**(!=)  
  Example 1:
  const var1 = 8;
  console.log(var1 != 4); //true

  Example 2:  
  const var2 = 20;  
  console.log(var2 != 20); //false

- **STRICT NOT EQUAL**(!==)  
  Example 1:
  const var1 = 10;
  console.log(var1 !== '10'); //true

  Example 2:
  const var2 = 15;
  console.log(var2 !== 15); //false

- **GREATER THAN** (>)
  Example 1:  
  const var1 = 2;  
  console.log('12' > var1); //true

  Example 2:  
  const var2 = 5;  
  console.log(2 > var2); //false

- **GREATER THAN OR EQUAL**(>=)  
  Example 1:  
  const var1 = 2;
  const var2 = 5
  console.log(var2 >= var1); //true

  Example 2:  
  const var1 = 3;  
  console.log(4 >= var1); //true

- **LESS THAN**(<)
  Example 1:  
  const var1 = 2;
  const var2 = 5;
  console.log(var2 < var1); //true

  Example 2:  
  const var1 = 2;
  console.log(var1 >='12'); //true

- **LESS THAN OR EQUAL**(<=)  
  Example 1:  
  const var1 = 3;
  const var2 = 4;
  console.log(var1 <= var2); //true

  Example 2:  
  const var1 = 2;
  console.log(var1 <= 5); //true

4. **COMPARISON OPERATORS**

- **LOGICAL AND** (&&)  
  Example 1:
  const myAge = 18;
  const hasDriverLiscence = true;
  console.log(myAge === 18 && hasDriverLiscence === true); //true

  Example 2:  
  const myAge = 26;  
  const hasDriverLiscence = true;
  console.log(myAge === 18 && hasDriverLiscence === true); //false

- **LOGICAL OR**(||)  
  Example 1:  
  const myBirthYear = 1996;  
  const shoeSize = 40;
  console.log(myBirthYear === 1996 || shoeSize === 39); // true

  Example 2:
  const myBirthYear = 1996;  
  const shoeSize = 40;
  console.log(myBirthYear === 1995 || shoeSize === 39); // false

- **LOGICAL NOT**(!)  
  Example 1:  
  const var1 = true
  console.log(!var1); // false

  Example 2:  
  const var1 = false
  console.log(!var1); // true

5. **BITWISE OPERATORS**

- **BITWISE AND**(&)  
  Example 1:  
  console.log(15 & 9); //9

  Example 2:
  console.log(5 & 1); //1

- **Bitwise OR**(|)  
  Example 1:  
  console.log(15 | 9); //15

  Example 2:  
  console.log(5 | 1); //5

- **BITWISE XOR**(^)  
  Example 1  
  console.log(15 ^ 9); //6

  Example 2  
  console.log(5 ^ 1); //4

- **BITWISE NOT**(~)  
  Example 1:  
  console.log(~5); //10

  Example 2:  
  console.log(~15); //-16

## Question 4

The result when the program below is executed is:  
 for(let i = 1; i < 20; i += 7){  
 console.log(i);  
 }  
 // i = 1;  
 // i = 8;  
 // i = 15;
