function toggleFilter() {
    if (!(document.getElementById("filter-category-menu").classList.contains("showPopup"))) {
        document.getElementById("filter-category-menu").classList.add("showPopup")
    } else {
        document.getElementById("filter-category-menu").classList.remove("showPopup")
    }
}
window.addEventListener('click', function(e){
    if (!(document.getElementById("filter-category-menu").contains(e.target)) && !(document.getElementById("filter-button").contains(e.target))) {
        document.getElementById("filter-category-menu").classList.remove("showPopup")
    }
});