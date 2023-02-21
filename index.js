//? Question 3
const generalSubjects = 'English, Mathematics.';
const scienceSubjects = `${generalSubjects},Physics, Chemistry, Biology, Technical Drawing.`;
const socialScienceSubjects = `${generalSubjects},Accounting, Commerce, Marketing, Geography.`;
const artsSubjects = `${generalSubjects},Government, Economics, Literature, History.`;

const studentDept = 'Arts';

if (studentDept === 'Arts') {
  console.log(`This are the subjects to take : ${artsSubjects}`);
} else if (studentDept === 'Science') {
  console.log(`This are the subjects to take : ${scienceSubjects}`);
} else if (studentDept === 'socialScience') {
  console.log(`This are the subjects to take : ${socialScienceSubjects}`);
} else {
  console.log(`You can start with this subjecst:${generalSubjects}`);
} // This are the subjects to take: Englis,Mathematics,Government, Economics,Literature, History.

//? Question 5
// let pwr;
// let firstValue;
// const nearestPowerOf2 = (num) => {
//   for (let i = 0; i < num; i++) {
//     pwr = 2 ** i;
//     if (pwr < num) {
//       firstValue = pwr;
//     }
//   }
//   // pwr = num - firstValue > firstValue * 2 - num ? firstValue * 2 : firstValue;
//   if (num - firstValue > firstValue * 2) {
//     pwr = firstValue * 2;
//   } else if (num - firstValue < firstValue * 2) {
//     pwr = firstValue;
//   } else {
//     return `Not a valid number.`;
//   }

//   return `The number ${pwr} is the power of 2 nearest to ${num}`;
// };
// console.log(nearestPowerOf2(3)); //The number 2 is the power of 2 nearest to 3

let pwr;
let firstValue;
const nearestPowerOf2 = (num) => {
  for (let i = 0; i < num; i++) {
    pwr = 2 ** i;
    if (pwr < num) {
      firstValue = pwr;
    }
  }
  // pwr = num - firstValue > firstValue * 2 - num ? firstValue * 2 : firstValue;
  if (num - firstValue > firstValue * 2 - num) {
    pwr = firstValue * 2;
  } else if (num - firstValue < firstValue * 2) {
    pwr = firstValue;
  } else {
    return `Not a valid number.`;
  }

  return `The number ${pwr} is the power of 2 nearest to ${num}`;
};
console.log(nearestPowerOf2(3)); //The number 2 is the power of 2 nearest to 3
