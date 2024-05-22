
let text = document.querySelector('.text')
console.log(text);


let words = ['design', 'code', 'also create Animated Website']



let i = 0;
let j = 0;
let cursor = '|'
let newWord = [];
let finishedWriting = false

function typeWriter() {

    text.innerText = newWord.join('')

    // console.log(newWord);


    if (i < words.length && finishedWriting == false) {


        if (i == 0) {
            text.style.color = 'red'
            text.style.background = 'yellow'
        }
        else if (i == 1) {
            text.style = 'color:yellow;background:black'

        }
        else {

            text.style.color = 'black'
            text.style.background = 'orange'

        }

        if (j < words[i].length) {

            newWord.pop()
            newWord.push(words[i][j])
            j++

            if (j == words[i].length) {

                finishedWriting = true;

            }

        }

    }

    if (finishedWriting == true) {

        newWord = newWord.slice(newWord, j)
        j--;
        if (newWord.length == 0 && finishedWriting == true) {
            finishedWriting = false;
            j = 0;
            i++
        }
    }

    if (i == words.length) {
        i = 0;
        j = 0;
        finishedWriting = false
    }
    newWord.push('|')

    setTimeout(typeWriter, 300)

}
typeWriter()



