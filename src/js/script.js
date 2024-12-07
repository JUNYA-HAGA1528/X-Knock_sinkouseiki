
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
    $(window).on('scroll', function () {
        var scrollTop = $(window).scrollTop();
        var headerNav = $('.headerNav');

        if (scrollTop > 100) {
            headerNav.addClass('scrolled');
        } else {
            headerNav.removeClass('scrolled');
        }
    });

    $('.headerNav__logoLink').on('click', function(event) {
        event.preventDefault(); 
        $('html, body').animate({ scrollTop: 0 }, 1000); 
    });

    window.addEventListener('scroll', function() {
        const headerNav = document.querySelector('.headerNav');
        const scrollPosition = window.scrollY;

        if (scrollPosition > 500) {
            headerNav.classList.add('visible');
        } else {
            headerNav.classList.remove('visible');
        }
    });


    jQuery(function ($) {
        $('a[href^="#"]').on('click', function(event) {
            event.preventDefault(); // デフォルトのページスクロールを無効化
            var target = $(this.getAttribute('href')); // リンク先の要素を取得
    
            if (target.length) {
                var position = target.offset().top - 50; // 200px分下に調整
                $('html, body').animate({ scrollTop: position }, 300); // スムーズスクロール（600ms）
            }
        });
    });
    
    // スクロールヒント
    new ScrollHint('.js-scroll', {
        i18n: {
        scrollable: '右にスクロールできます'
        },
    });


});
