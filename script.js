const menuicon = document.getElementById("menu-icon");
const menulist = document.getElementById("menu-list");

menuicon.addEventListener("click", () => {
    menulist.classlist.toggle('hidden');
})