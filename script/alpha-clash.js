// function play() {
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden')

//     const palyGround = document.getElementById('play-ground')
//     palyGround.classList.remove('hidden')
// }





function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet')
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase()

    // console.log(currentAlphabetElement.innerText)
    if( playerPressed === expectedAlphabet){
        console.log('you got a point!', expectedAlphabet)
        // update score 
        // 1. het the current score 
        // 2. increase the 


        // start a new round 
        removeBackgroundColorById(expectedAlphabet)
        continueGame();
    }
    else{
        console.log('You Lost A one of your life')
    }
}
// captured keyboard key press
document.addEventListener('keyup',handleKeyboardKeyUpEvent)

function continueGame(){
    // step 1: generate a random number 
    const alphabet = getARandomAlphabet();
    // console.log('Your Random Alphabet is', alphabet)

    // set the random;y generated alphabet to the screen (Show It)
    const currentAlphabetElement = document.getElementById('current-alphabet')
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorByID (alphabet)
}



 function  play(){
    hideElementById('home-screen')
    showElementBuyId('play-ground')
    continueGame()
}
