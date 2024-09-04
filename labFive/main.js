let news = [
  { id: 1, title: "Election Results", content: "Newly elected minister..." },
  { id: 2, title: "Sporting Success", content: "World Cup winners..." },
  { id: 3, title: "Tornado Warning", content: "Residents should prepare..." },
  { id: 4, title: "Tornado Warning", content: "Residents should prepare..." },
];

// const templateTitleElement = document.getElementById("news-template-title-id");
// const templateTextElement = document.getElementById("news-template-text-id");
const newsContainer = document.getElementById("news-inner-container-id");

const printNews = (appendTo, news) => {
  appendTo.innerHTML = "";
  news.forEach((newsItem) => {
    const template = document
      .getElementById("news-template")
      .content.cloneNode(true);

    template.querySelector(".card-title").textContent = newsItem.title;
    template.querySelector(".card-text").textContent = newsItem.content;

    appendTo.appendChild(template);
    console.log(news);
  }, 2000);
};

const intervalId = setInterval(() => {
  printNews(newsContainer, news);
}, 2000);

const newsSubmit = document.getElementById("news-submit");

newsSubmit.addEventListener("click", (e) => {
  e.preventDefault();

  const newsTitle = document.getElementById("news-title").value;
  const newsContent = document.getElementById("news-content").value;

  news.push({ title: newsTitle, content: newsContent });
});

const stopNewsBtn = document.getElementById("stop-news-btn");

stopNewsBtn.addEventListener("click", () => {
  clearInterval(intervalId);
});
