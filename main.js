
$(function() {
    //galery popup

    lightbox.option({
      'resizeDuration': 500,
      'wrapAround': true,
      'alwaysShowNavOnTouchDevices' : true,
      'albumLabel' : " %1 / %2",

  })
});


//index slider owl carusel
$(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        nav:true,
        dotsEach:true,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
});


$(document).ready(function() {
        //blog-page slide
        
        $(".test").click(function(event) {
            var newClass=$(this).attr("id");
            var oldClass=$("#blog-page__full").attr('class');

            $("#blog-page__full").fadeOut( function() {
                $("#blog-page__full").removeClass(oldClass).addClass(newClass).fadeIn('slow');
            });
        });

        //produc-page 

        $(".test5").click(function(event) {
            var newClass=$(this).attr("id");
            var oldClass=$("#produc-page__full").attr('class');

            $("#produc-page__full").fadeOut( function() {
                $("#produc-page__full").removeClass(oldClass).addClass(newClass).fadeIn('slow');
            });
        });

        $(".galery__popup-img").click(function(){
            var a=$(this).find('.blog-list__img').attr("src");

            $(".blog-list__popup-img").attr("src",a);


        })

        $(".gallery-page__next").click(function(){
            var b=$(".blog-list__popup-img").attr("src");
            
            var img= $(".blog-list__img[src*='"+b+"']");
            var c = img.length;
            var d = img.index();
            //console.log(img);

            console.log($(".blog-list__img").length)

            // var h=$(".blog-list__img").attr("src",b);


            // console.log(h);

            var index = img.index($(".blog-list__img"));

            // console.log(index);

         /*   console.log(d.eq());

            f=$(".blog-list__img").length;
            console.log(f);*/
        })




    });

$(document).ready(function() {

    $('.products-page__tabs .active img').attr('src',"img/prcloud1-n.png");

    $('.products-page__tends').on({
        'click': function(){
            $('.products-page__tabs img').attr('src',"img/prcloud2-n.png");
            $('img', this).attr('src',"img/prcloud1-n.png");
        }
    });

});


$(document).ready(function() {
    var item = $('.product-page__small-container .test2:first-child');
     var imgs = item.find('img').data('image');
    $('.product-page__big-img').css('background-image', 'url(' + imgs + ')');

    if($('.product-page__small-container .test2').length)
    {
        var thumbs = $('.product-page__small-container .test2');
        var singleImage = $('.product-page__big-img');

        thumbs.each(function()
        {
            var item = $(this);
            item.on('click', function()
            {
                thumbs.removeClass('active');
                item.addClass('active');
                var img = item.find('img').data('image');
                singleImage.css('background-image', 'url(' + img + ')');
            });
        });
    }


    if($('.colors__list .test5').length)
    {
        var thumbs = $('.colors__list .test5');
        var singleImage = $('.product-page__big-img');

        thumbs.each(function()
        {
            var item = $(this);
            item.on('click', function()
            {
                thumbs.removeClass('active');
                item.addClass('active');
                var img = item.find('img').data('image');
                singleImage.css('background-image', 'url(' + img + ')');
            });
        });
    }
});