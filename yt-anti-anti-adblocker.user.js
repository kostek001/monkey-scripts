// ==UserScript==
// @name        YT Anti Anti Adblocker
// @namespace   Violentmonkey Scripts
// @match       *://*.youtube.*/*
// @grant       none
// @version     1.0
// @author      Kostek001
// @description 10/19/2023, 6:44:34 PM
// ==/UserScript==

const selector = "tp-yt-paper-dialog";

if (document.querySelector(selector)) {
  document.querySelector(selector).remove();
}

const observer = new MutationObserver(mutations => {
  if (document.querySelector(selector)) {
    document.querySelector(selector).remove()
    document.querySelector("video.video-stream").addEventListener("pause", function () {
      this.play();
    }, { once: true });
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});
