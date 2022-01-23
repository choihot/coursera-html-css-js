document.addEventListener("DOMContentLoaded", function(e) { // Same as ...
    document.querySelector(".navbar-toggler").addEventListener("blur", function(){
        var screenWidth = window.innerWidth;
        if (screenWidth < 992) {
            document.getElementById("navbarNav").classList.toggle('show');
        }
    });
})