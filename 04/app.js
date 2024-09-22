console.log("DOM");
const nav = document.querySelector("nav");
const ul = document.createElement("ul");

function createLiA(href, text) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.setAttribute("href", href);
  a.innerText = text;
  li.appendChild(a);
  return li;
}

ul.appendChild(createLiA("/", "start"));
ul.appendChild(createLiA("/galeria", "galeria"));
ul.appendChild(createLiA("/kontakt", "kontakt"));
nav.appendChild(ul);

// struktura do wykorzystania w pętli

const menuItems = [
  { text: "start", url: "/" },
  { text: "galeria", url: "/gallery" },
  { text: "kontakt", url: "/contact" },
];

function createMenuItems(items) {
  const ul = document.createElement("ul");
  items.forEach((element) => {
    ul.appendChild(createLiA(element.url, element.text));
  });
  return ul;
}

nav.appendChild(createMenuItems(menuItems));
