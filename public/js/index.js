document.addEventListener("DOMContentLoaded", () => {
  /** init gtm after 3500 seconds - this could be adjusted */
  setTimeout(initGTM, 3000);
});
document.addEventListener("scroll", initGTMOnEvent);
document.addEventListener("mousemove", initGTMOnEvent);
document.addEventListener("touchstart", initGTMOnEvent);

function initGTMOnEvent(event) {
  initGTM();
  event.currentTarget.removeEventListener(event.type, initGTMOnEvent); // remove the event listener that got triggered
}

function initGTM() {
  if (window.gtmDidInit) {
    return false;
  }

  window.gtmDidInit = true; // flag to ensure script does not get added to DOM more than once.

  const script = document.createElement("script");
  script.type = "text/javascript";
  script.async = true;
  // ensure PageViews is always tracked (on script load)
  script.onload = () => {
    dataLayer.push({
      event: "gtm.js",
      "gtm.start": new Date().getTime(),
      "gtm.uniqueEventId": 0,
    });
  };
  script.src = "https://www.googletagmanager.com/gtm.js?id=GTM-MLVF7K3K";

  document.head.appendChild(script);
}

// svg animations script
document.addEventListener("DOMContentLoaded", function () {
  function animateArrow(id, duration) {
    document.getElementById(id).style.visibility = "visible";
    new Vivus(id, { duration: duration, type: "oneByOne" });
  }
  function checkScrollPosition() {
    var scrollPosition = window.scrollY || window.pageYOffset;
    if (scrollPosition >= 50) {
      animateArrow("bookArrow", 100); // Change duration as needed
      animateArrow("freeArrow", 200);
      // Change duration as needed
      window.removeEventListener("scroll", checkScrollPosition);
    }
  }
  window.addEventListener("scroll", checkScrollPosition);
});
document.getElementById("fullname").addEventListener("click", function () {
  animateArrow("bannerArrow", 200);
  animateArrow("formCircle", 100); // Change duration as needed
  this.removeEventListener("click", arguments.callee);
});

function animateArrow(id, duration) {
  document.getElementById(id).style.visibility = "visible";
  new Vivus(id, { duration: duration, type: "oneByOne" });
}

document.getElementById("nextBtn").addEventListener("click", function () {
  // Get the text inside the <span> tag
  var btnText = document.getElementById("NPbtnText").textContent;
  // Toggle the text based on its current value
  if (btnText === "Next") {
    document.getElementById("NPbtnText").textContent = "Previous";
  } else {
    document.getElementById("NPbtnText").textContent = "Next";
  }
});
