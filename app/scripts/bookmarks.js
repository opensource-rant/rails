console.log(`'Allo 'Allo! Bookmarks`)

// chrome.bookmarks.get('2', function (bookmark) {
//   console.log(bookmark)
// })
chrome.tabs.query({}, function (tabs) {
  for (tab of tabs) {
    let id = tab.groupId
    if (id != -1)
    {
      group = chrome.tabGroups.get(id)
      console.log(group)
    }
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
