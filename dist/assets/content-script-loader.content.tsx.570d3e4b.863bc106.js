(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/content.tsx.570d3e4b.js")
    );
  })().catch(console.error);

})();
