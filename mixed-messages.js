
let subjectOne = ['My dog', 'My sister', 'My brother', 'My girlfriend', 'Your mom', 'The mayor', 'The President']
let action = ['ran', 'danced', 'swayed', 'swirved', 'swung', 'meandered', 'swam', 'jumped', 'leapt', 'fell', 'slipped', 'crouched', 'laid', 'wept']
let description = ['silently', 'swiftly', 'quickly', 'slowly', 'loudly', 'lovingly', 'angrily', 'sadly', 'quietly']
let preposition = ['into', 'onto', 'under', 'over', 'around']
let subjectTwo = ['space', 'a chair', 'a table', 'the background', 'your mom', 'a jail cell', 'the ring', 'the sky', 'a pit', 'a yaht', 'a ski lift']
let punctuation = ['.', '?', '!']

const selection = (arr) => {
    return arr[(Math.floor(Math.random()* arr.length))]
}

const finalMessage = () => {
    document.getElementById("final").innerHTML =(`${selection(subjectOne)} ${selection(action)} ${selection(description)} ${selection(preposition)} ${selection(subjectTwo)}${selection(punctuation)}`)
}





