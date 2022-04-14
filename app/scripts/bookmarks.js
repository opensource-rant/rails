console.log(`'Allo 'Allo! Bookmarks`)

// chrome.bookmarks.get('2', function (bookmark) {
//   console.log(bookmark)
// })
chrome.tabs.query({}, function (tab) {
  for (tab of tabs) {
    console.log(tab.groupId)
  }
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
