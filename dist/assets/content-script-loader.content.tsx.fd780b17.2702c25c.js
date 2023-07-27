(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/content.tsx.fd780b17.js")
    );
  })().catch(console.error);

})();
