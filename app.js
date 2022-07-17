const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")

menuItems.forEach((item, index)=>{
    item.addEventListener("click", () => {
        wrapper.style.transform =`translateX(${-100 * index}vw)`;  //to slide our slider by 100vw to the next slider
    });
});