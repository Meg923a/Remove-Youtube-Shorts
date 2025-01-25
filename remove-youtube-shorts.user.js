// ==UserScript==
// @name         Remove YouTube Shorts
// @namespace    https://github.com/Meg923a
// @version      2025-01-26
// @description  A simple script to remove Youtube shorts.
// @author       Meg923a
// @match        *://*.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// ==/UserScript==

(() => {
    const removeShorts = () => {
        const shortsTab = document.querySelectorAll(
            ".style-scope:nth-child(1) > #items > .style-scope:nth-child(2) > #endpoint, .ytd-mini-guide-renderer:nth-child(2) > #endpoint"
        );
        const mainPageShorts = document.querySelectorAll(
            "[is-shorts]"
        );
        const watchPageShorts = document.querySelectorAll(
            "ytd-reel-shelf-renderer"
        );
        const searchPageShorts = document.querySelectorAll(
            "ytd-video-renderer:has(div > ytd-thumbnail > a[href*='shorts'])"
        );

        const shortsElements = [
            ...shortsTab,
            ...mainPageShorts,
            ...watchPageShorts,
            ...searchPageShorts,
        ];

        shortsElements.forEach((element) => {
            element.style = "display: none !important;";
        });
    };

    const observer = new MutationObserver(removeShorts);
    observer.observe(document, {
        childList: true,
        subtree: true,
    });

    removeShorts();
})();
