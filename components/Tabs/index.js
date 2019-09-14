// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//  <div class="tab">topic here</div>

const entryPoint = document.querySelector(".entry");

axios
    .get('https://lambda-times-backend.herokuapp.com/topics')
    .then((results => {
        console.log(results);
        results.data.message.forEach(url => {
            const tabCard = tabCard(url);
            entryPoint.appendChild(tabCard);
        })
    }))
    .catch((err) => {
        console.log(err);
    })

function tabCardCreator(obj) {
    // Create all elements
    const tabs = document.createElement("div");
    const tabTopics = document.createElement("div");
    const tabTitle = document.createElement("span");


    // Structure
    tabs.appendChild(tabTopics);
    tabs.appendChild(tabTitle);



    // Content
    tabs.setAttribute(url.obj.tabs);
    tabTitle.textContent = obj.topics;
    tabTopics.textContent = obj.temp;


    // Styles
    tabs.classList.add(".tabs");
    tabTopics.classList.add(".topics");
    tabTitle.classList.add(".title");


    return tabs;

}

const newTabss = document.querySelector('.tabs');