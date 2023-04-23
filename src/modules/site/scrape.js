function scrape(callback) {
  const tweets = document.querySelectorAll(
    '[data-testid="User-Name"]:not(.legacy-checked)'
  );

  const scheme = document.querySelector(
    'script[type="application/ld+json"]:not(.legacy-checked)'
  );

  if (tweets.length > 0) {
    callback(tweets, 'tweets');
  }

  if (scheme) {
    callback(scheme, 'user');
  }
}

export default scrape;
