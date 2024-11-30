
// " scroll down to " jQuery

    $(function() {
        $('#scroll-down-btn').click (function() {
            $('html').animate({
                scrollTop: $('#preview').offset().top,
                behavior: 'smooth'
            }, 500);
        });
      });
    
