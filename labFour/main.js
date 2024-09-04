let cardData = [
  {
    title: "Tranquil Waters",
    cardText: "A peaceful view of a serene lake surrounded by mountains.",
    imgUrl:
      "https://images.unsplash.com/photo-1530156942216-f6487910a7d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Golden Sunset",
    cardText: "The sky ablaze with hues of orange and gold at dusk.",
    imgUrl:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Autumn Leaves",
    cardText: "Falling leaves create a golden carpet in the forest.",
    imgUrl:
      "https://static.euronews.com/articles/stories/06/12/81/78/1920x1080_cmsv2_6de9cbe7-5b6b-53c2-b2c6-c25d29e1ab83-6128178.jpg",
  },
  {
    title: "Misty Mountains",
    cardText: "Clouds cling to the peaks of a distant mountain range.",
    imgUrl: "https://live.staticflickr.com/4027/4253508347_e4990155e0_b.jpg",
  },
  {
    title: "Quiet Forest",
    cardText: "A tranquil path through a dense and quiet forest.",
    imgUrl:
      "https://images.unsplash.com/photo-1477512076069-d31eb021716f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Lush Greenery",
    cardText: "A vibrant green landscape, full of life and freshness.",
    imgUrl:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Urban Sunset",
    cardText: "The sun sets behind the skyscrapers, casting long shadows.",
    imgUrl:
      "https://images.fineartamerica.com/images-medium-large/urban-sunset-olga-medrano.jpg",
  },
  {
    title: "Rolling Hills",
    cardText: "Gentle hills roll across the countryside under a blue sky.",
    imgUrl:
      "https://www.thesouthwestedge.com.au/wp-content/uploads/2021/02/11_20201015_VILLAGES-IN-THE-VALLEY_Nannup-Whimwood-Estate-scaled.jpg",
  },
  {
    title: "Ocean Waves",
    cardText: "Waves crash against the shore on a bright, sunny day.",
    imgUrl:
      "https://www.bodhisurfyoga.com/wp-content/uploads/2021/05/plunging-wave.jpg",
  },
  {
    title: "Starry Night",
    cardText: "A sky full of stars, with the Milky Way clearly visible.",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW3byhjOjjlkZ-S8cVdSCjAiJyf7nFu28iMQ&s",
  },
  {
    title: "Desert Dunes",
    cardText: "Endless sand dunes under a scorching desert sun.",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTpq4akE3lHlkbHRfOk3NKqb-3jtrejQOKwQ&s",
  },
  {
    title: "Winter Wonderland",
    cardText: "Snow-covered trees and fields create a winter wonderland.",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqOHO4W2NU5D4Ged9Plsm91mbdEqF7NqqvRQ&s",
  },
];

function addCard(title, text, imgSrc, appendTo) {
  const template = document
    .getElementById("card-template")
    .content.cloneNode(true);

  template.querySelector(".card-title").innerText = title;
  template.querySelector(".card-text").innerText = text;
  template.querySelector(".card-img-top").setAttribute("src", imgSrc);

  document.querySelector(`#${appendTo}`).appendChild(template);
}

cardData.forEach((record) => {
  addCard(record.title, record.cardText, record.imgUrl, "allCards");
});
