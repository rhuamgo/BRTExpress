$(document).ready(function() {
    $('#mobile_btn').on('click', function() {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn i').toggleClass('fa-bars fa-xmark');
    });
    
    $('#mobile_nav_list .nav-item a').on('click', function() {
        
       
        $('#mobile_menu').removeClass('active');
        
        
        $('#mobile_btn i').removeClass('fa-xmark').addClass('fa-bars');
    });
    

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function() {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)');
            header.css('opacity', '0.9');
        }

        sections.each(function(i) { 
            const section = $(this);
            const sectionTop = section.offset().top - 110;
            const sectionBottom = sectionTop + section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
             }
        })
        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');

        
    });

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%',
    });

        ScrollReveal().reveal('#serviço', {
        origin: 'left',
        duration: 2000,
        distance: '20%',
    });

    ScrollReveal().reveal('#sobre', {
        origin: 'right',
        duration: 2000,
        distance: '20%',
    });

    
});