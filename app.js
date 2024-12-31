const btnToggle = document.querySelector(".sidebar-toggle");
const btnClose = document.querySelector(".close-btn");
const sideBar = document.querySelector(".sidebar");

function closeSidebar() {
  sideBar.classList.remove("show-sidebar");
}

btnClose.addEventListener("click", closeSidebar);

btnToggle.addEventListener("click", function () {
  sideBar.classList.toggle("show-sidebar");
});
