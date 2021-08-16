$("#rick").on("click", function(e) {
    $("#wrap").css("display", "none");
    $(".ban").css("display", "none");
    $(".loh").css("display", "block");
});

function showBan() {
    $(".ban").css("display", "flex");
}

setTimeout(showBan, 4000);