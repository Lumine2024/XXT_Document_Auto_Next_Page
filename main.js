// ==UserScript==
// @name         XXT Auto Click Next Page
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  自动下一页，没有下一页则上一页
// @author       Lumine2024
// @match        *://*.chaoxing.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    function main() {
        // 每隔5秒点击一次按钮
        setInterval(function () {
            // 查找按钮元素
            var button = document.querySelector('a.ml40.nodeItem.r');
            if (button) {
                button.click();
            } else {
                var prev = document.querySelector('a.nodeItem.l');
                if (prev) {
                    prev.click();
                } else {
                    console.log('没有找到按钮');
                }
            }
        }, 5000);
    }

    main();
})();
