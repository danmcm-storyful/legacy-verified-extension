'use strict';

import loader from './modules/site/loader.js';
import styler from './modules/site/styler.js';
import watcher from './modules/site/mutation.js';
import scrapeLegacy from './modules/site/scrapeLegacy.js';
import scrapeRedFlagged from './modules/site/scrapeRedFlagged.js';
import parseLegacy from './modules/site/parseLegacy.js';
import parseRedFlagged from './modules/site/parseRedFlagged.js';
import assets from './modules/site/assets';

async function init() {
  const organicallyVerifiedUsers = await loader(assets.dataUrl);
  const redFlaggedUsers = await loader(assets.redFlagDataUrl);

  watcher(() => {
    scrapeLegacy((nodes, type) => {
      parseLegacy(nodes, type, organicallyVerifiedUsers);
    });
    scrapeRedFlagged((nodes, type) => {
      parseRedFlagged(nodes, type, redFlaggedUsers);
    });
  });
}

init();
