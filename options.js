//Four color options are provided then generated as buttons on the options page with onclick event listeners. When the user clicks a button, it updates the color value in the extension's global storage. Since all of the extension's files pull the color information from global storage no other values need to be updated.

// provides option JS functionality for when popup button is clicked
// option to add new words to blueArray
// button to reset stored custom words

//!! change this file for user to add words (stretch feature) & button to reset

// let page = document.getElementById('buttonDiv');
//   const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];
//   function constructOptions(kButtonColors) {
//     for (let item of kButtonColors) {
//       let button = document.createElement('button');
//       button.style.backgroundColor = item;
//       button.addEventListener('click', function() {
//         chrome.storage.sync.set({color: item}, function() {
//           console.log('color is ' + item);
//         })
//       });
//       page.appendChild(button);
//     }
//   }
//   constructOptions(kButtonColors);