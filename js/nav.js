(function($) { 
    $(function() { 

      // If a link has a dropdown, add sub menu toggle.
      $('nav ul li a:not(:only-child)').click(function(e) {

        $(this).siblings('.navbar-dropdown').fadeToggle();

        // Close dropdown when select another dropdown
        $('.navbar-dropdown').not($(this).siblings()).hide();
        e.stopPropagation();
      });
  
  
      // Click outside the dropdown will remove the dropdown class
      $('html').click(function() {
        $('.navbar-dropdown').hide();
      });

    }); 
  })(jQuery); 