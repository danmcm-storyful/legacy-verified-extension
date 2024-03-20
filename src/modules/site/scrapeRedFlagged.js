function scrapeRedFlagged(callback) {
  console.log(`scrapeRedFlagged Called`)
  const tweets = document.querySelectorAll(
    '[data-testid="User-Name"]:not(.redflagged-checked)'
  );

  const scheme = document.querySelector(
    'script[type="application/ld+json"]:not(.redflagged-checked)'
  );

  const card = document.querySelector(
    '[data-testid="HoverCard"] > div:not(.redflagged-checked) '
  );

  const cell = document.querySelectorAll(
    '[data-testid="UserCell"]:not(.redflagged-checked)'
  );

  if (tweets.length > 0) {
    callback(tweets, 'tweets');
  }

  if (scheme) {
    callback(scheme, 'user');
  }

  if (card) {
    callback(card, 'card');
  }

  if (cell.length > 0) {
    callback(cell, 'cell');
  }
}

export default scrapeRedFlagged;
