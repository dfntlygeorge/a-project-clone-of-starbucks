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
function closePopup() {
  document.querySelector(".popup").style.display = "none";
  document.querySelector(".popup-overlay").style.display = "none";
  document.body.classList.add("scrollable"); // Restore scrolling
}

// Function to scroll to the top of the page
function scrollToTop() {
  window.scrollTo(0, 0);
}

// Call scrollToTop function when the page is being unloaded (before reload)
window.onbeforeunload = scrollToTop;
