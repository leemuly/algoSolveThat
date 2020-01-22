// Given an alphabetical array of dictionary entries and a word to search for, find that word's definition (if it exists). A dictionary entry is just a string where the word's name appears first, followed by - [definition].

//BST solution
function definitionOf(string, dictionary){
  let startLeft = 0
  let startRight = dictionary.length-1
  let index
  while(index !== startLeft && index !== startRight){
    index = Math.floor((startLeft + startRight)/2)
    if(dictionary[index].startsWith(string + ' - ')){
      return dictionary[index].slice(string.length+3)
    }
    if(string < dictionary[index]){
      startRight = index - 1
    } else {
      startLeft = index + 1
    }
  }
}

const dictionary = [
  'a - Used when mentioning someone or something for the first time in a text or conversation',
  'and - Used to connect words of the same part of speech, clauses, or sentences, that are to be taken jointly',
  'be - Exist',
  'in - Expressing the situation of something that is or appears to be enclosed or surrounded by something else',
  'of - Expressing the relationship between a part and a whole',
  'that - Used to identify a specific person or thing observed or heard by the speaker',
  'the - Denoting one or more people or things already mentioned or assumed to be common knowledge',
  'to - Expressing motion in the direction of (a particular location)'
];
console.log(definitionOf('be', dictionary)); // should return 'Exist'
console.log(definitionOf('that', dictionary)); // should return 'Used to identify a specific person or thing observed or heard by the speaker'
console.log(definitionOf('to', dictionary)); // should return 'Expressing motion in the direction of (a particular location)'
console.log(definitionOf('wizbing', dictionary)); // should return undefined
