'use strict';

import loader from './modules/site/loader.js';
import styler from './modules/site/styler.js';
import watcher from './modules/site/mutation.js';
import scrapeLegacy from './modules/site/scrapeLegacy.js';
import scrapeRedFlagged from './modules/site/scrapeRedFlagged.js';
import parsedLegacy from './modules/site/parseLegacy.js';
import parsedRedFlagged from './modules/site/parseLegacy.js';
import assets from './modules/site/assets';

async function init() {
  const organicallyVerifiedUsers = await loader(assets.dataUrl);
  const redFlaggedUsers = await loader(assets.redFlagDataUrl);

  watcher(() => {
    scrapeLegacy((nodes, type) => {
      parsedLegacy(nodes, type, organicallyVerifiedUsers);
    });
    scrapeRedFlagged((nodes, type) => {
      parsedRedFlagged(nodes, type, redFlaggedUsers);
    })
  });
}

init();
