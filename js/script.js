document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("authModal");
    var btn = document.getElementById("profile-icon");
    var span = document.querySelector(".close-button");

    btn.onclick = function(event) {
        event.preventDefault();
        modal.style.display = "flex";
    };

    span.onclick = function() {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});