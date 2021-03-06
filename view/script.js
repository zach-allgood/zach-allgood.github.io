var lnStickyNavigation;

$(document).ready(function () {
    loadLanding();
    loadNavigation();
    applyResize();
    checkHash();
});

function loadLanding() {
    $('#landing').css({ height: ($(window).height()) +'px' });

    var container = $('#landing').find('.container');
    var topHeight = ($('#landing').height() / 2) - (container.height() / 2);
    container.css({ top: topHeight});
}

function loadNavigation()
{
    applyClickEvent();
    applyNavigationFixForPhone();
    applyScrollSpy();
    applyStickyNavigation();
}

function applyClickEvent()
{
    $('a[href^="#"]').on('click', function(e)
    {
        e.preventDefault();

        if( $( $.attr(this, 'href') ).length > 0 )
        {
            $('html, body').animate(
                {
                    scrollTop: $( $.attr(this, 'href') ).offset().top
                }, 400);
        }
        return false;
    });
}

function applyNavigationFixForPhone()
{
    $('.navbar li a').click(function(event)
    {
        $('.navbar-collapse').removeClass('in').addClass('collapse');
    });
}

function applyScrollSpy()
{
    $('#side-nav').on('activate.bs.scrollspy', function()
    {
        window.location.hash = $('.nav .active a').attr('href').replace('#', '#/');
    });
}

function applyStickyNavigation()
{
    lnStickyNavigation = $('.scroll-down').offset().top + 20;

    $(window).on('scroll', function()
    {
        stickyNavigation();
    });

    stickyNavigation();
}

function stickyNavigation()
{
    if($(window).scrollTop() > lnStickyNavigation)
    {
        $('body').addClass('fixed');
    }
    else
    {
        $('body').removeClass('fixed');
    }
}

function applyResize()
{
    $(window).on('resize', function()
    {
        lnStickyNavigation = $('.scroll-down').offset().top + 20;

        $('#landing').css({ height: ($(window).height()) +'px' });
    });
}

function checkHash()
{
    lstrHash = window.location.hash.replace('#/', '#');

    if($('a[href="'+ lstrHash +'"]').length > 0)
    {
        $('a[href="'+ lstrHash +'"]').trigger('click');
    }
}