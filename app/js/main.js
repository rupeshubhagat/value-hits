$(document).ready(function() {
    $(function() {
        $('.after-seo-btn').addClass('active-btn');
    });
    $(".before-seo-btn").click(function() {
        $(".before-seo-btn").addClass("active-btn");
        $(".after-seo-btn").removeClass("active-btn");
    });
    $(".after-seo-btn").click(function() {
        $(".after-seo-btn").addClass("active-btn");
        $(".before-seo-btn").removeClass("active-btn");
    });

    $(".seo-btn-bronze").click(function() {
        $(".seo-btn-bronze").addClass("seo-btn-active");
        $(".seo-btn-bronze-right").addClass("seo-btn-active");
        $(".seo-bronze-bg").addClass("seo-btn-bg");

        $(".seo-btn-silver,.seo-btn-silver-right").removeClass("seo-btn-active");
        $(".seo-btn-gold,.seo-btn-gold-right").removeClass("seo-btn-active");
        $(".seo-gold-bg,.seo-silver-bg").removeClass("seo-btn-bg");

    });

    $(".seo-btn-silver").click(function() {
        $(".seo-btn-silver").addClass("seo-btn-active");
        $(".seo-btn-silver-right").addClass("seo-btn-active");
        $(".seo-silver-bg").addClass("seo-btn-bg");

        $(".seo-btn-bronze,.seo-btn-bronze-right").removeClass("seo-btn-active");
        $(".seo-btn-gold,.seo-btn-gold-right").removeClass("seo-btn-active");
        $(".seo-gold-bg,.seo-bronze-bg").removeClass("seo-btn-bg");


        // $(".seo-btn-silver,seo-btn-silver-right").removeClass("seo-btn-active");
        // $(".seo-btn-gold,seo-btn-gold-right").removeClass("seo-btn-active");

    });

    $(".seo-btn-gold").click(function() {
        $(".seo-btn-gold").addClass("seo-btn-active");
        $(".seo-btn-gold-right").addClass("seo-btn-active");
        $(".seo-gold-bg").addClass("seo-btn-bg");


        $(".seo-btn-bronze,.seo-btn-bronze-right").removeClass("seo-btn-active");
        $(".seo-btn-silver,.seo-btn-silver-right").removeClass("seo-btn-active");
        $(".seo-silver-bg,.seo-bronze-bg").removeClass("seo-btn-bg");




    });


});