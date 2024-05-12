  var starClicked = false;

  $(function() {

    $('.star').click(function() {

      $(this).children('.selected').addClass('is-animated');
      $(this).children('.selected').addClass('pulse');

      var target = this;

      setTimeout(function() {
        $(target).children('.selected').removeClass('is-animated');
        $(target).children('.selected').removeClass('pulse');
      }, 1000);

      starClicked = true;
    })

    $('.half').click(function() {
      if (starClicked == true) {
        setHalfStarState(this)
      }
      $(this).closest('.rating').find('.js-score').text($(this).data('value'));

      $(this).closest('.rating').data('vote', $(this).data('value'));
      calculateAverage()
      console.log(parseInt($(this).data('value')));

    })

    $('.full').click(function() {
      if (starClicked == true) {
        setFullStarState(this)
      }
      $(this).closest('.rating').find('.js-score').text($(this).data('value'));

      $(this).find('js-average').text(parseInt($(this).data('value')));

      $(this).closest('.rating').data('vote', $(this).data('value'));
      calculateAverage()

      console.log(parseInt($(this).data('value')));
    })

    $('.half').hover(function() {
      if (starClicked == false) {
        setHalfStarState(this)
      }

    })

    $('.full').hover(function() {
      if (starClicked == false) {
        setFullStarState(this)
      }
    })

  })

  function updateStarState(target) {
    $(target).parent().prevAll().addClass('animate');
    $(target).parent().prevAll().children().addClass('star-colour');

    $(target).parent().nextAll().removeClass('animate');
    $(target).parent().nextAll().children().removeClass('star-colour');
  }

  function setHalfStarState(target) {
    $(target).addClass('star-colour');
    $(target).siblings('.full').removeClass('star-colour');
    updateStarState(target)
  }

  function setFullStarState(target) {
    $(target).addClass('star-colour');
    $(target).parent().addClass('animate');
    $(target).siblings('.half').addClass('star-colour');

    updateStarState(target)
  }

  function calculateAverage() {
    var average = 0

    $('.rating').each(function() {
      average += $(this).data('vote')
    })

    $('.js-average').text((average/ $('.rating').length).toFixed(1))
  }

  $(document).ready(function() {
    // Use bootstrapSlider instead of slider to avoid conflicts
    $('#ticket').bootstrapSlider({
        formatter: function(value) {
            return 'Max price: ' + value;
        }
    });
});

  
const eventsData = {
  fav1: {
      id: "fav1",
      title: "Dance of the Needle: Learn Chikankari Embroidery",
      imageSrc: "images/event1 (8).png",
      venue: "Venue details here",
      date: "Date and time details here",
      contact: "Contact details here",
        },
  fav2: {
      id: "fav2",
      title: "London Lights & Chikankari Stitches",
      imageSrc: "images/event1 (2).png",
      venue: "Venue details here",
      date: "Date and time details here",
      contact: "Contact details here",
      
  },
  fav3: {
    id: "fav3",
    title: "The Art of White: A Chikankari Workshop",
    imageSrc: "images/event1 (9).png",
    venue: "Venue details here",
    date: "Date and time details here",
    contact: "Contact details here",
    
},
  fav4: {
    id: "fav4",
    title: "Unveiling Lucknow's Hidden Treasure: Chikankari Workshop",
    imageSrc: "images/event1 (7).png",
    venue: "Venue details here",
    date: "Date and time details here",
    contact: "Contact details here",
    
  },
  fav5: {
    id: "fav5",
    title: "Chikankari for Fashion Lovers",
    imageSrc: "images/s9.png",
    venue: "Venue details here",
    date: "Date and time details here",
    contact: "Contact details here",
    
  }, 
  fav6: {
    id: "fav6",
    title: "From Loom to Luxury: Mastering Chikankari",
    imageSrc: "images/s8.png",
    venue: "Venue details here",
    date: "Date and time details here",
    contact: "Contact details here",
    
},
};

$(document).ready(function() {
    var eventTitles = [];
    $.each(eventsData, function(key, value) {
        eventTitles.push(value.title);
    });

    $('#searchInput').autocomplete({
        source: eventTitles,
        select: function(event, ui) {
            // Optionally do something when an item is selected
            console.log("Selected: " + ui.item.value);
        }
    });
});


//updates color of the favoruites star
function updateStarVisuals() {
  const favourites = JSON.parse(localStorage.getItem('favourites')) || [];
  $('.star-checkbox').each(function() {
      const itemId = $(this).attr('id');
      if (favourites.includes(itemId)) {
          $(this).prop('checked', true);
          $(this).next('.star').css('color', 'yellow'); 
      } else {
          $(this).prop('checked', false);
          $(this).next('.star').css('color', 'white'); 
      }
  });
}
$(document).ready(function() {
  updateStarVisuals(); // Update stars when the page loads

  // Bind click event to update favorites
  $(document).on('change', '.star-checkbox', function() {
      const itemId = $(this).attr('id');
      const isFavourited = $(this).is(':checked');
      handleFavouriteChange(itemId, isFavourited);
      updateStarVisuals(); // Update visuals after state change
  });

  });

function handleFavouriteChange(itemId, isFavourited) {
  let favourites = JSON.parse(localStorage.getItem('favourites')) || [];
  if (isFavourited) {
      if (!favourites.includes(itemId)) {
          favourites.push(itemId);
      }
  } else {
      const index = favourites.indexOf(itemId);
      if (index > -1) {
          favourites.splice(index, 1);
      }
  }
  localStorage.setItem('favourites', JSON.stringify(favourites));
  updateStarVisuals(); // Update star visual status
}

$(document).ready(function() {
  $('.star-checkbox').change(function() {
      const itemId = $(this).attr('id');
      const isFavourited = $(this).is(':checked');
      handleFavouriteChange(itemId, isFavourited);
      if (isFavourited) {
          showToast('Added to Favourite');
      } else {
          showToast('Removed from Favourite');
      }
  });

  // Initial loading of favourites
  loadFavourites();
});


function loadFavourites() {
  const container = document.getElementById('favourites-container');
  container.innerHTML = ''; // Clear existing content
  const favourites = JSON.parse(localStorage.getItem('favourites')) || [];

  if (favourites.length === 0) {
    container.innerHTML = '<div class="alert alert-info" role="alert">YOU DON\'T HAVE ANY EVENTS FAVOURITED (YET)</div>';
  } else {
    favourites.forEach(favId => {
      const eventData = eventsData[favId];
      if (eventData) {
        const cardHtml = createCardHtml(eventData);
        container.innerHTML += cardHtml;
      }
    });
  }
}



function createCardHtml(data) {
  return `
      <div class="col-md-4 mb-4"> <!-- Use col-md-4 to fit 3 cards in a row -->
          <div class="card" style="width: 100%;">
              <div class="card-img-overlay d-flex justify-content-end">
                  <button class="btn btn-danger remove-fav" data-id="${data.id}" style="position: absolute; top: 10px; right: 10px;">&times;</button>
              </div>
              <img src="${data.imageSrc}" class="card-img-top" alt="Card Image">
              <div class="card-body">
                  <h5 class="card-title">${data.title}</h5>
                  <p class="card-text">Venue: ${data.venue}<br>Date and Time: ${data.date}<br>Contact Details: ${data.contact}</p>
              </div>
          </div>
      </div>
  `;
}


$(document).on('click', '.remove-fav', function() {
  const itemId = $(this).data('id');
  handleFavouriteChange(itemId, false);  // Update the localStorage
  $(this).closest('.card').remove();    // Remove the card from the DOM
});

$(document).ready(function() {
  $('.toast').toast({autohide: true,delay: 1000}); // Initialize the toast with autohide after 1000ms
});

function showToast(message) {
  $('.toast-body').text(message);
  $('.toast').toast('show');
}

