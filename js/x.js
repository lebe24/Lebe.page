
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    if (all) {
      select(el, all).forEach(e => e.addEventListener(type, listener))
    } else {
      select(el, all).addEventListener(type, listener)
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }


  /**
   * Porfolio isotope and filter
   */

  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        aos_init();
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfokio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  

  /**
   * Animation on scroll
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });

  

})();


const Project = [

{
    name:"Rive Ui",
    title:"informative planetary app",
    cat:'filter-mobile',
    git:"https://github.com/lebe24/riveanime",
    link:" https://github.com/lebe24/riveanime ",
    image:"https://github.com/lebe24/riveanime/blob/master/rive.gif?raw=true"
},
{
    name:"Space Walk",
    title:"informative planetary app",
    cat:'filter-mobile',
    git:"https://github.com/lebe24/spacewalk",
    link:" ",
    image:"https://github.com/lebe24/spacewalk/raw/master/assets/planetapp.png"
},
{
    name:"MusicJam",
    title:"A minialistic music app built with react",
    cat:'filter-web',
    git:"https://github.com/lebe24/Musicjam",
    link:"https://e085xz-3000.preview.csb.app/",
    image:"https://github.com/lebe24/Musicjam/raw/main/musicjam.png"
},
{
    name:"Uniswapclone",
    title:"web 3",
    cat:'filter-web',
    git:"https://github.com/lebe24/uniswap-clone-main",
    link:"https://kzswj8.sse.codesandbox.io/",
    image:"https://github.com/lebe24/uniswap-clone-main/raw/master/uniswap.png" 
},
{
  name:"Crytolyf",
  title:"Cryto price checker for mobile",
  cat:'filter-mobile',
  git:"https://github.com/lebe24/CryptoLyf",
  link:"https://github.com/lebe24/CryptoLyf",
  image:"https://github.com/lebe24/CryptoLyf/raw/master/cryto.png" 
},
{
  name:"fitness Guide",
  cat:'filter-web',
  title:"fitness app design using nextui by vercel",
  git:"https://github.com/lebe24/nextui",
  link:"https://nextui-byy.pages.dev/",
  image:"https://i.ibb.co/jwrhqgq/nextui.png"
},
{
      name:"Confident Girl",
      title:"Design ui built with react and rive animation",
      cat:'filter-web',
      git:"https://github.com/lebe24/confident-girl",
      link:"https://qpn18p-5173.preview.csb.app/",
      image:"https://github.com/lebe24/confident-girl/raw/master/confident.gif" 
  },
  // {
  //      name:"3d Apple Store",
  //      title:"Apple 3d Store Ui design",
  //      git:"https://github.com/lebe24/3d",
  //      link:"https://github.com/lebe24/3d",
  //      image:"assets/img/portfolio/apple.gif"
  //  },
  {
      name:"flutter iot ui",
      cat:'filter-mobile',
      title:"flutter iot design",
      git:"https://github.com/lebe24/flutter-iot-ui",
      link:" ",
      image:"https://github.com/lebe24/flutter-iot-ui/raw/main/flutter-iot.gif"
  },
//   {
//       name:"nextjs portfolio",
//       title:"next portfolio app still in development",
//       git:"https://github.com/lebe24/lebepage-nextjs-portfolio",
//       link:"https://4mebp4.sse.codesandbox.io/",
//       image:"./assets/project-img/nextjspage.png"
//   },
{
  name: "E-Card ",
  title: "A smart E-card Design",
  git:'https://codesandbox.io/s/fq9zcl',
  link: "https://fq9zcl.csb.app/",
  image: "https://i.ibb.co/zXnnXZW/e-card.png"
},
{
  name:"Movie App",
  title:"movie app using react",
  cat:'filter-web',
  git:"https://codesandbox.io/s/1pd0zc",
  image:"https://i.ibb.co/B2fsw9r/movie.png",
  link:"https://1pd0zc.csb.app/",

},
{
  name: "Happy new year UI",
  title: "countdown",
  cat:'filter-web',
  git:'https://codesandbox.io/s/sy0d0x?file=/index.html',
  link: "https://sy0d0x.csb.app/",
  image: "https://i.ibb.co/9ZNRFhF/happy.png"
},
  {
      name: "TicTak UI",
      title: "Playable tictak game",
      link: "https://w7ljme.csb.app/",
      image: "./assets/img/portfolio/tik.png"
  },

  {
    name: "Gotacha",
    cat:'filter-web',
    title: "just click the view",
    link: "https://3h7rmf.csb.app/",
    image: "https://i.ibb.co/3W6m0HD/gotcha-1.png"
},
{
    name: "Fandom  UI",
    cat:'filter-web',
    git:'https://codesandbox.io/s/iwevks',
    title: "Demo for fangame Ui Design",
    link: "https://iwevks.csb.app/",
    image: "https://i.ibb.co/fQvWHHG/mobile2.png"
}
]

// 

Project.map((x)=>{
  document.getElementById('container').innerHTML += `

      <div class="col-lg-4 col-md-6 portfolio-item ${x.cat}">
          <div class="portfolio-wrap">
            <img src="${x.image}" loading="lazy" class="img-fluid" alt="">  
            <div class="portfolio-info">
              <h4>${x.name}</h4>
              <p>${x.title}</p>
              <div class="portfolio-links">
                <a href="${x.git}" data-gallery="portfolioGallery" class="portfokio-lightbox" title="App 1"><i class="bi bi-github"></i></a>
                <a href="${x.link}" title="view site"><i class="bi bi-globe"></i></a>
              </div>
            </div>
          </div>
        </div>
      
  `
})

