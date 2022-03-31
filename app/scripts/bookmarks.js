console.log(`'Allo 'Allo! Bookmarks`)

chrome.bookmarks.get('2', function (bookmarks) {
  console.log(bookmarks)
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
