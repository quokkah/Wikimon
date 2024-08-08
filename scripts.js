function toggleFilter(state) {
    if (state === true && document.getElementById("filter-category-menu").style.visibility === "hidden") {
        document.getElementById("filter-category-menu").style.visibility = "visible"
    } else {
        document.getElementById("filter-category-menu").style.visibility = "hidden"
    }
}