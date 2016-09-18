---
---
$(function() {
    var app = window.app;
    $('.language-switcher a').each(function(i, e) {
        if (app.permalink.length < 3) return;
        var remainder = app.permalink.match(/(\/[^\/]+)(\/.*)/)[2];
        $(e).attr('href',
            app.baseurl + '/' +
            $(e).attr('lang') +
            remainder
        );
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
