
// https://developer.chrome.com/docs/extensions/reference/tabGroups/#method
chrome.tabGroups.get('2', function (tabGroup) {
  console.log(tabGroup)
})
