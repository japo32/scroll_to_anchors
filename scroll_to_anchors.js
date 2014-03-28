/*******

  *** Anchor Slider by Cedric Dugas   ***
  *** Http://www.position-absolute.com ***

  Never have an anchor jumping your content, slide it.

  Don't forget to put an id to your anchor !
  You can use and modify this script for any project you want, but please leave this comment as credit.


  *** modified by Adrian Domingo   ***

  modified into a drupal behavior. also added functionality to accept full url links.


*****/


(function($) {
Drupal.behaviors.scrolltoanchors = {
  attach: function(context, settings) {
    $(document).ready(function() {
      $("body.front a.anchorLink").anchorAnimate();
    });
  }
};
}(jQuery));


jQuery.fn.anchorAnimate = function(settings) {

  settings = jQuery.extend({
    speed : 1100
  }, settings);

  return this.each(function(){
    var caller = jQuery(this);
    caller.click(function (event) {
      event.preventDefault()
      var locationHref = window.location.href;
      var link = caller.attr("href");
      var elementClick = link.substr(link.indexOf("#") + 1)

      var destination = jQuery("#"+elementClick).offset().top;
      jQuery("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination}, settings.speed, function() {
        window.location.hash = elementClick;
      });
        return false;
    })
  })
}
