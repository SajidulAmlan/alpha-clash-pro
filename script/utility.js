function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}

function showElementBuyId(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

function setBackgroundColorByID (elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-amber-500')
}

function removeBackgroundColorById (elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-amber-500')
}


function getARandomAlphabet() {
  // get or create alphabets array
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetString.split("");
  //   get a random Alphabet 0-25
   const randomNumber = Math.random()*25;
   const index = Math.round(randomNumber) ;

   const alphabetNumber = alphabets[index];
   return alphabetNumber;
}
