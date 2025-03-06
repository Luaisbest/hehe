// ==UserScript==
// @name         Bypass Yeumoney
// @namespace    https://github.com/yourusername/bypass-yeumoney
// @version      1.0
// @description  Tự động bỏ qua trang rút gọn Yeumoney.com
// @author       Anh Iu
// @match        *://yeumoney.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Ví dụ 1: Auto bấm nút "Tiếp tục"
    function autoClickButton() {
        const button = document.querySelector('button#btn-main'); // Tùy theo trang có thể thay đổi
        if (button) {
            button.click();
        }
    }

    // Ví dụ 2: Auto redirect sau khi đếm ngược xong
    function autoRedirect() {
        const link = document.querySelector('a#next-link'); // Thường link thật nằm đây
        if (link) {
            window.location.href = link.href;
        }
    }

    // Ví dụ 3: Auto skip quảng cáo (nếu có)
    function skipAds() {
        const skipButton = document.querySelector('.skip-ad-button');
        if (skipButton) {
            skipButton.click();
        }
    }

    // Ghép tất cả các hàm lại
    setTimeout(() => {
        autoClickButton();
        autoRedirect();
        skipAds();
    }, 1000); // Delay 1 giây để đảm bảo trang load xong

})();
