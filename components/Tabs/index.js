// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//  <div class="tab">topic here</div>

// axios.get('https://lambda-times-backend.herokuapp.com/topics')
//     .then((results) => {
//         console.log(results);
//         tabCard(results);
//     })
//     .catch((err) => {
//         console.log(err);
//     })


// function tabCard(topics) {
//     const tab = document.createElement('div');
//     tab.classList.add('tab');
//     tab.textContent = topics;
//     document.querySelector('.topics').appendChild(tab);
// }

function createTabs(data) {
    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.textContent = `${data}`;
    return tab;
}

const topicElement = document.querySelector('.topics');
const axiosPromise = axios.get('https://lambda-times-backend.herokuapp.com/topics')
console.log(`Line 37`, axiosPromise);
axiosPromise.then(res => {
    const topics = res.data.topics;
    console.log(topics);

    topics.forEach(topic => {
        topicElement.appendChild(createTabs(topic));
    })
})