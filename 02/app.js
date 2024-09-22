const links = document.querySelectorAll("a");

links.forEach((element) => {
  let href = element.dataset.url;
  if (href !== undefined) {
    element.setAttribute("href", href);
  } else {
    element.setAttribute("href", "#");
  }
});
