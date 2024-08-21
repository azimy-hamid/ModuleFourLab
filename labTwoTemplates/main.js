// IMPORTANT: I HAVE COMMENTED OUT EACH EXERCISE IN THIS FILE SEPARATELY, EACH OF THEM ARE INDEPENDENT SO INCOMMENTING EACH ONE WILL BE EASY TO CHECK

/*

// Exercise 1 :
// Modify the addCard function from the previous slide
// so that you can pass content for the card dynamically.
function addCard(title, text) {
  // clone the template
  const template = document
    .getElementById("card-template")
    .content.cloneNode(true);
  // populate the template
  template.querySelector(".card-title").innerText = title;
  template.querySelector(".card-text").innerText = text;
  // include the populated template into the page
  document.querySelector("#card-list").appendChild(template);
}
addCard("Adding a title", "Adding a description");

*/

/*

// Exercise 2 :
// Call addCard repeatedly so that your cards are automatically generated based on data from an array. This way you will create as many cards as you need to display all the data in the array.

// NOTE: I'M MAKING ANOTHER FUNCTION TO GENERATE CARD THAT'S CUSTOM MADE FOR THE DATA ARRAY, ONLY THE PARAMETER NAMES ARE DIFFERENT EVERYTHING ELSE ARE THE SAME
function addCardPerson(name, age) {
  const template = document
    .getElementById("card-template")
    .content.cloneNode(true);

  template.querySelector(".card-title").innerText = name;
  template.querySelector(".card-text").innerText = age;

  document.querySelector("#card-list").appendChild(template);
}

const data = [
  { name: "bob", age: 23 },
  { name: "alice", age: 39 },
];

data.forEach((record) => {
  addCardPerson(record.name, record.age);
});

*/

/*

// Exercise 3 - the artist’s portfolio:
// Populate the page dynamically, by generating an artist profile card which includes cards representing the items in an artist's portfolio.

const artist = {
  name: "Van Gogh",
  portfolio: [
    {
      title: "portrait",
      url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/436532/1671316/main-image",
    },
    {
      title: "sky",
      url: "https://mymodernmet.com/wp/wp-content/uploads/2020/11/White-house-night-van-goh-worldwide-2.jpg",
    },
  ],
};

// NOTE: I'M MAKING ANOTHER FUNCTION TO GENERATE CARD THAT'S CUSTOM MADE FOR THE PORTFOLIO ARRAY, ONLY THE PARAMETER NAMES ARE DIFFERENT EVERYTHING ELSE ARE THE SAME
// ALSO I HAVE CREATED ANOTHER SEPARATE TEMPLATE IN THE HTML FILE FOR THE PORTFOLIO

function addCardPortfolio(name, title, imgSrc) {
  const template = document
    .getElementById("portfolio-card-template")
    .content.cloneNode(true);

  template.querySelector(".card-name").innerText = name;
  template.querySelector(".card-title").innerText = title;
  template.querySelector(".card-img").setAttribute("src", imgSrc);

  document.querySelector("#card-list").appendChild(template);
}

artistPortfolioDetails = artist.portfolio;
artistPortfolioDetails.forEach((item) => {
  addCardPortfolio(artist.name, item.title, item.url);
});

// Extension: make an array of artists, all with multiple portfolio items.
const artistArray = [
  {
    name: "Francis",
    portfolio: [
      {
        title: "portrait",
        url: "https://media.nga.gov/iiif/2dd444f1-f924-4ae3-8935-f13e0cd4a945/full/!325,370/0/default.jpg",
      },
      {
        title: "sky",
        url: "https://media.nga.gov/iiif/ed0b70d3-a43b-4a00-89ac-657b7e396689/full/!440,400/0/default.jpg",
      },
    ],
  },
  {
    name: "Paul",
    portfolio: [
      {
        title: "women portrait",
        url: "https://media.nga.gov/iiif/d1efb8f5-64d8-4d14-975f-ff085ee722cb/full/!384,384/0/default.jpg",
      },
      {
        title: "Another portrait",
        url: "https://media.nga.gov/iiif/a7ea75cd-dc2f-4504-99b6-43f8c08a702a/full/!384,384/0/default.jpg",
      },
    ],
  },
  {
    name: "Alex",
    portfolio: [
      {
        title: "portrait",
        url: "https://media.nga.gov/iiif/c2d64bdd-cb82-4772-b1eb-01b2a9b54d24/full/!384,384/0/default.jpg",
      },
      {
        title: "sky",
        url: "https://media.nga.gov/iiif/a7ea75cd-dc2f-4504-99b6-43f8c08a702a/full/!384,384/0/default.jpg",
      },
    ],
  },
];

artistArray.map((artist) => {
  artistDetailsWithoutName = artist.portfolio;
  artistDetailsWithoutName.forEach((detail) => {
    addCardPortfolio(artist.name, detail.title, detail.url);
  });
});

*/
