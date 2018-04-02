

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

	/*// Variables
	var $slides = $('.slider'),
	$slide = $('.slide'),
	Nbslide =  $('.slide').length-1,
	currentSlide = 0,
	nextSlide = 1;

	console.log(Nbslide);

	 // slidererın sayı qeder nöqte ekledik 
	 for (var i = 0; i<= Nbslide; i++) {
	 	$('.dots').append($('<div><span></span></div>'));
	 }

	 //INIT SLIDE
	 function init(){
            //initiliasation slide et puce
            TweenLite.set($('.slider .slide:eq(0)'), {x:'10%'}); //0 indexli slidei x:0% e getirdik
            TweenLite.set( $('.dots div:eq(0)'), {className:'active'});//dots daki 0 indexli dive active clası ekledik
            // refresh
            TweenLite.set($slides, {className:'-=loading'});//slidesdan loading clasını sildik
            TweenMax.delayedCall(5, upDateSlide, [currentSlide,nextSlide]);//3 saniye gecikme ile upDateSlide foksiyonunu çağırdı ve iki adet parametre gönderdi
        }
        init();

        //upDateSlide
        function upDateSlide(currentSlide,nextSlide){
        	if(nextSlide > Nbslide){
        		nextSlide = 0;
        	}
        	
        	var    tlRight = new TimelineMax(),
        	tlLeft = new TimelineMax(),
        	nextDivSlide = $('.slider .slide:eq('+nextSlide+')'),
        	fromDivSlide = $('.slider .slide:eq('+currentSlide+')'),
        	titrefrom =fromDivSlide.find('.slide__text-heading'),
        	textfrom =fromDivSlide.find('.slide__text-desc'),
        	lienfrom =fromDivSlide.find('.slide__text-link'),
        	fondfrom= fromDivSlide.find('.slide__overlay'),
        	titrenext =nextDivSlide.find('.slide__text-heading'),
        	textnext =nextDivSlide.find('.slide__text-desc'),
        	liennext =nextDivSlide.find('.slide__text-link'),
        	fondnext= nextDivSlide.find('.slide__overlay');

        	if(nextSlide > currentSlide){
                //console.log('going right');
                tlRight
                .set( nextDivSlide,{x:'100%'})
                .set($slides, {className: '+=is-animating'})

                .to(textfrom, 0.5, {autoAlpha : 0, yPercent :'-=10', ease:Linear.None})
                .to(lienfrom, 0.5, {autoAlpha : 0, yPercent :'+=10', ease:Linear.None},'-=0.2')
                .to(titrefrom, 0.5, {autoAlpha : 0, xPercent :'-=10', ease:Linear.None},'-=0.4')
                .to(fondfrom, 0.5, {autoAlpha : 0, xPercent :'-=50', ease:Linear.None},'-=0.6')
                .add('Out')
                .to(fromDivSlide, 0.7, { x:'-=100%', ease:Power4.easeInOut, clearProps: 'all'},'Out+=0.2')
                .to( nextDivSlide, 0.7, { x:'10%', ease:Power4.easeInOut},'Out+=0.2')
                .add('slideOk')
                .set([textfrom,lienfrom,titrefrom,fondfrom], {clearProps: 'all'})
                .to($('.dots div'),0, {className: '-=active'},'Out')
                .to($('.dots div:eq('+nextSlide+')'),0, {className: '+=active'},'slideOk')
                .from(fondnext, 0.7, {autoAlpha:0,xPercent : '-50', ease:Power4.easeInOut},'slideOk+=0.2')
                .from(titrenext, 0.7, {autoAlpha:0,xPercent : '-50', ease:Power4.easeInOut},'slideOk+=0.4')
                .from(textnext, 0.7, {autoAlpha:0,yPercent : '-50', ease:Power4.easeInOut},'slideOk+=0.6')
                .from(liennext, 0.7, {autoAlpha:0,yPercent : '+50', ease:Power4.easeInOut},'slideOk+=0.8')

                .set($slides, {className: '-=is-animating'});
                currentSlide = nextSlide;
                nextSlide++;
                TweenMax.delayedCall(5, upDateSlide, [currentSlide,nextSlide]);
            }
            if(nextSlide < currentSlide)
            {
                //console.log('going left');
                tlLeft
                .set(nextDivSlide,{x:'-=100%'})
                .set($slides, {className: '+=is-animating'})

                .to(textfrom, 0.5, {autoAlpha : 0, yPercent :'-=10', ease:Linear.None})
                .to(lienfrom, 0.5, {autoAlpha : 0, yPercent :'+=10', ease:Linear.None},'-=0.2')
                .to(titrefrom, 0.5, {autoAlpha : 0, xPercent :'-=10', ease:Linear.None},'-=0.4')
                .to(fondfrom, 0.5, {autoAlpha : 0, xPercent :'-=50', ease:Linear.None},'-=0.6')
                .add('Out')
                .to(fromDivSlide, 0.7, { x:'100%', ease:Power4.easeInOut, clearProps: 'all'},'Out+=0.2')
                .to(nextDivSlide, 0.7, { x:'10%', ease:Power4.easeInOut},'Out+=0.2')
                .add('slideOk')
                .set([textfrom,lienfrom,titrefrom,fondfrom], {clearProps: 'all'})
                .to($('.dots div'),0, {className: '-=active'},'Out')
                .to($('.dots div:eq('+nextSlide+')'),0, {className: '+=active'},'slideOk')
                .from(fondnext, 0.7, {autoAlpha:0,xPercent : '-50', ease:Power4.easeInOut},'slideOk+=0.2')
                .from(titrenext, 0.7, {autoAlpha:0,xPercent : '-50', ease:Power4.easeInOut},'slideOk+=0.4')
                .from(textnext, 0.7, {autoAlpha:0,yPercent : '-50', ease:Power4.easeInOut},'slideOk+=0.6')
                .from(liennext, 0.7, {autoAlpha:0,yPercent : '+50', ease:Power4.easeInOut},'slideOk+=0.8')
                .to($(".sliders__star"), 1, {rotation:"360_cw",  transformOrigin:"center center",ease: Power3.easeInOut},'slideOk')
                .set($slides, {className: '-=is-animating'});
                currentSlide = nextSlide;
                nextSlide++;

                TweenMax.delayedCall(5, upDateSlide, [currentSlide,nextSlide]);
            }
        }

        // Navigation
        $('.dots div').on('click', function(e){
        	if(e.preventDefault) {
        		e.preventDefault();
        	} else {
        		e.returnValue = false;
        	}

        	if(!$slides.hasClass('is-animating')){
        		var currentSlide = $('.dots div.active').index(),
        		nextSlide =  $(this).index();

        		if(currentSlide !== nextSlide){
        			TweenMax.killDelayedCallsTo(upDateSlide);
        			TweenMax.delayedCall(0, upDateSlide, [currentSlide,nextSlide]);
        		}
        	}
        });
        */
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