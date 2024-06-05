// ==UserScript==
// @name         Remove YouTube Shorts
// @namespace    https://github.com/Meg923a
// @version      0.1
// @author       Meg923a
// @match        *://*.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// ==/UserScript==
(() => {
    const removeShorts = () => {
        const shortsTab = document.querySelectorAll(".style-scope:nth-child(1) > #items > .style-scope:nth-child(2) > #endpoint");
        shortsTab.forEach((element) => {
            element.remove();
        });

        const mainPageShortsElements = document.querySelectorAll("[is-shorts]");
        mainPageShortsElements.forEach((element) => {
            element.remove();
        });

        const watchPageShortsElements = document.querySelectorAll("ytd-reel-shelf-renderer");
        watchPageShortsElements.forEach((element) => {
            element.remove();
        });
    };

    const observer = new MutationObserver(removeShorts);
    observer.observe(document, {
        childList: true,
        subtree: true,
    });

    removeShorts();
})();
