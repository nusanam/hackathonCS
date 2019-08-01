// changes popup icon color if script (word filter) is detected on a specific page
// The browser will now show a full-color page-action icon in the browser toolbar when users navigate to a URL that contains "developer.chrome.com". When the icon is full-color, users can click it to view popup.html. 
// basically popup icon will change color if we access a tab that's able to run the script aka it has words

// let changeColor = document.getElementById('changeColor');

// chrome.storage.sync.get('color', function(data) {
//   changeColor.style.backgroundColor = data.color;
//   changeColor.setAttribute('value', data.color);
// });

// // The updated code adds an onclick event the button, which triggers a programatically injected content script. This turns the background color of the page the same color as the button. Using programmatic injection allows for user-invoked content scripts, instead of auto inserting unwanted code into web pages.

// changeColor.onclick = function(element) {
//   let color = element.target.value;
//   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     chrome.tabs.executeScript(
//         tabs[0].id,
//         {code: 'document.body.style.backgroundColor = "' + color + '";'});
//   });
// };

function sendSearch(searchWord, searchregexp) {
  //console.log("popup.js > sendClicks()");
   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
       chrome.tabs.sendMessage(tabs[0].id, {searchWord: searchWord, search: true}, function(response) {
           console.log(response);
       });
   });

}

function resetLastWord(lastSearched){
   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
       chrome.tabs.sendMessage(tabs[0].id, {lastSearched: lastSearched, search: false}, function(response){
           console.log(response);
       });
   });    
}

$(function() {
   $('#find-word').click(function(){
       chrome.storage.sync.get(['lastSearched'], function(word){
           var searchWord = $('#search').val()
           if(word.lastSearched){
               resetLastWord(word.lastSearched);
               if(searchWord){
                   chrome.storage.sync.set({'lastSearched':searchWord});
                   sendSearch(searchWord);
               }
           }

           else{
               if(searchWord){
                   chrome.storage.sync.set({'lastSearched':searchWord});
                   sendSearch(searchWord);
               }
           }
       });
       //var searchregexp = new RegExp($('#search').val().replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), "gi");
       //highlightWord(searchWord, searchregexp);
       
   });
});