//Filter Button Click-Detection
let filterMenu = document.getElementById("filter-category-menu")
let filterButton = document.getElementById("filter-button")
document.addEventListener('click', function (event) {
    if (!(filterMenu.classList.contains("showPopup")) && filterButton.contains(event.target)) {
        filterMenu.classList.add("showPopup")
        console.log("show popup")
    } else {
        if (!filterMenu.contains(event.target)) {
            filterMenu.classList.remove("showPopup")
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
