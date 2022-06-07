console.log("here");

const link = document.querySelector('.sitemap-box').querySelectorAll('.nested-subcategory a')[0]

console.log(link);

chrome.tabs.create({active: false, url: link.href})


const oReq = new XMLHttpRequest();
// oReq.open("GET", "http://www.google.com");
// oReq.send().then((result) => {
//   console.log(result);
// }).catch((err) => {
//   console.error(err);
// });
//

console.log(oReq);
