const qs = (Element, parent=document) => parent.querySelector(Element);
var sequence = [];
const tempo = qs(".tempo")
var delay = 250;
tempo.innerHtml = delay
isPlaying = false
isRecording = false;
const recBTN = qs(".recBtn")
const recText = qs(".isRecording");
const boom = { element : qs(".boom"), path: "assets/sounds/boom.wav"}
const clap = { element : qs(".clap"), path: "assets/sounds/clap.wav"}
const hh = { element : qs(".hh"), path: "assets/sounds/hihat.wav"}
const kick = { element: qs(".kick"), path: "assets/sounds/kick.wav"}
const oh = { element: qs(".oh"), path: "assets/sounds/openhat.wav"}
const ride = { element: qs(".ride"), path: "assets/sounds/ride.wav"}
const snare = {element: qs(".snare"), path: "assets/sounds/snare.wav"}
const tink = { element: qs(".tink"), path: "assets/sounds/tink.wav"}
const tom = {element: qs(".tom"), path: "assets/sounds/tom.wav"}
const play = qs(".play")
const btn = qs(".btn")

const handleButtonPress = (Element, soundPath) => {
    Element.addEventListener("click", e => {
        Element.classList.add("btnActive")
        let audio = new Audio(soundPath)
        audio.play()
        setTimeout(()=>Element.classList.remove("btnActive"), 250)
        if(isRecording) 
        {
            sequence.push(new Audio(soundPath))
        }
    })
}

const recordingHandler = () => {
    isRecording = !isRecording;
    if(isRecording)
    {
        recText.innerText = "Stop Recording"
    }
    else
    {
        recText.innerText = "Start Recording"
    }
}
const playHandler = () => {
    if(isPlaying)
        return
    isPlaying =  !isPlaying
    playSequence()
}
const stop = () => {
    if(isPlaying)
        isPlaying = !isPlaying
    return
}
const playSequence = () => {
    let speed = delay
    for(let i = 0; i<sequence.length; i++)
    {
        if(isPlaying) {
            setTimeout(() => console.log(sequence[i].play()), delay* i+1)
        }
        else 
        {
            return
        }
    }

}
const increment = qs(".increment")
const incrementTempo = () => {
    tempo.innerText = tempo.innerHtml +=  50
    delay += 50;
}
increment.addEventListener("click", incrementTempo)
const decrementTempo = () => {
    tempo.innerText = tempo.innerHtml -=  50
    delay -= 50;
}
const soundArr = [boom, clap, hh, kick, oh, ride, snare, tink, tom]
soundArr.forEach(e=> handleButtonPress(e.element, e.path))
recBTN.addEventListener("click", recordingHandler)
play.addEventListener("click", playHandler)
