// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function createHeader(data) {
    const header = document.createElement('div');
    const headerDate = document.createElement('span');
    const headerHeadline = document.createElement('h1');
    const headerTemp = document.createElement('span');

    header.appendChild(headerDate);
    header.appendChild(headerHeadline);
    header.appendChild(headerTemp);

    headerDate.textContent = data.date;
    headerHeadline.textContent = data.headline;
    headerTemp.textContent = data.temp;

    header.classList.add('.header');
    headerDate.classList.add('.date');
    headerHeadline.classList.add(' h1');
    headerTemp.classList.add('.temp');

    return header;

}

const headers = document.querySelector('.header-container');
headers.forEach(element => {
    headers.appendChild(createHeader(element));
})
