



// function roundOff(num, ndigits) {
//      return  num.toFixed(ndigits) ;  
// };



// console.log(roundOff(0.778899,2));

// function calculateSum(num1, num2) {

//     for(let i=num1; i< num2+1;i++ ){
//      let result=i;
//     //  let list=[result];
//     // //  list.push(result)
//     //  console.log(list)
//      console.log(result);
//     };
    
// } 

// console.log(calculateSum(10,15));

let header=document.querySelector('.header');
addEventListener("scroll",()=>{
     header.classList.toggle('shadow',window.scrollY > 0 );
});



let headerMenuToggle=document.querySelector(".header_menus-toggle");
let headerMenuss=document.querySelector(".header_menus ");


headerMenuToggle.addEventListener("click",()=>{
     headerMenuss.classList.toggle('active');
});


window.onscroll=()=>{
    headerMenuss.classList.remove('active');
};


 ScrollReveal(
    { reset: true,
        delay:300,
        distance:"60px",
        duration:1500,

     }
);

// components
ScrollReveal().reveal('.section-title');
ScrollReveal().reveal('.section-des',{
     delay:300,
     duration:2000
});




// section Home
ScrollReveal().reveal('.section-home_title');
ScrollReveal().reveal('.section-home-image',{
    origin:"right"
});

ScrollReveal().reveal('.section-home-buttons',{
     delay:600
});

// ScrollReveal().reveal('.section-home_title',{
//     origin:"left"
// });


// section Menus
ScrollReveal().reveal('.section-menus_card',{
     interval:300,
});

// section About
ScrollReveal().reveal('.section-about_image"',{
     delay:900,
     origin:"left"
});


ScrollReveal().reveal('.section-about_stat',{
     delay:1200,
     interval:300
});

ScrollReveal().reveal(".section-about  .primary-button",{
       duration:3000,
       delay:1200
});


// section services

ScrollReveal().reveal(".section-servecs_card",{
     delay:1200,
     interval:300
});

// section contct

ScrollReveal().reveal(".section-contact-item",{
     delay:1200,
     interval:300
})

ScrollReveal().reveal('.section-contact__from',{
     delay:1800,
     duration:3000
})