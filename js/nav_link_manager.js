const navLink_map = new Map([
  ["Home", "/index.html"],
  ["Games", "/Pages/Games/Games.html"],
  ["Portfolio", "/Pages/Portfolio/Portfolio.html"]
]);
const navPages = ["Home", "Games", "Portfolio"];

function create_navLink(current_page) {
  const ul_container = document.getElementById("navlink-contents");

  for (let i = 0; i < navPages.length; i++) {
    let pageLink = document.createElement("a");
    pageLink.classList.add("nav-link");

    if (navPages[i] == current_page) {
      pageLink.href = "#";
    } else {
      pageLink.href = navLink_map.get(navPages[i]);
    }

    let listElement = document.createElement("li");
    listElement.classList.add("nav-item");
    listElement.innerHTML = navPages[i];

    pageLink.appendChild(listElement);
    ul_container.appendChild(pageLink);
  }
}
