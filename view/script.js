$(document).ready(function () {
    loadLanding();
});

$(window).resize(function() {
    loadLanding();
});

function loadLanding() {
    $('#landing').css({ height: ($(window).height()) +'px' });

    var container = $('#landing').find('.container');
    var topHeight = ($('#landing').height() / 2) - (container.height() / 2);
    container.css({ top: topHeight});
}