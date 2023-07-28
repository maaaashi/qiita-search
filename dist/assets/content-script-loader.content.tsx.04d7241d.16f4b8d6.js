(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/content.tsx.04d7241d.js")
    );
  })().catch(console.error);

})();
