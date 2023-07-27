(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/content.tsx.19dbbb0e.js")
    );
  })().catch(console.error);

})();
