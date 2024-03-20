import assets from './assets';

function styler() {
  if (!document.querySelector('[data-legacy="verified"]')) {
    console.log('inserting verified style');
    document.head.insertAdjacentHTML(
      'beforeend',
      `<style data-legacy="verified">.legacy-verified {padding-right: 0} .legacy-verified::after {content:' '; display: inline-block; margin-left: .15em; height: 20px; width: 20px; aspect-ratio: 1/1; background-image: url(${assets.imageUrl}); background-size: contain; background-repeat: no-repeat; background-position: top;}</style>`
    );
  }
  
  if (!document.querySelector('[data-redflagged="verified"]')) {
    console.log('inserting redflagged style');
    document.head.insertAdjacentHTML(
      'beforeend',
      `<style data-redflagged="verified">.redflagged-verified {padding-right: 0} .redflagged-verified::after {content:' '; display: inline-block; margin-left: .15em; height: 20px; width: 20px; aspect-ratio: 1/1; background-image: url(${assets.redFlagUrl}); background-size: contain; background-repeat: no-repeat; background-position: top;}</style>`
    );
  }
}

export default styler();
