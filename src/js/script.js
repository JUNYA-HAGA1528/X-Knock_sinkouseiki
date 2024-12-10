
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



    function scrollToElementWithOffset(elementId, offset) {
        const element = document.getElementById(elementId);
        if (element) {
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset; // 要素の位置を取得
            window.scrollTo({ 
                top: elementPosition - offset, // オフセット分引く
                behavior: 'smooth' // スムーズスクロール
            });
        }
    }
    
    // イベントリスナーの共通化
    document.querySelectorAll('.scroll-first, .scroll-second, .scroll-third, .scroll-four, .scroll-five, .scroll-six').forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault(); // デフォルトの動作を防ぐ
    
            // ボタンに対応するIDを取得
            const isSp = window.innerWidth <= 768; // スマホサイズの条件
            const baseId = button.classList.contains('scroll-first') ? 'type-pc__item-first' :
                           button.classList.contains('scroll-second') ? 'type-pc__item-second' :
                           button.classList.contains('scroll-third') ? 'type-pc__item-third' :
                           button.classList.contains('scroll-four') ? 'type-pc__item-four' :
                           button.classList.contains('scroll-five') ? 'type-pc__item-five' :
                           button.classList.contains('scroll-six') ? 'type-pc__item-six' : null;
    
            if (baseId) {
                const targetId = isSp ? `${baseId}--sp` : baseId; // デバイスに応じたIDを選択
                scrollToElementWithOffset(targetId, 200);
            }
        });
    });
    
    
});
