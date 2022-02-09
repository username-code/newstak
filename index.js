// 962e78df3c144f8391cc9acb62c43ff7

let sources = "the-times-of-india";
let apiKey = "962e78df3c144f8391cc9acb62c43ff7";

// grap the news container
let newsAccordion = document.getElementById("newsAccordion");

// Create get request
const xhr = new XMLHttpRequest();
xhr.open(
  "POST",
  `https://newsapi.org/v2/top-headlines?sources=${sources}&apiKey=${apiKey}`,
  true
);

xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    console.log(articles);

    let newsHTML = "";
    articles.forEach(function (element, index) {
      let news = `     
      <div class="card">
      <div class="card-header" id="heading${index}">
          <h2 class="mb-0">
          <button class="btn btn collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
              aria-expanded="false" aria-controls="collapse${index}">
              <span class="badge bg-danger"><b>Breaking News ${
                index + 1
              }:</b></span> ${element["title"]}
          </button>
          </h2>
      </div>

      <div id="collapse${index}" class="collapse show" aria-labelledby="heading${index}" data-parent="#newsAccordion">
          <div class="card-body"> ${element["content"]}. <a href="${
        element["url"]
      }" target="_blank" >Read more here</a>  </div>
      </div>
  </div>`;
      newsHTML += news;
    });
    newsAccordion.innerHTML = newsHTML;
  } else {
    console.log("Some error occured");
  }
};
xhr.send();
