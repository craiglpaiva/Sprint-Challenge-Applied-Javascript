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
    let header = document.createElement('div');
    let headerDate = document.createElement('span');
    let headerHeadline = document.createElement('h1');
    let headerTemp = document.createElement('span');

    headerDate.textContent = data.date;
    headerHeadline.textContent = data.headline;
    headerTemp.textContent = data.temp;

    header.classList.add('.header');
    headerDate.classList.add('.date');
    headerHeadline.classList.add(' h1');
    headerTemp.classList.add('.temp');

    header.appendChild(headerDate);
    header.appendChild(headerHeadline);
    header.appendChild(headerTemp);
    document.querySelector('.header-container').appendChild(header);

}

// const headers = 
// headers.forEach(element => {
//     headers.appendChild(createHeader(element));
// })
