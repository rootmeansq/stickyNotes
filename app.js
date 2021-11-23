// declare all the color and the rotate degree over which we need to iterate
const randomColors = ['#EF7153', '#46A8B1', '#C0ED37', '#EC4C78', '#D9F546', '#A1D2CC' ];
const randomDeg = ["rotate(4deg)", "rotate(7deg)", "rotate(-9deg)", "rotate(-3deg)", "rotate(-5deg)", "rotate(-8deg)"];
const randomMargins = ["-5px", "1px", "5px", "10px", "7px"];


document.querySelector(".create-button").addEventListener('click', (event) =>{
    document.querySelector(".form-section").style.display= "block"
    
} )

document.querySelector("#close-button").addEventListener('click', (event) =>{
    document.querySelector(".form-section").style.display= "none"
} )


const inputText = document.querySelector(".input-text")

inputText.addEventListener('keydown', (event) => 
    {if(event.key === 'Enter'){ 
        addStickyNote();
        //const txt = inputText.value;
        // addStickyNote(txt);
        //logger(txt)
        inputText.value = ""
    }
  });

function logger(text){
    print (console.log(text))
}

function addStickyNote(event) {
    
    const note = document.createElement('div')
    note.classList.add('all-notes')

    const stickerText = document.createElement('h2')
    stickerText.innerText = inputText.value;
    stickerText.classList.add('stickerContent')

    note.appendChild(stickerText);
    note.setAttribute("style", `margin: ${randomMargins[generateRandom()]}; background-color: ${randomColors[generateRandom()]}; transform: ${randomDeg[generateRandom()]}`);
    
    console.log(randomDeg[3])
    document.querySelector(".container").appendChild(note);

    //logger(note.innerText)
    stickerText.value =""

    note.addEventListener("dblclick", () => {
        note.remove()
    })

}

function generateRandom() {
    return (Math.floor(Math.random()*6))
}
