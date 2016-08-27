// leadpages_input_data variables come from the template.json "variables" section
var leadpages_input_data = {};

$(function () {
    var social = $('#social');

    social.affix({
        offset: {
            top: function () {
                return (this.top = (social.offset().top - 20))
            }
        }
    });

    $('#banner-arrow').smoothScroll();
});
/* Scroll to top */
    $(window).scroll(function() {
      var $toTop = $('#totop');
      if ($(this).scrollTop() > 100) {
        $toTop.fadeIn();
      } else {
        $toTop.fadeOut();
      }
    });

    $("a[href='#totop']").click(function() {
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
    });