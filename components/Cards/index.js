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


//perform axios promise to get data from API
const articlesPromise = axios.get('https://lambda-times-backend.herokuapp.com/articles');
//check what data we're receiving
console.log('Failsafe: Here\'s your axios promise for articles captain!', articlesPromise);

const cardsContainers = document.querySelector('.cards-container');


articlesPromise.then(res => {
    console.log('Failsafe: Here\'s your console.log from cards Captain.', res);
    articleTopics = res.data.articles;

    articleTopics.node.forEach(article => {
        cardsContainers.appendChild(artCards(article));
    })
    articleTopics.bootstrap.forEach(article => {
        cardsContainers.appendChild(artCards(article));
    })
    articleTopics.jquery.forEach(article => {
        cardsContainers.appendChild(artCards(article));
    })
    articleTopics.technology.forEach(article => {
        cardsContainers.appendChild(artCards(article));
    })
    articleTopics.javascript.forEach(article => {
        cardsContainers.appendChild(artCards(article));
    })
})

function artCards(data) {
    let card = document.createElement('div');
    let cardHeadline = document.createElement('div');
    let authorContainer = document.createElement('div');
    let cardImgContainer = document.createElement('div');
    let cardImg = document.createElement('img');
    let authorName = document.createElement('span');

    //  Content
    cardHeadline.textContent = `${data.headline}`;
    authorContainer.textContent = `${data.authorName}`;
    cardImg.src = `${data.authorPhoto}`;

    // Styles
    card.classList.add('card');
    cardHeadline.classList.add('headline');
    authorContainer.classList.add('author');
    cardImgContainer.classList.add('img-container')
    authorName.classList.add('author-name');

    // Structure
    card.appendChild(cardHeadline);
    card.appendChild(authorContainer);
    authorContainer.appendChild(cardImgContainer);
    cardImgContainer.appendChild(cardImg);
    authorContainer.appendChild(authorName);
    return card;
}

