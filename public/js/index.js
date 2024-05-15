document.addEventListener('DOMContentLoaded', () => {
  setTimeout(initGTM, 3500);
});
function initGTM() {
  const gtmLoaded = sessionStorage.getItem('gtmLoaded');
  if (!gtmLoaded) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      // Ensure PageViews is always tracked (on script load)
      script.onload = () => {
          dataLayer.push({ event: 'gtm.js', 'gtm.start': new Date().getTime(), 'gtm.uniqueEventId': 0 });
      };
      script.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-M3RFKJZV';
      document.head.appendChild(script);
      sessionStorage.setItem('gtmLoaded', 'true');
  }
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



document.getElementById('nextBtn').addEventListener('click', function() {
  // Get the text inside the <span> tag
  var btnText = document.getElementById('NPbtnText').textContent;
  // Toggle the text based on its current value
  if (btnText === 'Next') {
    document.getElementById('NPbtnText').textContent = 'Previous';
  } else {
    document.getElementById('NPbtnText').textContent = 'Next';
  }
});