console.log(`'Allo 'Allo! Bookmarks`)

var list = []

chrome.bookmarks.getSubTree('1', function (result) {
  list = result

  console.log(list)
});
