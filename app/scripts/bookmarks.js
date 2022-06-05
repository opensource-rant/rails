console.log(`'HAllo 'Allo! Bookmarks`)

fetch('https://www.fiverr.com/categories/graphics-design/fonts-typography?source=category_tree').then((result) => {
  console.error(result);
}).catch((err) => {
  console.log(err);
});

// chrome.bookmarks.get('2', function (bookmark) {
//   console.log(bookmark)
// })
chrome.tabs.query({}, function (tabs) {
})

// function reqListener () {
//   console.log(this.responseText);
// }
//
// var oReq = new XMLHttpRequest();
// oReq.addEventListener("load", reqListener);
// oReq.open("GET", "http://www.example.org/example.txt");
// oReq.send();
//
