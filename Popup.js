document.querySelector("#show-login").addEventListener("click", function () {
    document.querySelector(".center").classList.add("active");
});
document.querySelector(".center .close-btn").addEventListener("click", function () {

    document.querySelector(".center").classList.remove("active");

});