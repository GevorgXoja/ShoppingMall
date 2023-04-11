$(document).on('ready', function() {
    $(".center").slick({
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 781,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: true,
                    autoplay: false,
                    // autoplaySpeed: 500,
                },
            }
        ],
        // arrows: true,
        prevArrow: '<div class="slick-custom-arr" ><svg width="43" height="16" viewBox="0 0 43 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M42 9C42.5523 9 43 8.55228 43 8C43 7.44772 42.5523 7 42 7L42 9ZM0.292893 7.29289C-0.0976295 7.68341 -0.0976296 8.31658 0.292892 8.7071L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41422 8L8.07107 2.34314C8.46159 1.95262 8.46159 1.31945 8.07107 0.928929C7.68054 0.538405 7.04738 0.538405 6.65685 0.928929L0.292893 7.29289ZM42 7L1 7L1 9L42 9L42 7Z" fill="#151516"/>\n' +
            '</svg>\n</div>',
        nextArrow: '<div class="slick-custom-arr"><svg width="43" height="16" viewBox="0 0 43 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9L1 7ZM42.7071 8.70711C43.0976 8.31658 43.0976 7.68342 42.7071 7.29289L36.3431 0.928932C35.9526 0.538408 35.3195 0.538408 34.9289 0.928932C34.5384 1.31946 34.5384 1.95262 34.9289 2.34315L40.5858 8L34.9289 13.6569C34.5384 14.0474 34.5384 14.6805 34.9289 15.0711C35.3195 15.4616 35.9526 15.4616 36.3431 15.0711L42.7071 8.70711ZM1 9L42 9V7L1 7L1 9Z" fill="#151516"/>\n' +
            '</svg>\n</div>'

    });
});