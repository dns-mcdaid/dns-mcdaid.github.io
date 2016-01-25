$(document).ready(function() {
  var listener = new window.keypress.Listener();
  var hTags = ["h1", "h2", "h3", "h4", "h5", "h6"];

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
  	var container = document.getElementById("container");
    var header = document.getElementById("header");
    var icons = document.getElementsByTagName("i");

    container.style.backgroundColor = "#b48925";
    container.style.color = "#ff0080";
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

    document.getElementsByTagName("h1")[0].innerHTML = "OH SNAP YOU FOUND IT."
  });
});
