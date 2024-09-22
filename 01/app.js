const commnetsItems = document.querySelectorAll(
  ".comments__item.comments__item--newest"
);

let itemsCount = 0;

commnetsItems.forEach((element) => {
  const itemsWithDataInfo = element.querySelectorAll("[data-info]");
  itemsCount += itemsWithDataInfo.length;
});

console.log(`Odnaleziono ${itemsCount} elementów w atrybutem [data-info]`);

const dataItems = document.querySelector(
  ".comments__item.comments__item--newest"
);
