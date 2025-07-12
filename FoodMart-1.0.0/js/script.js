(function($) {

  "use strict";

  var initPreloader = function() {
    $(document).ready(function($) {
    var Body = $('body');
        Body.addClass('preloader-site');
    });
    $(window).load(function() {
        $('.preloader-wrapper').fadeOut();
        $('body').removeClass('preloader-site');
    });
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const filterDropdowns = document.querySelectorAll('.filter-dropdown');
    
    filterDropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseenter', function() {
            this.querySelector('.dropdown-content').style.display = 'block';
        });
        
        dropdown.addEventListener('mouseleave', function() {
            this.querySelector('.dropdown-content').style.display = 'none';
        });
    });
});
      
 




  const cardData = [
    {
        name: "Sarah Johnson",
        location: "New York, NY",
        rating: 4.8,
        reviews: 23,
        offers: ["Web Design", "UI/UX", "Figma"],
        wants: ["React", "TypeScript", "Node.js"],
        availability: "Available evenings"
    },
    {
        name: "Dayld Park",
        location: "Seattle, WA",
        rating: 4.6,
        reviews: 15,
        offers: ["IOS Development", "Swift", "Mobile Design"],
        wants: ["Backend Development", "DevOps"],
        availability: "Available evenings"
    },
    {
        name: "Marcus Chen",
        location: "San Francisco, CA",
        rating: 4.9,
        reviews: 31,
        offers: ["Python", "Machine Learning", "Data Science"],
        wants: ["Product Management", "Business Strategy"],
        availability: "Available weekends"
    },
    {
        name: "Lisa Thompson",
        location: "Chicago, IL",
        rating: 4.9,
        reviews: 27,
        offers: ["Digital Marketing", "Google Ads", "Analytics"],
        wants: ["Web Development", "E-commerce"],
        availability: "Available weekends"
    },
    {
        name: "Emma Rodriguez",
        location: "Austin, TX",
        rating: 4.7,
        reviews: 18,
        offers: ["Content Writing", "SEO", "Social Media"],
        wants: ["Graphic Design", "Photography"],
        availability: "Available anytime"
    },
    {
        name: "Alex Kumar",
        location: "Boston, MA",
        rating: 4.8,
        reviews: 20,
        offers: ["Java", "Spring Boot", "Microservices"],
        wants: ["Frontend Development", "React"],
        availability: "Available anytime"
    }
];

function createCard(card) {
    const cardElement = document.createElement('div');
    cardElement.className = 'card';
    
    // Header with name, location, and rating
    const header = document.createElement('div');
    header.className = 'card-header';
    
    const name = document.createElement('h2');
    name.className = 'card-name';
    name.textContent = card.name;
    
    const location = document.createElement('p');
    location.className = 'card-location';
    location.textContent = card.location;
    
    const rating = document.createElement('p');
    rating.className = 'card-rating';
    rating.textContent = `${card.rating} (${card.reviews})`;
    
    header.appendChild(name);
    header.appendChild(location);
    header.appendChild(rating);
    
    // Offers section
    const offersSection = document.createElement('div');
    offersSection.className = 'card-section';
    
    const offersTitle = document.createElement('h3');
    offersTitle.className = 'card-section-title';
    offersTitle.textContent = 'Offers:';
    
    const offersTags = document.createElement('div');
    offersTags.className = 'card-skills';
    
    card.offers.forEach(skill => {
        const tag = document.createElement('span');
        tag.className = 'skill-tag offer-tag';
        tag.textContent = skill;
        offersTags.appendChild(tag);
    });
    
    offersSection.appendChild(offersTitle);
    offersSection.appendChild(offersTags);
    
    // Wants section
    const wantsSection = document.createElement('div');
    wantsSection.className = 'card-section';
    
    const wantsTitle = document.createElement('h3');
    wantsTitle.className = 'card-section-title';
    wantsTitle.textContent = 'Wants:';
    
    const wantsTags = document.createElement('div');
    wantsTags.className = 'card-skills';
    
    card.wants.forEach(skill => {
        const tag = document.createElement('span');
        tag.className = 'skill-tag want-tag';
        tag.textContent = skill;
        wantsTags.appendChild(tag);
    });
    
    wantsSection.appendChild(wantsTitle);
    wantsSection.appendChild(wantsTags);
    
    // Divider
    const divider = document.createElement('div');
    divider.className = 'divider';
    
    // Availability
    const availability = document.createElement('p');
    availability.className = 'card-availability';
    availability.textContent = card.availability;
    
    // Swap button
    const swapButton = document.createElement('button');
    swapButton.className = 'swap-button';
    swapButton.textContent = 'Request Swap';
    swapButton.addEventListener('click', () => {
        //alert(`Swap requested with ${card.name}`);
    });
    
    // Assemble the card
    cardElement.appendChild(header);
    cardElement.appendChild(offersSection);
    cardElement.appendChild(wantsSection);
    cardElement.appendChild(divider);
    cardElement.appendChild(availability);
    cardElement.appendChild(swapButton);
    
    return cardElement;
}

// Generate all cards
const container = document.getElementById('cardsContainer');
cardData.forEach(card => {
    container.appendChild(createCard(card));
});

  // init Chocolat light box
	var initChocolat = function() {
		Chocolat(document.querySelectorAll('.image-link'), {
		  imageSize: 'contain',
		  loop: true,
		})
	}

  var initSwiper = function() {

    var swiper = new Swiper(".main-swiper", {
      speed: 500,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    var category_swiper = new Swiper(".category-carousel", {
      slidesPerView: 6,
      spaceBetween: 30,
      speed: 500,
      navigation: {
        nextEl: ".category-carousel-next",
        prevEl: ".category-carousel-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
        1500: {
          slidesPerView: 6,
        },
      }
    });

    var brand_swiper = new Swiper(".brand-carousel", {
      slidesPerView: 4,
      spaceBetween: 30,
      speed: 500,
      navigation: {
        nextEl: ".brand-carousel-next",
        prevEl: ".brand-carousel-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
        1500: {
          slidesPerView: 4,
        },
      }
    });

    var products_swiper = new Swiper(".products-carousel", {
      slidesPerView: 5,
      spaceBetween: 30,
      speed: 500,
      navigation: {
        nextEl: ".products-carousel-next",
        prevEl: ".products-carousel-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
        1500: {
          slidesPerView: 6,
        },
      }
    });
  }

  var initProductQty = function(){

    $('.product-qty').each(function(){

      var $el_product = $(this);
      var quantity = 0;

      $el_product.find('.quantity-right-plus').click(function(e){
          e.preventDefault();
          var quantity = parseInt($el_product.find('#quantity').val());
          $el_product.find('#quantity').val(quantity + 1);
      });

      $el_product.find('.quantity-left-minus').click(function(e){
          e.preventDefault();
          var quantity = parseInt($el_product.find('#quantity').val());
          if(quantity>0){
            $el_product.find('#quantity').val(quantity - 1);
          }
      });

    });

  }

  // init jarallax parallax
  var initJarallax = function() {
    jarallax(document.querySelectorAll(".jarallax"));

    jarallax(document.querySelectorAll(".jarallax-keep-img"), {
      keepImg: true,
    });
  }

  // document ready
  $(document).ready(function() {
    
    initPreloader();
    initSwiper();
    initProductQty();
    initJarallax();
    initChocolat();

  }); // End of a document

})(jQuery);