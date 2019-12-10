"use strict";
/**
  * Tests if the element is visible (within the visible part of the page)
  * It's enough that the top or bottom edge of the element are visible
  */
function isVisible(elem) {
  const elemCoords = elem.getBoundingClientRect();
  const elemTop = elemCoords.top;
  const elemBottom = elemCoords.bottom;

  // Only completely visible elements return true:
  const isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
  // Partially visible elements return true:
  // isVisible = elemTop < window.innerHeight && elemBottom >= 0;
  return isVisible;
}

function showVisible() {
  for (const img of document.querySelectorAll("img")) {
    const realSrc = img.dataset.src;
    if (!realSrc) continue;

    if (isVisible(img)) {
      img.src = realSrc;

      img.dataset.src = "";
    }
  }
}

window.addEventListener("scroll", showVisible);
showVisible();
