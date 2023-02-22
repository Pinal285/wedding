$(document).ready(function() {
    /*====================== js for sticky and mobile menu ====================== */
    var min_height = $(window).height() - ($(".custom-header").height() + $(".custom-footer").height());
    $(".main_page").css('min-height', min_height + 'px');
    $(window).resize(function() {
        var min_height = $(window).height() - ($(".custom-header").height() + $(".custom-footer").height());
        $(".main_page").css('min-height', min_height + 'px');
    });

    $(window).scroll(function() {
        var navHeight = $('#custom-header').height();
        var sticky = $('#custom-header');
        if ($(window).scrollTop() > 0) {
            sticky.addClass("sticky")
            $('#dashboard-page').css('padding-top', navHeight + "px");
        } else {
            sticky.removeClass("sticky");
            $('#dashboard-page').css('padding-top', 0);
        }
    });
    $('.jb_front_nav_close button').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });
    /*====================== js for sticky and mobile menu ====================== */

    // type animation
    var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) {
            delta /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(function() {
            that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i = 0; i < elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.05em solid #8c30f559}";
        document.body.appendChild(css);
    };


    /*====================== js for scrollTop ====================== */
    var btn = $('#button');

    $(window).scroll(function() {
        if ($(window).scrollTop() > 500) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '500');
    });
    /*====================== js for scrollTop ====================== */

    // Add smooth scrolling to all links


    AOS.init({
        duration: 1200,
    })

}); /*====================== all js end ====================== */
$(document).ready(function() {
    /*====================== js for sticky and mobile menu ====================== */
    var min_height = $(window).height() - ($(".custom-header").height() + $(".custom-footer").height());
    $(".main_page").css('min-height', min_height + 'px');
    $(window).resize(function() {
        var min_height = $(window).height() - ($(".custom-header").height() + $(".custom-footer").height());
        $(".main_page").css('min-height', min_height + 'px');
    });

    $(window).scroll(function() {
        var navHeight = $('#custom-header').height();
        var sticky = $('#custom-header');
        if ($(window).scrollTop() > 0) {
            sticky.addClass("sticky")
            $('#dashboard-page').css('padding-top', navHeight + "px");
        } else {
            sticky.removeClass("sticky");
            $('#dashboard-page').css('padding-top', 0);
        }
    });
    $('.jb_front_nav_close button').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });
    /*====================== js for sticky and mobile menu ====================== */

    // type animation
    var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) {
            delta /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(function() {
            that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i = 0; i < elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.05em solid #8c30f559}";
        document.body.appendChild(css);
    };


    /*====================== js for scrollTop ====================== */
    var btn = $('#button');

    $(window).scroll(function() {
        if ($(window).scrollTop() > 500) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '500');
    });
    /*====================== js for scrollTop ====================== */

    // Add smooth scrolling to all links


    AOS.init({
        duration: 1200,
    })

}); /*====================== all js end ====================== */