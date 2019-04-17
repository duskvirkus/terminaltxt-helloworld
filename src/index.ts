import { GraphicsTerminal, CharacterSet, TerminalConfig } from 'terminaltxt';

if (document.readyState === 'complete') {
  init();
} else {
  window.addEventListener('load', init, false);
}

let term: GraphicsTerminal;

function init(): void {
  term = new GraphicsTerminal(
    {
      container: document.getElementById('container')
    } as TerminalConfig,
    new CharacterSet('Hello World!')
  );
  update();
}

function update(): void {
  setTimeout(() => {
    term.update();
    for (let i: number = 0; i < 10; i++) {
      term.setCell(
        Math.floor(Math.random() * term.getCharacterSet().size()),
        Math.floor(Math.random() * term.getWidth()),
        Math.floor(Math.random() * term.getHeight())
      );
    }
    update();
  }, 30);
}
