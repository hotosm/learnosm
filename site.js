---
---
$(function() {
    var app = window.app;
    $('.dropdown.language-switcher').hover(
        function() {
            $('.dropdown-content.language-switcher').addClass('active');
        },
        function() {
            $('.dropdown-content.language-switcher').removeClass('active');
        }
    );
    $('.dropdown.quick-access').hover(
        function() {
            $('.dropdown-content.quick-access').addClass('active');
        },
        function() {
            $('.dropdown-content.quick-access').removeClass('active');
        }
    );
    $('.dropdown.language-switcher > a').on('touchstart', function(e) {
        e.preventDefault();
        $('.dropdown-content.language-switcher').toggleClass('active');
    });
    $('.dropdown.quick-access > a').on('touchstart', function(e) {
        e.preventDefault();
        $('.dropdown-content.quick-access').toggleClass('active');
    });
    $('.language-switcher a').each(function(i, e) {
        if (app.permalink.length < 3) return;
        var remainder = app.permalink.match(/(\/[^\/]+)(\/.*)/)[2];
        var new_url = app.baseurl + '/' + $(e).attr('lang') + remainder;
        $(e).attr('href', new_url);
    });
    $('.language-switcher a[lang=' + app.lang + ']').addClass('active');
      // contribute banner pops out when hovered over
    $('.banner').hover(
        function() {
          $(this).addClass('active').attr('href',window.app.baseurl + '/' + window.app.lang +'/contribute/');
          setTimeout(function(){
            $('.banner span').addClass('active');
            },300);
        },
        function() {
          $(this).removeClass('active').attr('href','');
          $('.banner span').removeClass('active');
        }
    );
});
