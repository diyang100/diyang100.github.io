(function () {
    var menuDisplay = false;
    toggleMenu = function() {
        var menu = document.getElementById("nav_bar_container");
        if (menu.style.display == "none") {
            menu.style.display = "flex";
        } else {
            menu.style.display = "none";
        }
    }
})();
