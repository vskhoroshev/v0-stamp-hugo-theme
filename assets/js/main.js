document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".light-theme-icon").classList.toggle("hidden");
    document.querySelector(".baseof-layout").classList.toggle("light-theme");

    document.querySelector(".theme-switcher-button").addEventListener("click", function () {
        document.querySelector(".light-theme-icon").classList.toggle("hidden");
        document.querySelector(".baseof-layout").classList.toggle("light-theme");

        document.querySelector(".dark-theme-icon").classList.toggle("hidden");
        document.querySelector(".baseof-layout").classList.toggle("dark-theme");
    });

    document.querySelector(".language-switcher-button").addEventListener("click", function () {
        document.querySelector(".language-switcher-list").classList.toggle("hidden");
    });

    // window.onclick = function (event) {
    //     if (!event.target.matches(".language-switcher")) {
    //         // document.querySelector(".language-switcher-list").classList.remove("hidden");
    //     }
    // }

    document.querySelector(".nav-switcher-button").addEventListener("click", function () {
        document.querySelector(".baseof-nav").classList.toggle("hidden");
        document.querySelector(".baseof-main").classList.toggle("col-start-1");
        document.querySelector(".baseof-footer").classList.toggle("col-start-1");
    });

    // document.querySelectorAll(".navigation-button").forEach((i) => {
    //     i.addEventListener("click", function () {
    //         this.querySelector(".icon").classList.toggle("rotate-90");
    //         this.parentElement.querySelector(".navigation-section").classList.toggle("hidden");
    //     });
    // });

    document.querySelector(".navigation").addEventListener("click", (e) => {
        if (e.target.matches(".navigation-button")) {
            e.target.querySelector(".icon").classList.toggle("rotate-90");
            e.target.parentElement.querySelector(".navigation-section").classList.toggle("hidden");
        }
    });
});
