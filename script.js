$(document).ready(function() {
    function updateCountdown() {
        const now = new Date();
        const launchDate = new Date('2025-06-30T00:00:00');
        const timeDiff = launchDate - now;

        if (timeDiff <= 0) {
            $('#countdown').html('<h2>We Are Live!</h2>');
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
    updateCountdown();

    $('.contact-btn').on('click', function(e) {
        e.preventDefault();
        window.location.href = 'mailto:info@alaweltech.com?subject=Alawel Tech Inquiry';
    });
});