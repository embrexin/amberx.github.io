const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -250px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});


/*
$(window).scroll(function () {

  $('.show').each(function (i) {

      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if (bottom_of_window >= bottom_of_object) {

          $(this).animate({
              'opacity': '1'
          }, 500);

       }
   });
});*/

document.getElementById('yes').onclick = function() {
  window.location.href = "./anaktgarden.html";
}

document.getElementById('no').onclick = function() {
  window.location.href = "./index.html";
}
 