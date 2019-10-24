$(document).ready(function(){

	$(window).load(function () {
        let phones = [
            {'mask': '+7 \\ \\ ###-###-##-##'}
        ];

        $('input[type=tel]').inputmask({
            mask: phones,
            greedy: false,
            definitions: {
                '#':
                    {
                        validator: '[0-9]',
                        cardinality: 1
                    }
            }
        });
    });

	jQuery("a.scrollto").click(function () {
        elementClick = jQuery(this).attr("href")
        destination = jQuery(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 700);
        return false;
    });

    $('.b-mobile_open_nav').click(function(){
        $(this).toggleClass('b-mobile_open_nav_active');
        if($(this).hasClass('b-mobile_open_nav_active')) {
            $('.b-links').addClass('b-links_active');
            $('.b-links a').each(function (index, el) {
                setTimeout(function () {
                    $(el).addClass('showed');
                }, index * 100);
            });
        }else{
            var time = 0;
            $($('.b-links a').get().reverse()).each(function (index, el) {
                time = index * 100;
                setTimeout(function () {
                    $(el).removeClass('showed');
                }, time);
            });
            setTimeout(function () {
                $('.b-links').removeClass('b-links_active');
                $('.b-links').find('.showed').removeClass('showed');
            }, $('.b-links a').length * 100);
        }
    });

    $('input[type=tel]').bind("change keyup input click", function() {
      if (this.value.match(/[^\+0-9]/g)) {
       this.value = this.value.replace(/[^\+0-9]/g, '');
      }
     });

    $('input[type=tel]').on('focus', function(){
       if($(this).val() == '') $(this).val('+7');
    });
    
    $('input[type=tel]').on('blur', function(){
       if($(this).val() == '+7') $(this).val('');
    });

    $('.slider').slick({
        
    });

    $().fancybox({
      selector : '.slider-car .slick-slide:not(.slick-cloned)',
      backFocus : false
    });

    $(window).on('load resize scroll', function () {

        var width = $(window).width();

         if ((width > '700') && (width < '1000')) {
            
        }

    });

     

    //   $(document).on('af_complete', function(event, response) {
    //     if(response.success) $.fancybox.close();
    // })

});