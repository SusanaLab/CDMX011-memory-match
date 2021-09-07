import {App, shuffle} from './App.js';

const cards = [
  { id: 'Paris', image: 'https://i.pinimg.com/564x/9a/21/46/9a214675a1c63c5d7f3ba6b55c60aec4.jpg', bgColor: '#339933' },
  { id: 'Santorini', image: 'https://i.pinimg.com/564x/5f/45/84/5f45843f0b79c6cf9a645bcc47dff012.jpg', bgColor: '#339933' },
  { id: 'Morocco', image: 'https://i.pinimg.com/564x/cc/ba/ce/ccbaceebf9512bd5e1e4eed38f863421.jpg', bgColor: '#339933' }, 
]


describe('App', () => {
  it('should render without crashing', () => {
    const el = App();
    expect(el instanceof HTMLElement).toBe(true);
  });
  
  const prueba = App ();
  test('Test sobre render', () => {
       expect(prueba.outerHTML).toBe('<div><button class="btn-first">Haz clic aqui</button></div>');
  });
      
  test('Comportamiento al hacer clic', () => {
      const button = prueba.querySelector('.start');
      button.click();
      expect(prueba.outerHTML).toBe('<div><button class="btn-first">Haz clic aqui</button><p>Buenas tardes</p></div>');
  });
  });    


 describe('Shufle function', () => {
  it('It to be a function', () => {
    expect(typeof shuffle).toBe('function');
  });
  it('returns a new mixed array', () => {
      const mix = shuffle(cards);
    
      expect(mix[0]).not.toBe("Paris");
      expect(mix[1]).not.toBe("Santorini");
      expect(mix[2]).not.toBe("Morocco");
  });
});
