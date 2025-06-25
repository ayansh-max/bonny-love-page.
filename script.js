function nextPage() {
  document.body.classList.add("fade-out");
  setTimeout(() => {
    window.location.href = "page2.html";  // Page 2 open
  }, 1500);
}
.fade-out {
  opacity: 0;
}
