// Problem 1: Multiples of 3 or 5
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below the provided parameter value number.


function multiplesOf3and5(number: number): number {
  let sum = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

console.log("multiplesOf3and5",multiplesOf3and5(1000)); // 233168


//-----------------------------------------------//


//arrow function
const multiplesOf3and5One = (number: number): number => {
  let sum = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

console.log("multiplesOf3and5One",multiplesOf3and5One(1000)); // 233168


//-----------------------------------------------//


//use array methods

// reduce() method reduces the array to a single value เป็นเมธอดของอาเรย์ใน JavaScript ที่ใช้สำหรับการลด (reduce) อาเรย์ให้เป็นค่าเดียว
// Syntax 
// reduce(callbackFn) reduce(callbackFn, initialValue)
// callbackFn คือฟังก์ชันที่ถูกส่งเป็นอาร์กิวเมนต์ไปยังฟังก์ชันอีกตัวหนึ่ง และจะถูกเรียกใช้เมื่อฟังก์ชันหลักทำงานเสร็จหรือในระหว่างการทำงาน 
// ใน JavaScript การใช้ callbackFn เป็นเรื่องปกติในการจัดการการทำงานแบบอะซิงโครนัส (Asynchronous) ทำงานแบบ "ไม่รอให้เสร็จทีละคำสั่ง"  


// filter() เป็นเมธอดใน JavaScript ที่ใช้สำหรับกรองอาร์เรย์ โดยจะสร้างอาร์เรย์ใหม่จากอาร์เรย์ต้นฉบับ ซึ่งจะเก็บเฉพาะองค์ประกอบที่ผ่านเงื่อนไขที่กำหนดไว้ในฟังก์ชันกรอง (callback function) เท่านั้น
// Syntax 
// filter(callbackFn)
// filter(callbackFn, thisArg)

// Array.from() เป็นเมธอดใน JavaScript ที่ใช้สำหรับสร้างอาเรย์ใหม่จากออบเจกต์ที่มีลักษณะคล้ายอาเรย์
// Syntax 
// Array.from(arrayLike)
// Array.from(arrayLike, mapFn)

function multiplesOf3and5Two(number: number): number {
  return Array.from({ length: number }, (_, i) => i)
    .filter(i => i % 3 === 0 || i % 5 === 0)
    .reduce((sum, i) => sum += i, 0);
}

console.log("multiplesOf3and5Two",multiplesOf3and5Two(1000)); // 233168


// forEach() เป็นเมธอดใน JavaScript ที่ใช้สำหรับวนลูปผ่านแต่ละองค์ประกอบในอาเรย์ โดยจะเรียกฟังก์ชันที่กำหนด (callback function) สำหรับแต่ละองค์ประกอบในอาเรย์ แต่ไม่คืนค่าผลลัพธ์ใด ๆ กลับมา
const multiplesOf3and5Three = (number: number): number => {
  let sum = 0;
  Array.from({ length: number }, (_, i) => i).forEach(i => {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i
    }
  });
  return sum;
}

console.log("multiplesOf3and5Three",multiplesOf3and5Three(1000))

function multiplesOf3and5Four(number: number): number {
  let sum = 0;
  let i = 0;
  while (i < number) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i
    }
    i++;
  }
  return sum;
}

console.log("multiplesOf3and5Four",multiplesOf3and5Four(1000)); //233168 