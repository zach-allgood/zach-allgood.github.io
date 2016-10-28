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

    $('.quality').click(function(e){
        e.preventDefault();
        var className = $(this).attr('class');
        //Shows info and hides other infos if they're visible
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
    });

    /**
     * Show/hide info regarding the About Me section
     */

    function expandCircle(circleDiv) {

        var parentDiv = circleDiv.parent();

        parentDiv.parent().children().not(parentDiv).hide(500);
        setTimeout(function () {
            parentDiv.parent().children().not(parentDiv).toggleClass('col-sm-4 col-sm-0');
        }, 500);

        setTimeout(function () {
            parentDiv.toggleClass('col-sm-4 col-sm-12', 1000);
            if ($(window).width() >= 768) {
                circleDiv.find('.innerTitle').animate({
                    top: '5%'
                }, 1000);
            } else{
                circleDiv.find('.innerTitle').animate({
                    top: '10%'
                }, 1000);

                circleDiv.children().animate({
                    width: '100%',
                    padding: 'auto auto 100% auto'
                }, 1000);
            }
        }, 500);
    }

    function shrinkCircle(circleDiv){
        var parentDiv = circleDiv.parent();

        parentDiv.toggleClass('col-sm-12 col-sm-4');

        if($(window).width() <= 768){
            circleDiv.children().animate({
                width: '50%',
                padding: 'auto auto 50% auto'
            }, 1000);
        }
        circleDiv.find('.innerTitle').animate({
            top: '50%'
        }, 1000, function(){
            parentDiv.parent().children().not(parentDiv).toggleClass('col-sm-0 col-sm-4');
            parentDiv.parent().children().not(parentDiv).slideDown(500);
        });
    }

    $('.circleLink').click(function(e){
        e.preventDefault();
        var className = $(this).attr('class');
        var parentDiv = $(this).parent();

        //Expands circle, hiding others and adding info
        if(className.indexOf('beginning') >= 0) {
            if(parentDiv.attr('class').indexOf('col-sm-4') >= 0){
                expandCircle($(this));
            }
            else{
                shrinkCircle($(this));
            }

        }
    });

    $(window).resize(function(){

        if ($(window).width() <= 768 && $('.circleLink').parent().attr('class').indexOf('col-sm-12') >= 0){
            $('.circle').css({
                'width': '100%',
                'padding-bottom': '100%'
            });

            $('.circle').children('.innerTitle').css('top', '10%');
        }

        else if($('.circleLink').parent().attr('class').indexOf('col-sm-12') >= 0){
            $('.circle').css({
                'width': '50%',
                'padding-bottom': '50%'
            });

            $('.circle').children('.innerTitle').css('top', '5%');
        }

        else{
            $('.circle').css({
                'width': '50%',
                'padding-bottom': '50%'
            });

            $('.circle').children('.innerTitle').css('top', '50%');
        }

    });

});