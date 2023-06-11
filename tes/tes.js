window.addEventListener('scroll', function() {
    var nav = document.querySelector('.nav-container');
    var scrolled = window.scrollY > 0;
    nav.classList.toggle('scrolled', scrolled);
    if (scrolled) {
      nav.style.backgroundColor = 'rgb(75, 255, 0.9)';
      nav.style.color = '#ffffff';
    } else {
      nav.style.backgroundColor = 'rgba(175, 128, 255, 0)';
      nav.style.color = '#333';
    }
  });
  
  var dropdowns = document.getElementsByClassName('dropdown');
  
  for (var i = 0; i < dropdowns.length; i++) {
    dropdowns[i].addEventListener('click', function() {
      this.classList.toggle('active');
      var dropdownContent = this.querySelector('.dropdown-content');
      dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });
  }
  //fade in
  $(function(){  // $(document).ready shorthand
    $('.monster').fadeIn('slow');
  });
  
  $(document).ready(function() {
      
      /* Every time the window is scrolled ... */
      $(window).scroll( function(){
      
          /* Check the location of each desired element */
          $('.hbs').each( function(i){
              
              var bottom_of_object = $(this).position().top + $(this).outerHeight();
              var bottom_of_window = $(window).scrollTop() + $(window).height();
              
              /* If the object is completely visible in the window, fade it it */
              if( bottom_of_window > bottom_of_object ){
                  
                  $(this).animate({'opacity':'1'},1500);
                      
              }
              
          }); 
      
      });
      
  });