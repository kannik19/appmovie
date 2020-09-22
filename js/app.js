document.addEventListener('init', function(event) {
    var page = event.target;
    console.log(page.id)
    if (page.id === 'page1') {
      page.querySelector('#startrek').onclick = function() {
        document.querySelector('#myNavigator').pushPage('views/detail.html');
      };
    } else if (page.id === 'page2') {
      
    }
  });