const data = [
  {
    id: 1,
    name: "Women's pro driver",
    img: "photo/images (2).jpg",
    price: 90,
    cat: "Dress",
  },
  {
    id: 11,
    name: "Women's ultra pro driver",
    img: "photo/images.jpg",
    price: 50,
    cat: "Dress",
  },
  {
    id: 2,
    name: "Men's  driver",
    img: "photo/71JU-bUt-sL._AC_UL480_FMwebp_QL65_.webp",
    price: 70,
    cat: "Sport",
  },
  {
    id: 3,
    name: "Men's luxury watch",
    img: "photo/71JU-bUt-sL._AC_UL480_FMwebp_QL65_.webp",
    price: 400,
    cat: "Luxury",
  },
  {
    id: 4,
    name: "Men'sport",
    img: "photo/51Nk5SEBARL._AC_UY741_.jpg",
    price: 298,
    cat: "Sport",
  },
  {
    id: 5,
    name: " Woman's dress",
    img: "photo/images (1).jpg",
    price: 76,
    cat: "Dress",
  },
];
const productsConatiner = document.querySelector(".products");
const searchInput = document.querySelector(".search");
const categoriesConatiner = document.querySelector(".cats");
const priceRange = document.querySelector(".priceRange");
const priceValue = document.querySelector(".priceValue");
const displayProducts = (filteredProducts) => {
  productsConatiner.innerHTML = filteredProducts
    .map(
      (product) =>
        ` <div class="prodect">
                <img src='${product.img}' alt=""/>
                <span class="name">${product.name}</span>
                <span class="price">$${product.price}</span>

            </div>`
    )
    .join("");
};
displayProducts(data);

searchInput.addEventListener("keyup", (e) => {
  const value = e.target.value.toLowerCase();
  if (value) {
    displayProducts(
      data.filter((item) => item.name.toLowerCase().indexOf(value) !== -1)
    );
  } else {
    displayProducts(data);
  }
});
const setCategories = () => {
  const allCasts = data.map((item) => item.cat);

  const categories = [
    "All",
    ...allCasts.filter((item, i) => {
      return allCasts.indexOf(item) === i;
    }),
  ];
  categoriesConatiner.innerHTML = categories
    .map(
      (cat) =>
        `
        <span class="cat">${cat}</span>
        `
    )
    .join("");
  categoriesConatiner.addEventListener("click", (e) => {
    const selectedCat = e.target.textContent;

    selectedCat === "All"
      ? displayProducts(data)
      : displayProducts(data.filter((item) => item.cat === selectedCat));
  });
};
const setPrices = () => {
  const priceList = data.map((item) => item.price);
  const minPrice = Math.min(...priceList);
  const maxPrice = Math.max(...priceList);
  priceRange.min = minPrice;
  priceRange.max = maxPrice;
  priceRange.value = maxPrice;
  priceValue.textContent = "$" + maxPrice;
  priceRange.addEventListener("input", (e) => {
    priceValue.textContent = "$" + e.target.value;
    displayProducts(data.filter(item=>item.price<=e.target.value));
  });
};
setPrices();
setCategories();
