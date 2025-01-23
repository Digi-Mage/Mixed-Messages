
let subjectOne = ['My fairy godmother', 'A grumpy old man', 'Mysterious jester', 'A dancing potato', 'A sentient tree', 'A curious cat', 'An adventurous astronaut','My dog', 'My sister', 'My brother', 'My girlfriend', 'Your mom', 'The mayor', 'The President']
let action = ['ran', 'danced', 'swayed', 'swirved', 'swung', 'meandered', 'swam', 'jumped', 'leapt', 'fell', 'slipped', 'crouched', 'laid', 'wept', 'slid']
let description = ['silently', 'swiftly', 'quickly', 'slowly', 'loudly', 'lovingly', 'angrily', 'sadly', 'quietly']
let preposition = ['into', 'onto', 'under', 'over', 'around', 'behind']
let subjectTwo = ['space', 'a chair', 'a table', 'the moonlight', 'the background', 'your mom', 'a jail cell', 'the ring', 'the sky', 'a pit', 'a yaht', 'a ski lift']
let punctuation = ['.', '?', '!']

const selection = (arr) => {
    return arr[(Math.floor(Math.random()* arr.length))]
}

const finalMessage = () => {
    document.getElementById("final").innerHTML =(`${selection(subjectOne)} ${selection(action)} ${selection(description)} ${selection(preposition)} ${selection(subjectTwo)}${selection(punctuation)}`)
}

const formMessage = () => {
    document.getElementById("form-final").innerHTML =(`${selection(subjectOne)} ${selection(action)} ${selection(description)} ${selection(preposition)} ${selection(subjectTwo)}${selection(punctuation)}`)
}



