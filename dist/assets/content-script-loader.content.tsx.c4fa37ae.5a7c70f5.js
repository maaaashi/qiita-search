(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/content.tsx.c4fa37ae.js")
    );
  })().catch(console.error);

})();
