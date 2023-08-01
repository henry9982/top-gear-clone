const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('showR');
        } else {
            entry.target.classList.remove('showR');
        }
    });
});

const hiddenElements = document.querySelectorAll(".hiddenR");
hiddenElements.forEach(ele => {
    observer.observe(ele);
});

const observerL = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('showL');
        } else {
            entry.target.classList.remove('showL');
        }
    });
});

const hiddenElementsL = document.querySelectorAll(".hiddenL");
hiddenElementsL.forEach(ele => {
    observerL.observe(ele);
});

const observerT = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('showT');
        } else {
            entry.target.classList.remove('showT');
        }
    });
});

const hiddenElementsT = document.querySelectorAll(".hiddenT");
hiddenElementsT.forEach(ele => {
    observerT.observe(ele);
});

// mouse hover images swiper
const swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
        reverseDirection: false,


    },
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  

  });

  const menuBtnTag = document.querySelectorAll('.menu-btn')
menuBtnTag.forEach(ele=>{
    ele.addEventListener('mousemove',(event)=>{
        let x = event.pageX - event.target.offsetLeft
        let y = event.pageY - event.target.offsetTop
        console.log(x)

        ele.style.setProperty('--x',x+'px')
        ele.style.setProperty('--y',y+'px')

    })
})
