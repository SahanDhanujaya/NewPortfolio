document.getElementById("scrollbutton").addEventListener("click",()=>{
    document.getElementById("welcome").style.display="none";
});
//  let ar = ["assets/imgs/401069105_860626685533720_1764739307085247302_n.jpg","assets/imgs/432277000_925106579085730_5372217276935642645_n.jpg"];
//  setInterval(function (){
//     let last_img = ar.pop();
//     ar.unshift(last_img);
//     document.querySelector("#education>section>img").src = ar[0];
//  } ,3000);
const initSlider = ()=>{
    const list = document.querySelector('#assignment>#wrapper>.list');
    const sliderButton = document.querySelectorAll('#assignment>#wrapper>.btn');
    const maxScrollLeft = list.scrollWidth - list.clientWidth;
    sliderButton.forEach(button =>{
        button.addEventListener('click',()=>{
            if(button.id === "prevSlide"){
                const scrollAmount = list.clientWidth * -1;
                list.scrollBy({left: scrollAmount,behavior:"smooth"});
            } else if(button.id === "nextSlide"){
                const scrollAmount = list.clientWidth * 1;
                list.scrollBy({left: scrollAmount,behavior:"smooth"});
            }
           
            
        });
    });
    const handleSlideButtons = ()=> {
        sliderButton[0].style.display = list.scrollLeft <= 0 ? "none" : "block"
        sliderButton[1].style.display = list.scrollLeft >= maxScrollLeft ? "none" : "block"

    }
    list.addEventListener("scroll",()=>{
        // handleSlideButtons();
    });
}
window.addEventListener("load",initSlider);