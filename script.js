window.addEventListener('scroll', function() {
    var mainTitle = document.querySelector('.main-title');
    var footer = document.querySelector('footer');
    var footerTop = footer.offsetTop;
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollPosition > footerTop) {
      mainTitle.style.color = 'black';
    } else {
      mainTitle.style.color = '';
    }
  });

