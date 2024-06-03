function toggleSidebar() {
  const sidebar = document.querySelector(".sidebar");
  const menuIcon = document.querySelector(".ham-menu");
  const overlay = document.querySelector(".myOverlay");

  if (sidebar.style.right === "0px") {
    sidebar.style.right = "-100%";
    document.body.style.overflowY = "auto";
    overlay.classList.remove("overlay");
    menuIcon.style.right = "5vw";
    menuIcon.innerHTML = '<span class="fa-solid fa-bars"></span>'; // Change back to bars icon
  } else {
    sidebar.style.right = "0";
    document.body.style.overflow = "hidden";
    overlay.classList.add("overlay");
    menuIcon.style.right = "7vw";
    menuIcon.innerHTML = '<span class="fa-solid fa-x"></span>'; // Change to X icon
  }
}

const ddMenus = document.querySelectorAll("#dd-menu");

ddMenus.forEach((ddMenu) => {
  ddMenu.addEventListener("click", () => {
    ddMenu.classList.toggle("active");
  });
});
