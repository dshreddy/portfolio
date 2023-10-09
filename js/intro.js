// Call the function when the page loads
window.addEventListener('load', function() {

    const titleText = document.querySelector('.title-text');

    if (window.innerWidth <= 1200) {
      console.log("phone");
      titleText.style.marginTop = '40%';
    } else {
      console.log("laptop");
      titleText.style.marginTop = '10%';
    }
});  