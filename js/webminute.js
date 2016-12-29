jQuery(function ($) {
    "use strict";
    $('#fullpage').fullpage({
        css3: true,
        loopHorizontal: false,
        controlArrows: false,
        scrollingSpeed: 800
    });
    /* ----------------------------------------------------------- */
    /*  #imgLiquid
     /* ----------------------------------------------------------- */
    $('.imgLiquid').imgLiquid({
        fill: false,
        horizontalAlign: "center",
        verticalAlign: "center"
    });
    /* ----------------------------------------------------------- */
    /*  #slimScroll
     /* ----------------------------------------------------------- */
    $('.project-contents').slimScroll({
        height: '700px'
    });
});