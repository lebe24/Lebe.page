
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
      name:"Space Walk",
      title:"informative planetary app",
      cat:'filter-mobile',
      git:"https://github.com/lebe24/spacewalk",
      link:"https://github.com/lebe24/spacewalk",
      image:"https://media-private.canva.com/x5W9k/MAFQRSx5W9k/1/tl.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20221027%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20221027T174746Z&X-Amz-Expires=29066&X-Amz-Signature=5752f84cb560f246460daf9ee1233d4be8b6297edf05b79ff58c3fc9c5106d83&X-Amz-SignedHeaders=host&response-expires=Fri%2C%2028%20Oct%202022%2001%3A52%3A12%20GMT"
  },
  {
      name:"MusicJam",
      title:"A minialistic music app built with react",
      cat:'filter-web',
      git:"https://github.com/lebe24/Musicjam",
      link:"https://e085xz-3000.preview.csb.app/",
      image:"https://media-private.canva.com/rNpVA/MAFQRVrNpVA/1/tl.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20221027%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20221027T125811Z&X-Amz-Expires=46824&X-Amz-Signature=e879018f3a32d912ef3270a27853ac883afb2569bcaea56701186f1dae5abfea&X-Amz-SignedHeaders=host&response-expires=Fri%2C%2028%20Oct%202022%2001%3A58%3A35%20GMT"
  },
  {
      name:"EasyNews",
      title:"A one stop to all news feeds(still underdevelopment)",
      cat:'filter-web',
      git:"https://github.com/lebe24/EasyNews",
      link:"https://github.com/lebe24/EasyNews",
      image:"https://media-private.canva.com/uoi5s/MAFQRauoi5s/1/tl.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20221027%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20221027T010831Z&X-Amz-Expires=89620&X-Amz-Signature=ce69698032b12cd90a5a97f11b1eaf643d3e49fdc3a40153cae02756aea9a081&X-Amz-SignedHeaders=host&response-expires=Fri%2C%2028%20Oct%202022%2002%3A02%3A11%20GMT"
  },
  {
      name:"CryptoLyf",
      title:"A simple cryto coins marker price checker",
      cat:'filter-mobile',
      git:"https://github.com/lebe24/CryptoLyf",
      link:"https://github.com/lebe24/CryptoLyf",
      image:"https://media-private.canva.com/H32JE/MAFQRAH32JE/1/tl.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20221027%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20221027T081031Z&X-Amz-Expires=62764&X-Amz-Signature=027cb578d9ce028d0af5076dbf47bd00a2a0cbaf059c9e82a59602b4b411ea15&X-Amz-SignedHeaders=host&response-expires=Fri%2C%2028%20Oct%202022%2001%3A36%3A35%20GMT" 
  },
  {
      name:"Uniswapclone",
      title:"web 3",
      cat:'filter-web',
      git:"https://github.com/lebe24/uniswap-clone-main",
      link:"https://kzswj8.sse.codesandbox.io/",
      image:"https://media-private.canva.com/jCiA0/MAFQRWjCiA0/1/tl.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20221026%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20221026T231927Z&X-Amz-Expires=96480&X-Amz-Signature=e3cfef0a5951fd46fe03fba16d803ed0f9a3599e483582f7c03140fa1df8025f&X-Amz-SignedHeaders=host&response-expires=Fri%2C%2028%20Oct%202022%2002%3A07%3A27%20GMT" 
  },
   {
      name:"Confident Girl",
      title:"Design ui built with react and rive animation",
      cat:'filter-web',
      git:"https://github.com/lebe24/confident-girl",
      link:"https://qpn18p-5173.preview.csb.app/",
      image:"./assets/img/portfolio/confident.gif" 
  },
{
    name:"fitness Guide",
    cat:'filter-web',
    title:"fitness app design using nextui by vercel",
    git:"https://github.com/lebe24/nextui",
    link:"https://nextui-byy.pages.dev/",
    image:"https://media-private.canva.com/9inM4/MAFQRc9inM4/1/tl.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20221027%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20221027T092552Z&X-Amz-Expires=59896&X-Amz-Signature=8f7ee9ae6507b399f3778a45fb325afac3a321254c0bee12927e657e65d4d328&X-Amz-SignedHeaders=host&response-expires=Fri%2C%2028%20Oct%202022%2002%3A04%3A08%20GMT"
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
      image:"./assets/img/portfolio/flutter-iot.gif"
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
  image: "https://media-private.canva.com/qHTYE/MAFQRJqHTYE/1/tl.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20221026%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20221026T225944Z&X-Amz-Expires=95484&X-Amz-Signature=8ca2501ed56ad123da3b91c194d5438b9f27e9bb89589cdbdf3a8caa67ba5f0a&X-Amz-SignedHeaders=host&response-expires=Fri%2C%2028%20Oct%202022%2001%3A31%3A08%20GMT"
},
{
  name:"Movie App",
  title:"movie app using react",
  cat:'filter-web',
  git:"https://codesandbox.io/s/1pd0zc",
  image:"https://media-private.canva.com/ClHVE/MAFQRMClHVE/1/tl.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20221027%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20221027T005300Z&X-Amz-Expires=87698&X-Amz-Signature=947adc7db82f4ec665b989a9b82185720c9ca652da205719b81f9ce2004d8438&X-Amz-SignedHeaders=host&response-expires=Fri%2C%2028%20Oct%202022%2001%3A14%3A38%20GMT",
  link:"https://1pd0zc.csb.app/",

},
{
  name: "Happy new year UI",
  title: "countdown",
  cat:'filter-web',
  git:'https://codesandbox.io/s/sy0d0x?file=/index.html',
  link: "https://sy0d0x.csb.app/",
  image: "https://media-private.canva.com/AWrL8/MAFQRHAWrL8/1/tl.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20221027%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20221027T035013Z&X-Amz-Expires=77016&X-Amz-Signature=67f137412db6d814f4872b49f686bb404a85cdb3e4275354e31e06985c77a419&X-Amz-SignedHeaders=host&response-expires=Fri%2C%2028%20Oct%202022%2001%3A13%3A49%20GMT"
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
    image: "https://media-private.canva.com/8b2ug/MAFQRE8b2ug/1/tl.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20221027%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20221027T165352Z&X-Amz-Expires=30977&X-Amz-Signature=13555ce776d54c7909efedb79d349dc4d53d7f77da843921d29ca9c063cd5ed1&X-Amz-SignedHeaders=host&response-expires=Fri%2C%2028%20Oct%202022%2001%3A30%3A09%20GMT"
},
{
    name: "Fandom  UI",
    cat:'filter-web',
    git:'https://codesandbox.io/s/iwevks',
    title: "Demo for fangame Ui Design",
    link: "https://iwevks.csb.app/",
    image: "https://media-private.canva.com/6i9Cg/MAFQRI6i9Cg/1/tl.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20221027%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20221027T122916Z&X-Amz-Expires=46786&X-Amz-Signature=03ebdc428e8d7e2f0ba4deace462f6b32c168b530741275f0c3806a401efc9cb&X-Amz-SignedHeaders=host&response-expires=Fri%2C%2028%20Oct%202022%2001%3A29%3A02%20GMT"
}
]

// 

Project.map((x)=>{
  document.getElementById('container').innerHTML += `

      <div class="col-lg-4 col-md-6 portfolio-item ${x.cat}">
          <div class="portfolio-wrap">
            <img src="${x.image}" class="img-fluid" alt="">
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

