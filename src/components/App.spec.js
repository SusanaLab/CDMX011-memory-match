import {App} from './App.js';

describe('App', () => {
  it('should render without crashing', () => {
    const el = App();
    expect(el instanceof HTMLElement).toBe(true);
  });

  /*test('Test sobre render', () => {
    expect(el.outerHTML).toBe('<div><button class="btn-first">Haz clic aqui</button></div>');
  });

  test('Comportamiento al hacer clic', () => {
    const button = el.querySelector('.start');
    button.click();
    expect(el.outerHTML).toBe('<div><button class="btn-first">Haz clic aqui</button><p>Buenas tardes</p></div>');
  });
*/
});

