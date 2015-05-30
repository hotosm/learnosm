---
---
$(function() {
    var app = window.app;
    $('.language-switcher a').each(function(i, e) {
        if (app.permalink.length < 3) return;
        $(e).attr('href',
            app.baseurl + '/' +
            $(e).attr('lang') +
            app.permalink.substr(3)
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
