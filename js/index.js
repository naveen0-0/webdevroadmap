const navSlide = () => {
   const burger = document.querySelector('.hamburger');
   const nav = document.querySelector('.nav');
   burger.addEventListener("click",function(){
      nav.classList.toggle('non-active');
      burger.classList.toggle('toggle')
   })
}

navSlide();