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
});
