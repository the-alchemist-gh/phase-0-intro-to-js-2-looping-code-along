// Code your solutions in this file
// for (let age = 30; age < 40; age++) {
//   console.log(`I'm ${age} years old. Happy birthday to me!`);
//   debugger;
// }

function writeCards(arr,eventName){
  const newArr = []
  for(let i=0;i<arr.length;i++){
    
    newArr[i] = `Thank you, ${arr[i]}, for the wonderful ${eventName} gift!`;
    
  }
  return newArr;
}


function countDown(num){
  let i=num;
  while( i >= 0){
    console.log(i);
    i--
  }
}