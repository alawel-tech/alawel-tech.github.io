$(document).ready(function() {
    // Countdown Timer
    function updateCountdown() {
        const now = new Date();
        const launchDate = new Date('2024-12-31T23:59:59');
        const timeDiff = launchDate - now;

        if (timeDiff <= 0) {
            $('#timer').text('We are now open!');
            return;
        }

        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        $('#days').text(String(days).padStart(2, '0'));
        $('#hours').text(String(hours).padStart(2, '0'));
        $('#minutes').text(String(minutes).padStart(2, '0'));
        $('#seconds').text(String(seconds).padStart(2, '0'));
    }

    setInterval(updateCountdown, 1000);

    // Image Gallery
    const images = [
        'images/repair1.jpg',
        'images/repair2.jpg',
        'images/repair3.jpg'
    ];

    // Append images to carousel
    images.forEach(function(image) {
        $('#image-carousel').append(`<div><img src="${image}" alt="Service Image"></div>`);
    });

    // Initialize Slick Carousel
    $('#image-carousel').slick({
        infinite: true,          // Allows continuous scrolling
        slidesToShow: 3,         // Number of slides to show at once
        slidesToScroll: 1,       // Number of slides to scroll at a time
        autoplay: false,         // Disables autoplay
        arrows: true,            // Shows previous/next arrows
        dots: true               // Shows navigation dots
    });
});
