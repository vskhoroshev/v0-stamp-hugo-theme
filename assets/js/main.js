document.addEventListener("DOMContentLoaded", () => {
    init();
});

function init() {
    console.log("Hello!!!!")

    document.querySelector(":root").classList.toggle("light");
    // document.querySelector(":root").classList.toggle("dark");

    // document.querySelector(".language-switcher-button").addEventListener("click", function () {
    //     document.querySelector(".language-switcher-list").classList.toggle("hidden");
    //
    //     //
    //     document.querySelector(".ololo").classList.toggle("hidden");
    // });

    document.querySelector(".nav-switcher-button").addEventListener("click", function () {
        document.querySelector(".nav-layout").classList.toggle("nazin2");
        document.querySelector(".baseof-layout").classList.toggle("nazin");
        // document.querySelector(".baseof-wrapper").classList.toggle("col-start-1");
    });

    document.querySelector(".navigation").addEventListener("click", (e) => {
        let var1 = e.target.closest(".navigation-button");

        if (var1.matches(".navigation-button")) {
            var1.querySelector(".icon").classList.toggle("rotate-90");
            var1.parentElement.querySelector(".navigation-section").classList.toggle("hidden");
        }
    });

    //

    // document.querySelector(".language-switcher").addEventListener("click", (e) => {
    //     document.querySelector(".language-switcher-list").classList.toggle("hidden");
    //     document.querySelector(".ololo").classList.toggle("hidden");
    // })

    document.querySelector(":root").addEventListener("click", (e) => {
        let var1 = e.target.closest(".language-switcher-button");
        // let var2 = document.querySelector(".language-switcher-button");

        // console.log(e.target)
        // console.log(var1)
        // console.log(e.target.matches(".language-switcher-button"));

        if (var1 === null) {
            document.querySelector(".language-switcher-list").classList.add("hidden");
        } else if (var1.matches(".language-switcher-button")) {
            document.querySelector(".language-switcher-list").classList.toggle("hidden");
        }

        // if (var1 === var2) {
        //     document.querySelector(".language-switcher-list").classList.toggle("hidden");
        // } else {
        //     document.querySelector(".language-switcher-list").classList.add("hidden");
        // }
    });

}


// document.addEventListener("DOMContentLoaded", function () {
//     document.querySelector(".light-theme-icon").classList.toggle("hidden");
//     document.querySelector(".baseof-layout").classList.toggle("light-theme");
//
//     document.querySelector(".theme-switcher-button").addEventListener("click", function () {
//         document.querySelector(".light-theme-icon").classList.toggle("hidden");
//         document.querySelector(".baseof-layout").classList.toggle("light-theme");
//
//         document.querySelector(".dark-theme-icon").classList.toggle("hidden");
//         document.querySelector(".baseof-layout").classList.toggle("dark-theme");
//     });
//
//     document.querySelector(".language-switcher-button").addEventListener("click", function () {
//         document.querySelector(".language-switcher-list").classList.toggle("hidden");
//     });
//
//     // window.onclick = function (event) {
//     //     if (!event.target.matches(".language-switcher")) {
//     //         // document.querySelector(".language-switcher-list").classList.remove("hidden");
//     //     }
//     // }
//
//     document.querySelector(".nav-switcher-button").addEventListener("click", function () {
//         document.querySelector(".baseof-nav").classList.toggle("hidden");
//         document.querySelector(".baseof-main").classList.toggle("col-start-1");
//         document.querySelector(".baseof-footer").classList.toggle("col-start-1");
//     });
//
//     // document.querySelectorAll(".navigation-button").forEach((i) => {
//     //     i.addEventListener("click", function () {
//     //         this.querySelector(".icon").classList.toggle("rotate-90");
//     //         this.parentElement.querySelector(".navigation-section").classList.toggle("hidden");
//     //     });
//     // });
//
//     document.querySelector(".navigation").addEventListener("click", (e) => {
//         let var1 = e.target.closest(".navigation-button");
//
//         if (var1.matches(".navigation-button")) {
//             var1.querySelector(".icon").classList.toggle("rotate-90");
//             var1.parentElement.querySelector(".navigation-section").classList.toggle("hidden");
//         }
//     });
//
//     // document.querySelector(".navigation").addEventListener("click", (e) => {
//     //     if (e.target.matches(".navigation-button")) {
//     //         e.target.querySelector(".icon").classList.toggle("rotate-90");
//     //         e.target.parentElement.querySelector(".navigation-section").classList.toggle("hidden");
//     //     }
//     // });
// });
