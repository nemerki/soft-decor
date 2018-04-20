$(document).ready(function() {


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