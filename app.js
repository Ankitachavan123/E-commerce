const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")

const products = [
{
    id: 1,
    title: "Air Force",
    price : 119,
    colors : [
        {
            code: "black",
            img: "img/air.png",
        },
        {
            code: "darkblue",
            img: "img/air2.png",
        },
    ],
},
{
    id: 2,
    title: "Air Jordan",
    price : 119,
    colors : [
        {
            code: "gray",
            img: "img/jordan.png",
        },
        {
            code: "green",
            img: "img/jordan2.png",
        },
    ],
},
{
    id: 3,
    title: "Blazer",
    price : 119,
    colors : [
        {
            code: "gray",
            img: "img/blazer.png",
        },
        {
            code: "green",
            img: "img/blazer2.png",
        },
    ],
},
{
    id: 4,
    title: "Crater",
    price : 119,
    colors : [
        {
            code: "black",
            img: "img/crater.png",
        },
        {
            code: "gray",
            img: "img/crater2.png",
        },
    ],
},
{
    id: 5,
    title: "Hippie",
    price : 119,
    colors : [
        {
            code: "gray",
            img: "img/hippie.png",
        },
        {
            code: "black",
            img: "img/hippie2.png",
        },
    ],
},
]

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".Size");


menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        //change the current slide
        wrapper.style.transform =`translateX(${-100 * index}vw)`;  //to slide our slider by 100vw to the next slider
    
        //change the choosen product
        choosenProduct = products[index];

        //change texts of currentProduct
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "$" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;

        //assign new colors
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});

currentProductColors.forEach((color,index)=>{
    color.addEventListener("click", ()=>{
        currentProductImg.src = choosenProduct.colors[index].img
    })
})