$("#nav-toggle").click(function() {
    $("header nav ul").slideToggle(200);
});

$(window).resize(function() {
    if ($(document).width() > 930)
    {
        $("header nav ul").css('display', 'flex');
    }
    else
    {
        $("header nav ul").css('display', 'none');
    }
});