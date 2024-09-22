console.log("DOM");
//AD- 01
const curr = document.querySelector(".js-curr");
const button = document.createElement("button");
button.innerText = "Usuń z Koszyka";
const currParent = curr.parentElement;

currParent.appendChild(button);
//AD-02
const siblings = currParent.children;
const numberOfSiblings = siblings.length;
for (let i = 0; i < numberOfSiblings; i++) {
  siblings.item(i).classList.add("siblings");
}
//AD-03
currParent.nextElementSibling.setAttribute("title", "nextElementSibling");
//AD-04
const paragrah = document.createElement("p");
paragrah.innerText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quo quibusdam, nemo neque consequuntur pariatur totam? Facere quaerat molestias hic.";

const lastArticle = currParent.parentElement.lastElementChild;
lastArticle.insertBefore(paragrah, lastArticle.lastElementChild);
//AD-05;

const sectionParent = currParent.parentElement;
const buttonElement = document.createElement("button");
buttonElement.innerText = "Kupuję!";
const header = document.createElement("h1");
header.innerText = "JS - AD-05";
const article = document.createElement("article");
article.classList.add("articles__item", "article");
article.appendChild(header);
article.appendChild(paragrah);
article.appendChild(buttonElement);
sectionParent.insertBefore(article, currParent);
