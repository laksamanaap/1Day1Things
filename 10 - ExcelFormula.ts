
/* 
Assuming that weight (BG2) and height (BF2) is an anomaly in your excel,
this code is may usefull when your apps is need anomaly and excel to calculate them directy
on your apps
*/

// Formula for calculating BMI
const logicStringBMI = `BG2 / ((BF2 / 100) * (BF2 / 100));`;

const BG2 = 62; // Example weight in kg
const BF2 = 165; // Example height in cm

// Execute the BMI Formula
// new Function([arg1, arg2, ..., argN], functionBody)
const executeLogicBMI = new Function('BG2', 'BF2', `return ${logicStringBMI}`);
const outputBMI = executeLogicBMI(BG2, BF2) // console.log(Math.round(outputBMI * 10 / 10)) -> 22.8 (Normoweight)
