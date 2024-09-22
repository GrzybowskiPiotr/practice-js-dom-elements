console.log("DOM");
const parentForButton = document.querySelector(".parent-for-button");
const buttonSettings = {
  attr: {
    className: "btn",
    title: "super button",
  },
  css: {
    border: "1px solid #336699",
    padding: "5px 20px",
    color: "#444",
  },
  text: "Click me!",
};

function createButton(settingsObj) {
  const button = document.createElement("button");
  for (let prop in settingsObj) {
    if (prop === "text") {
      button.innerText = settingsObj[prop];
    } else if (prop === "css") {
      const props = Object.keys(settingsObj.css);
      let style = "";
      props.forEach((element) => {
        style += `${element}: ${settingsObj.css[element]};`;
      });
      button.setAttribute("style", style);
    } else if (prop === "attr") {
      button.setAttribute("title", settingsObj.attr.title);
      button.setAttribute("class", settingsObj.attr.className);
    }
  }
  return button;
}

parentForButton.appendChild(createButton(buttonSettings));
