const toggleButton = document.getElementById('toggle-button');
const sidebar = document.getElementById('sidebar');

toggleButton.addEventListener('click', function () {
    sidebar.classList.toggle('closed');
});

// get all menu links
const menuLinks = document.querySelectorAll('#sidebar ul li a');

// add event listener to each menu link
menuLinks.forEach(link => {
  link.addEventListener('click', event => {
    // prevent default link behavior
    event.preventDefault();
    
    // get the href attribute of the clicked link
    const href = link.getAttribute('href');

    // fetch the page content from the selected page
    fetch(href)
      .then(response => response.text())
      .then(content => {
        // load the page content into the content div
        document.getElementById('content').innerHTML = content;
      })
      .catch(error => console.error(error));
  });
});

