function getRandomNumber(maxNumber) {
  let result = Math.floor(Math.random() * maxNumber);
  // if (result === 0) {
  //   return getRandomNumber(maxNumber);
  // }
  return result;
}


let count = 0;
let randomArray = [];
function getRandomArray() {
  while (randomArray.length <= 99) {
    count += 1;
    let randomNumber = getRandomNumber(100);
    if (!randomArray.includes(randomNumber)) {
      randomArray.push(randomNumber);
    }
  }
}

getRandomArray();


console.log(randomArray);
console.log(`Потребовалось попыток чтобы заполнить массив сотней разных цифр ${count}`);

function riddleOfaHandredPrisoners() {

  for (let i = 0; i < 100; i += 1) {
    let currentPrisoner = i;
    let currentStep = randomArray[i];
    let attemptByCurrentPrisoner = 0;

    while (true) {
      if (attemptByCurrentPrisoner === 50) {
        return console.log(`Всех казнить!\n Все закончилось на зеке № ${currentPrisoner}`);
      }
      
      attemptByCurrentPrisoner += 1;
    
      if (currentPrisoner === currentStep) {
      
        console.log('goal');
        console.log(`Попытка текущего зека: ${attemptByCurrentPrisoner}`);
        break;
      } else {

          console.log(`${currentStep} => ${randomArray[currentStep]}`);
        
        currentStep = randomArray[currentStep];
      }
    
    }
  } 
  return console.log('Все нашли свои номера! Их отпустят!');
}

riddleOfaHandredPrisoners();
