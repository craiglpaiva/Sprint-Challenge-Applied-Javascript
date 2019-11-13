// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((results) => {
        console.log(results);
        artCards(results);
    })
    .catch((err) => {
        console.log(err);
    })


const dataTopics = [
    'bootstrap',
    'javascript',
    'jquery',
    'node',
    'technology',
];

dataTopics.forEach((articles) => {
    axios.get('https://lambda-times-backend.herokuapp.com/articles')
        .then((result) => {
            artCards(result);
        })
        .catch((err) => {
            console.log(err);
        })
})

function artCards(articles) {
    let card = document.createElement('div');
    let cardHeadline = document.createElement('div');
    let cardAuthor = document.createElement('div');
    let cardImgContainer = document.createElement('div');
    let cardImg = document.createElement('img');
    let cardCredit = document.createElement('span');

    //  Content
    cardHeadline.textContent = articles.headline;
    cardAuthor.textContent = articles.authorName;
    cardImg.src = articles.authorPhoto;
    cardCredit.textContent = articles.span;

    // Styles
    card.classList.add('.card');
    cardHeadline.classList.add('.headline');
    cardAuthor.classList.add('.author');
    cardImgContainer.classList.add('img-container')
    cardCredit.classList.add('author-name');

    // Structure
    card.appendChild(cardHeadline);
    card.appendChild(cardAuthor);
    cardAuthor.appendChild(cardImgContainer);
    cardImgContainer.appendChild(cardImg);
    card.appendChild(cardCredit);
    document.querySelector('.cards-container').appendChild(card);
}
