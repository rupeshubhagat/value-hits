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
});