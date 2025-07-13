// variables

let btn = document.querySelector('#new-quote');

let  quote = document.querySelector('.quote');

let person = document.querySelector('.person');

const quotes = [{
    quote: '“Ive learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”',
    person: 'Maya Angelou'
}, {
     quote: '“It always seems impossible until it is done.”',
    person: 'Nelson Mandela'
}, {
    quote: '“Ive learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”',
    person: 'Steve Jobs'
}, {
    quote: '“Your time is limited, so don’t waste it living someone else’s life.”',
    person: 'Maya Angelou'
}, {
    quote: '“Ive learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”',
    person: 'Maya Angelou'
}, {
    quote: '“Success is not final, failure is not fatal: It is the courage to continue that counts.”',
    person: 'Winston Churchill'
}];


btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[random].quote;
    person.innerHTML = quotes[random].person;
})