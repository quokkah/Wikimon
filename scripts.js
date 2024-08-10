document.addEventListener('click', function (event) {
    if (!(document.getElementById("filter-category-menu").classList.contains("showPopup")) && document.getElementById("filter-button").contains(event.target)) {
        document.getElementById("filter-category-menu").classList.add("showPopup")
        console.log("show popup")
    } else {
        if (!document.getElementById("filter-category-menu").contains(event.target)) {
            document.getElementById("filter-category-menu").classList.remove("showPopup")
            console.log("hide popup")
        } else {
            console.log("clicked inside popup")
        }
    }
});
// document.addEventListener('click', function(event) {
//     if (!(document.getElementById("filter-button").contains(event.target))) {
//         document.getElementById("filter-category-menu").classList.remove("showPopup")
//         console.log("clicked outside popup")
//     }
// });
