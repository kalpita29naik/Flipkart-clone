// fetch("./data/categories.json")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("network response was not ok");
//     }
//     return response.json();
//   })
//   .then((data) => {
//     displayCategories(data.categories);
//   })
//   .catch((error) => {
//     console.error("There was a problem with fetch", error);
//   });

// function displayCategories(categories) {
//   const categoryList = document.querySelector(".category-list");
//   categories.forEach((category) => {
//     const categoryCard = `
//     <div class="category-card">
//     <img src="${category.url}" alt="${category.name}" />
//     <h3>${category.name}</h3>`;
//     categoryList.innerHTML += categoryCard;
//   });
// }

//slider script
var sliderIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slider");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  sliderIndex++;
  if (sliderIndex > x.length) {
    sliderIndex = 1;
  }
  x[sliderIndex - 1].style.display = "block";
  setTimeout(carousel, 2000);
}
