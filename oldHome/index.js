window.onload = function() {
  (function() {
    var no = Math.floor(Math.random() * 9) + 1;
    document.getElementById(
      "container"
    ).style.backgroundImage = `url(../images/wallpaper/bg-cover${no}.jpg)`;
  })();
  document.body.addEventListener("mouseup", function() {
    Array.from(document.getElementsByClassName("dropdown-menu")).map(function(
      node
    ) {
      node.parentNode.classList.remove("open");
    });
  });
  for (let node of document.getElementsByClassName("drop-btn")) {
    node.addEventListener("mouseup", function(e) {
      e.stopPropagation();
    });
    node.addEventListener("click", function(e) {
      e.target.parentNode.classList.add("open");
    });
  }
};
