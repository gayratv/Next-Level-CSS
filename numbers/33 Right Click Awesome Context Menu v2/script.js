/*
 * Copyright (c) 2021. Write by Gayrat
 */
$(function() {

    var $doc = $( document ),
        $context = $(".context:not(.sub)"),
        $c1 = $("#c1"),
        $c2 = $("#c2");

    $doc.on( "contextmenu", function(e) {

        var $window = $( window ),
            $sub = $context.find(".sub");

        $sub.removeClass("oppositeX oppositeY");

        e.preventDefault();

        var w = $context.width();
        var h = $context.height();
        var x = e.clientX;
        var y = e.clientY;
        var ww = $window.width();
        var wh = $window.height();
        var padx = 30;
        var pady = 20;
        var fx = x;
        var fy = y;
        var hitsRight = ( x + w >= ww - padx );
        var hitsBottom = ( y + h >= wh - pady );

        if ( hitsRight ) {
            fx = ww - w - padx;
        }

        if ( hitsBottom ) {
            fy = wh - h - pady;
        }

        $context
            .css({
                left: fx - 1,
                top: fy - 1
            });

        var sw = $sub.width();
        var sh = $sub.height();
        var sx = $sub.offset().left;
        var sy = $sub.offset().top;
        var subHitsRight = ( sx + sw - padx >= ww - padx );
        var subHitsBottom = ( sy + sh - pady >= wh - pady );

        if( subHitsRight ) {
            $sub.addClass("oppositeX");
        }

        if( subHitsBottom ) {
            $sub.addClass("oppositeY");
        }

        $context.addClass("is-visible");

        $doc.on("mousedown", function(e) {

            var $tar = $( e.target );
            console.log($tar)

            if( !$tar.is( $context ) &&
                !$tar.closest(".context").length &&
                !$tar.is( $c1 ) &&
                !$tar.is( $c2 )) {

                $context.removeClass("is-visible");
                $doc.off( e );

            }

        });

    });

    $context.on("mousedown touchstart", "li:not(.nope)", function(e) {

        if( e.which === 1 ) {

            var $item = $(this);

            $item.removeClass("active");

            setTimeout( function() {
                $item.addClass("active");
            },10);

        }

    });

    $c1.on( "input change", function(e) {
        var color = $(this).val();
        document.body.style.setProperty( "--color1", color );
    });

    $c2.on( "input change", function(e) {
        var color = $(this).val();
        document.body.style.setProperty( "--color2", color );
    });

    // hack the preview for codepenzies

    setTimeout(function(){
        $doc.trigger("contextmenu");
        $context
            .css({top: 120, left: 32 })
            .addClass("is-visible");
    }, 400 );

});
