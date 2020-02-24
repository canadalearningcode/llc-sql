jQuery(document).ready(function(){
  // adpated from the deprecated slideshow.js
  var _ = window.SlideShow = function() {
    var me = this;

    // Set instance
    if(!window.slideshow) {
      window.slideshow = this;
    }
  }

  _.getSlide = function(element) {
    return element.closest(".slide");
  }

  var slideshow = new SlideShow();

  var snippets = document.querySelectorAll('.snippet');
  for(var i=0; i<snippets.length; i++) {
    new CSSSnippet(snippets[i]);
  }

  var cssControls = document.querySelectorAll('.css-control');
  for(var i=0; i<cssControls.length; i++) {
    new CSSControl(cssControls[i]);
  }

  // Adds "edit me" note to editable code areas
  jQuery(".snippet").before("<span class=\"edit\">edit me</span>");
  
  // Add class to resource section
  jQuery( "h3:contains('Resources'), h3:contains('Resource'), h3:contains('Pro tip!')" ).addClass("resources");
  
  // Generate the Table of Contents
  var ToC = "<ul>";
  var newLine, el, title, link;

  jQuery("[data-toc] > h1").each(function() {
    el = jQuery(this);
    title = el.text();
    link = "#" + title.trim().replace(/\s+/g, "-").toLowerCase();

    newLine =
      "<li>" +
        "<a href='" + link + "'>" +
          title +
        "</a>" +
      "</li>";

    ToC += newLine;
  });
  ToC +="</ul>";
  jQuery(".table-of-contents").append(ToC);
  
});
