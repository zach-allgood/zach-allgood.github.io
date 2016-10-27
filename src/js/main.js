$(function(){
    /**
     *  Hide/show navbar when scrolling
     */

    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('nav').height();

    $(window).scroll(function(event){
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 5);

    function hasScrolled() {
        var st = $(this).scrollTop();
        if (Math.abs(lastScrollTop - st) <= delta)
            return;

        if (st > lastScrollTop && st > navbarHeight){
            $('nav').removeClass('nav-down').addClass('nav-up');
        }

        else {
            if(st + $(window).height() < $(document).height()) {
                $('nav').removeClass('nav-up').addClass('nav-down');
            }
        }

        lastScrollTop = st;
    }

    /**
     * Animate progress bars when the show up on the screen
     */

    $.fn.visible = function(partial) {

        var $t            = $(this),
            $w            = $(window),
            viewTop       = $w.scrollTop(),
            viewBottom    = viewTop + $w.height(),
            _top          = $t.offset().top,
            _bottom       = _top + $t.height(),
            compareTop    = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;

        return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

    };

    $(window).scroll(function(event) {

        $(".progress-bar").each(function(i, el) {
            var el = $(el);
            if (el.visible(true)) {
                $('.html').animate({
                    width: "90%"
                }, 2500);

                $('.css').animate({
                    width: "90%"
                }, 2500);

                $('.php').animate({
                    width: "80%"
                }, 2500);

                $('.jscript').animate({
                    width: "75%"
                }, 2500);

                $('.jq').animate({
                    width: "70%"
                }, 2500);

                $('.mysql').animate({
                    width: "50%"
                }, 2500);

                $('.java').animate({
                    width: "40%"
                }, 2500);

                $('.csharp').animate({
                    width: "30%"
                }, 2500);

            }
        });

    });

    /**
     * Show/hide info regarding the links in the jumbotron (Software Engineer, Student, Mentor)
     */

    $('.quality').click(function(){
        var className = $(this).attr('class');
        if(className.indexOf('engineer') >= 0){
            if($('.studentInfo').is(":visible")){
                $('.studentInfo').slideToggle(500);
            }

            else if($('.mentorInfo').is(":visible")){
                $('.mentorInfo').slideToggle(500);
            }

            $('.engineerInfo').slideToggle(500);
        }

        else if(className.indexOf('student') >= 0){
            if($('.engineerInfo').is(":visible")){
                $('.engineerInfo').slideToggle(500);
            }

            else if($('.mentorInfo').is(":visible")){
                $('.mentorInfo').slideToggle(500);
            }

            $('.studentInfo').slideToggle(500);
        }

        else if(className.indexOf('mentor') >= 0){
            if($('.engineerInfo').is(":visible")){
                $('.engineerInfo').slideToggle(500);
            }

            else if($('.studentInfo').is(":visible")){
                $('.studentInfo').slideToggle(500);
            }

            $('.mentorInfo').slideToggle(500);
        }
    })

});