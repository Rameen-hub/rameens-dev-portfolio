const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close")

/*=============== SHOW MENU ===============*/
/*=============== validate if constant exists ===============*/
if(navToggle)
{
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu")
    })
}

/*=============== MENU HIDDEN ===============*/
/*=============== validate if constant exists ===============*/
if(navClose)
{
  navClose.addEventListener("click", () => {
      navMenu.classList.remove("show-menu")
  })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll(".nav-link")

function linkAction()
{
  const navMenu = document.getElementById("nav-menu")
  //when we click on each new link, we remove the show-menu class
  navMenu.classList.remove("show-menu")
}
navLinks.forEach(n => n.addEventListener("click", linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader()
{
  const header = document.getElementById("header")
  //when the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
  if(this.scrollY >= 80) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header")
}
window.addEventListener("scroll", scrollHeader)

/*=============== Testimonial Swiper ===============*/
var swiper = new Swiper(".testimonial-wrapper", 
  {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

  //get all sections that have an id defined
  const sections = document.querySelectorAll("section[id]");

  //add an event listener listening for scroll
  window.addEventListener("scroll", navHighlighter);

  function navHighlighter() 
  {
    //get the current scroll position
    let scrollY = window.pageYOffset;
    //loop through sections to get height. top. and ID values for each
    sections.forEach(current => 
    {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");

      //if the current scroll position enters the space where the current section is, add the active class to the corresponding nav link else remove it.
      //To know which link needs an active class, we use sectionid variable we are getting while looping through the sections as a selector
      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
      {
        document.querySelector(".nav-menu a[href*=" + sectionId + "]").classList.add("active-link");
      }
      else
      {
        document.querySelector(".nav-menu a[href*=" + sectionId + "]").classList.remove("active-link");
      }

    })
  }

  /*=============== PORTFOLIO ITEM FILTER ===============*/
  const filterContainer = document.querySelector(".portfolio-filter-inner"),
        filterBtns = filterContainer.children;
        totalFilterBtn = filterBtns.length;
        portfolioitems = document.querySelectorAll(".portfolio-item"),
        totalPortfolioItem = portfolioitems.length;

        for(let i = 0; i < totalFilterBtn; i++)
        {
          filterBtns[i].addEventListener("click", function() 
          {
            filterContainer.querySelector(".active").classList.remove("active");
            this.classList.add("active");

            const filterValue = this.getAttribute("data-filter");
            for(let k = 0; k < totalPortfolioItem; k++)
            {
              if(filterValue === portfolioitems[k].getAttribute("data-category"))
              {
                portfolioitems[k].classList.remove("hide");
                portfolioitems[k].classList.add("show");
              }
              else
              {
                portfolioitems[k].classList.add("hide");
                portfolioitems[k].classList.remove("show");
              }
              if(filterValue === "all")
              {
                portfolioitems[k].classList.remove("hide");
                portfolioitems[k].classList.add("show");
            }
          }
          })
        }

  /*=============== PROJECT SLIDER ===============*/
  var ProjectSlider = new Swiper('.project-slider', 
  {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: 
    {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    pagination: 
    {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: 
    {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  /*=============== THEME/DISPLAY CUSTOMIZATION ===============*/
  const theme = document.querySelector("#theme-button");
  const themeModal = document.querySelector(".customize-theme");
  const fontSizes = document.querySelectorAll(".choose-size span");
  const ColorPalette = document.querySelectorAll(".choose-color span");
  var root = document.querySelector(":root");
  const Bg1 = document.querySelector(".bg-1");
  const Bg2 = document.querySelector(".bg-2");
  const Bg3 = document.querySelector(".bg-3");

  //open modal
  const openThemeModal = () => 
  {
    themeModal.style.display = "grid";
  }
  //close modal
  const closeThemeModal = (e) => 
  {
    if(e.target.classList.contains('customize-theme'))
    {
      themeModal.style.display = "none";
    }
  }
  theme.addEventListener("click", openThemeModal);
  themeModal.addEventListener("click", closeThemeModal);

  /*=============== FONTS ===============*/
  
  //remove active class from spans or font size selectors
  const removeSizeSelector = () => 
  {
    fontSizes.forEach(size => 
    {
      size.classList.remove("active");
    })

  }
  fontSizes.forEach(size => 
  {
    size.addEventListener("click", () => 
    {
      removeSizeSelector();
      let fontSize;
      size.classList.toggle("active");
      if(size.classList.contains("font-size-1"))
      {
        fontSize = "12px";
      }
      else if(size.classList.contains("font-size-2"))
      {
        fontSize = "14px";
      }
      else if(size.classList.contains("font-size-3"))
      {
        fontSize = "16px";
      }
      else if(size.classList.contains("font-size-4"))
      {
        fontSize = "18px";
      }
      //change font size of the root html element
      document.querySelector("html").style.fontSize = fontSize;
    });
});

/*=============== PRIMARY COLORS ===============*/

//remove active class from colors
const changeActiveColorClass = () => 
{
  ColorPalette.forEach(colorPicker => 
  {
    colorPicker.classList.remove("active");
  });
}
ColorPalette.forEach(color => 
{
  color.addEventListener("click", () => 
  {
    let primaryHue;
    changeActiveColorClass();
    
    if(color.classList.contains("color-1"))
    {
      primaryHue = "252";
    }
    else if(color.classList.contains("color-2"))
    {
      primaryHue = "52";
    }
    else if(color.classList.contains("color-3"))
    {
      primaryHue = "352";
    }
    else if(color.classList.contains("color-4"))
    {
      primaryHue = "152";
    }
    else if(color.classList.contains("color-5"))
    {
      primaryHue = "202";
    }
    color.classList.add("active");
    root.style.setProperty("--primary-color-hue", primaryHue);
    
  });

  /*=============== THEME BACKGROUNDS  ===============*/
  let lightColorLightness;
  let whiteColorLightness;
  let darkColorLightness;

  //change background color
  const changeBG = () => 
  {
    root.style.setProperty("--light-color-lightness", lightColorLightness);
    root.style.setProperty("--white-color-lightness", whiteColorLightness);
    root.style.setProperty("--dark-color-lightness", darkColorLightness);
  }
  Bg1.addEventListener("click", () => 
  {
    darkColorLightness = "17%";
    whiteColorLightness = "100%";
    lightColorLightness = "92%";
    //add active class
    Bg1.classList.add("active");
    //remove active class
    Bg2.classList.remove("active");
    Bg3.classList.remove("active");

  })
  Bg2.addEventListener("click", () => 
  {
    darkColorLightness = "95%";
    whiteColorLightness = "20%";
    lightColorLightness = "15%";

    //add active class
    Bg2.classList.add("active");
    //remove active class
    Bg1.classList.remove("active");
    Bg3.classList.remove("active");
    changeBG();
    //remove customized changes from local storage
    window.location.reload();
  })
  Bg3.addEventListener("click", () => 
    {
      darkColorLightness = "95%";
      whiteColorLightness = "10%";
      lightColorLightness = "0%";
  
      //add active class
      Bg3.classList.add("active");
      //remove active class
      Bg2.classList.remove("active");
      Bg1.classList.remove("active");
      changeBG();
    })
// Set Bg2 as the default background
document.addEventListener("DOMContentLoaded", () => {
  darkColorLightness = "95%";
  whiteColorLightness = "20%";
  lightColorLightness = "15%";

  // Add active class to Bg2
  Bg2.classList.add("active");
  // Remove active class from Bg1 and Bg3
  Bg1.classList.remove("active");
  Bg3.classList.remove("active");
  changeBG();
});
  
})