$(document).ready(function() {
  var listener = new window.keypress.Listener();
  var hTags = ["h1", "h2", "h3", "h4", "h5", "h6"];
  var altImg = [
    "skeleton-animated-gif-3.gif",
    "kid-dancing.gif",
    "goldblum.jpg",
    "trump.jpg"
  ];
  var mud = "#b48925";
  var hotterPink = "#ff0080";

  function filterPath(string) {
    return string
      .replace(/^\//,'')
      .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
      .replace(/\/$/,'');
  }

  // jQuery smooth scrolling shamelessly ripped off from Karl Swedberg:
  // http://www.learningjquery.com/2007/10/improved-animated-scrolling-script-for-same-page-links
  $('a[href*=\\#]').each(function() {
    if ( filterPath(location.pathname) == filterPath(this.pathname)
    && location.hostname == this.hostname
    && this.hash.replace(/#/,'') ) {
      var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
      var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
       if ($target) {
         var targetOffset = $target.offset().top - 100;
         $(this).click(function() {
           $('html, body').animate({scrollTop: targetOffset}, 400);
           return false;
         });
      }
    }
  });

  // Using keypress.js
  listener.sequence_combo("up up down down left right left right b a enter", function() {
  	var main = document.getElementById("main");
    var icons = document.getElementsByTagName("i");
    var footer = document.getElementsByClassName("footer");
    var description = document.getElementsByClassName("site-description");

    main.style.backgroundColor = mud;
    document.getElementsByTagName("body")[0].style.backgroundColor = mud;
    footer[0].style.backgroundColor = mud;

    main.style.color = hotterPink;
    description[0].style.color = "green";
    description[0].innerHTML = "I had way too much time on my hands.";

    document.body.style.fontFamily = "Papyrus, fantasy";

    for(var i = 0; i < hTags.length; i++){
      var gotTags = document.getElementsByTagName(hTags[i]);
      for(var j = 0; j < gotTags.length; j++){
        gotTags[j].style.color = "#ffff00"
      }
    }

    for(var i = 0; i < icons.length; i++){
      icons[i].style.color = "green";
    }

    var img = new Image();
    document.getElementsByTagName("h1")[0].innerHTML = "OH SNAP YOU FOUND IT."
    document.getElementsByTagName("h2")[1].innerHTML = "2sp00ky";
    var images = document.getElementsByTagName("img");

    for(var i = 0; i < altImg.length; i++){
      images[i].src = "images/" + altImg[i];
    }
  });
});
