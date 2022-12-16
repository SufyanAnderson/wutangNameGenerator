//Present the user with 5 survey questions 
//and based on those answers randomly generate their name.
//grabs all the values associated with quiz
document.querySelector('.submit').addEventListener('click', quizResults)
document.querySelector('.reset').addEventListener('click', resetTest)
const quizAnswers = document.querySelectorAll('.answsers')
// const firstName = ["rza","gza","u-god","odb","method", "man","raekwon","Bittah","Tha","Mad","Master","Dynamic","E-ratic","Wacko","Fearless","Misunderstood","Quiet","Pesty","Gentlemen","Profound","Respected","Amateur","Shriekin’","Lucky","Phantom","Smilin’","Thunderous","Tuff","Scratchin’","Drunken","X-cessive","X-pert","Zexy","Ruff","Intellectual","Unlucky","Vizual","Foolish","Midnight","Mighty"]
// const lastName=["inspectah", "deck","masta", "killa","ghost","face", "killah","Madman","Genius","Hunter","Killah","Professional","Artist","Dreamer","Observer","Bastard","Wizard","Swami","Wanderer","Assassin","Bandit","Leader","Ambassador","Warrior","Menace","Worlock","Conqueror","Lover","Magician","Desperado","Specialist","Mercenary","Ninja","Contender","Mastermind","Demon","Watcher","Destroyer"]
const firstNameOne =["Master","Dynamic","E-ratic","Wacko","Fearless","Misunderstood","Quiet","Pesty","Gentlemen","Profound","Respected"]
const lastNameOne =["Professional","Artist","Dreamer","Observer","Bastard","Wizard","Swami","Wanderer","Assassin","Bandit","Leader","Ambassador"]
const firstNameTwo = ["rza","gza","u-god","odb","method", "man","raekwon","Bittah","Tha","Mad","Master","Dynamic","E-ratic","Wacko"]
const lastNameTwo=["inspectah", "deck","masta", "killa","ghost","face", "killah","Madman","Genius","Hunter","Killah","Professional"]
const firstNameThree = ["Fearless","Misunderstood","Quiet","Pesty","Gentlemen","Profound","Respected","Amateur","Shriekin’","Lucky","Phantom","Smilin’","Thunderous","Tuff","Scratchin’","Drunken","X-cessive","X-pert","Zexy","Ruff","Intellectual","Unlucky","Vizual","Foolish","Midnight","Mighty"]
const lastNameThree = ["Bastard","Wizard","Swami","Wanderer","Assassin","Bandit","Leader","Ambassador","Warrior","Menace","Worlock","Conqueror","Lover","Magician","Desperado","Specialist","Mercenary","Ninja","Contender","Mastermind","Demon","Watcher"]
let randomFirstNameOne = Math.floor(Math.random() * firstNameOne.length)
let randomLastnameOne = Math.floor(Math.random() * lastNameOne.length)
let randomFirstNameTwo = Math.floor(Math.random()* firstNameTwo.length)
let randomLastNameTwo = Math.floor(Math.random()* lastNameTwo.length)
let randomFirstNameThree = Math.floor(Math.random() * firstNameThree.length)
let randomLastNameThree = Math.floor(Math.random() * lastNameThree.length)



// seperation 
// from a youtube video: https://www.youtube.com/watch?v=0V2Mi16xd04
function resetTest() {
    window.location.reload()
}

function modeOfChoices(array) {
    //count amount of occurences of each chocie
    const obj = {}
    //loop over array
    array.forEach(strings => {
        //for each choice("A","B","C")
        //if it doesn't already as a key on the object
        //create one and set its value to 1 
        if(!obj[strings]) {
            obj[strings] = 1
        } 
        else {
            obj[strings] += 1
        }
    }) 
    
    //return object key with highest value
    //set to 0 because the amount of occurences can only ever be 0 or greater
    let highestValue = 0
    let highestValueKey = -Infinity

    for(let key in obj) {
        const value = obj[key]
        if( value > highestValue) {
            highestValue = value
            highestValueKey = key
        }
    }
    return String(highestValueKey)
}


//function to find the mode of an array in order to use it to get the mode from selected choices 


//this will show the results of the quiz from the users
function quizResults() {
//https://stackoverflow.com/questions/11563638/how-do-i-get-the-value-of-text-input-field-using-javascript
    let one = document.querySelector('input[name="music"]:checked').value
    let two = document.querySelector('input[name="food"]:checked').value
    let three = document.querySelector('input[name="media"]:checked').value
    let four = document.querySelector('input[name="icecream"]:checked').value
    let five = document.querySelector('input[name="color"]:checked').value
    let choices = [one,two,three,four,five]  
    let theMode = modeOfChoices(choices)
    console.log(theMode)

    if(theMode === 'a') {
        //console.log(`Your name is ${firstNameOne[randomFirstNameOne]} ${lastNameOne[randomLastnameOne]}`)
        document.querySelector('.results').innerText = `Your name is ${firstNameOne[randomFirstNameOne]} ${lastNameOne[randomLastnameOne]}`
    }
    else if(theMode ==='b') {
        //console.log(`Your name is ${firstNameTwo[randomFirstNameTwo]} ${lastNameTwo[randomFirstNameTwo]}`)
        document.querySelector('.results').innerText = `Your name is ${firstNameTwo[randomFirstNameTwo]} ${lastNameTwo[randomFirstNameTwo]}`
    }
    else if(theMode ==='c') {
        //console.log(`Your name is ${firstNameThree[randomFirstNameThree]} ${lastNameThree[randomLastNameThree]}`)
        document.querySelector('.results').innerText = `Your name is ${firstNameThree[randomFirstNameThree]} ${lastNameThree[randomLastNameThree]}`
    }

// fetch(`https://api.api-ninjas.com/v1/randomuser?`) 
// console.log(modeOfChoices(theMode))

// .then(res => res.json())
// .then(data => {
  
  
//  console.log(two)
//  console.log(three)
//  console.log(four)

//   let maxChoice = mode(choices)
//   console.log(maxChoice)
//   console.log(choices)
}
// })
// } 
// calls the create quiz function to put the quiz on the page

//this button will show the results
