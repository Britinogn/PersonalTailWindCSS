// variables

// let btn = document.querySelector('#new-quote');

// let  quote = document.querySelector('.quote');

// let person = document.querySelector('.person');

// const quotes = [{
//     quote: '“Ive learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”',
//     person: 'Maya Angelou'
// }, {
//     quote: '“It always seems impossible until it is done.”',
//     person: 'Nelson Mandela'
// }, {
//     quote: '“Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do”',
//     person: 'Steve Jobs'
// }, {
//     quote: '“Your time is limited, so don’t waste it living someone else’s life.”',
//     person: 'Steve Jobs'
// }, {
//     quote: '“The best way to predict the future is to invent it.”',
//     person: 'Maya Angelou'
// }, {
//     quote: '“Success is not final, failure is not fatal: It is the courage to continue that counts.”',
//     person: 'Winston Churchill'
// }, {
//     quote: '“Education is the most powerful weapon which you can use to change the world.”',
//     person: 'Nelson Mandela'
// },
//     {
//     quote: '“Imagination is more important than knowledge.”',
//     person: 'Albert Einstein'
// },
//     {
//     quote: '“The greatest glory in living lies not in never falling, but in rising every time we fall.”',
//     person: 'Confucius'
// },
//     {
//     quote: '“The way to get started is to quit talking and begin doing.”',
//     person: 'Walt Disney'
// },
//     {
//     quote: '“Hardships often prepare ordinary people for an extraordinary destiny.”',
//     person: 'C.S. Lewis'
// },
//     {
//     quote: '“A journey of a thousand miles begins with a single step.”',
//     person: 'Lao Tzu'
// },
//     {
//     quote: '“Do what you can, with what you have, where you are.”',
//     person: 'Theodore Roosevelt'
// },
//     {
//     quote: '“Opportunities don’t happen. You create them.”',
//     person: 'Chris Grosser'
// },
//     {
//     quote: '“Great things never come from comfort zones.”',
//     person: 'Anonymous'
// },
//     {
//     quote: '“Dream big and dare to fail.”',
//     person: 'Norman Vaughan'
// },
//     {
//     quote: '“Everything you’ve ever wanted is on the other side of fear.”',
//     person: 'George Addair'
// },

// ];


// btn.addEventListener('click', function(){
//     let random = Math.floor(Math.random() * quotes.length);
//     quote.innerHTML = quotes[random].quote;
//     person.innerHTML = quotes[random].person;
// })


// function dark(){
//     document.style.backgroundColor = "Black";
//     document.style.color = "white";
// }



const container = document.getElementById('post-container');

function newQuote(){
    container.innerHTML = '<p>Loading.......</p>';
    
    const randomId = Math.floor(Math.random() * 100) + 1;

    // alert(randomId)

    fetch(`https://dummyjson.com/quotes/${randomId}`)
    .then(response => response.json())
    .then(post => {

        container.innerHTML = `
               <div class="text-area pt-8 text-center text-white text-sm/8">
                    <span class="quote font-semibold text-black ">
                        “${post.quote}”
                    </span>
                </div>

                <div class="person text-center text-red-600 uppercase font-bold pt-3 text-2xl mt-auto">
                   ${post.author}
                </div>        `
    })
}