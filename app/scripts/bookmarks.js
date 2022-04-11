console.log(`'Allo 'Allo! Bookmarks`)

// https://developer.chrome.com/docs/extensions/reference/tabGroups/#method
chrome.tabGroups.get('2', function (tabGroup) {
  console.log(tabGroup)
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
