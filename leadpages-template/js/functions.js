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
