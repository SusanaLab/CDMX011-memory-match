import {App, shuffle} from './App.js';

const cards = [
  { id: 'Spain', image: 'https://i.pinimg.com/564x/a7/1b/7b/a71b7b0c3047c2e2c5ef44f64942b9a9.jpg', bgColor: '#1572B6' },
  { id: 'China', image: 'https://i.pinimg.com/564x/2a/42/f1/2a42f1028dd30fdd1317d91441916cd5.jpg', bgColor: '#1572B6' },
  { id: 'Indonesia', image: 'https://i.pinimg.com/564x/17/41/65/17416552b3214b7c54fa036b6a337a62.jpg', bgColor: '#1572B6' },
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
    
      expect(mix[0]).not.toBe("Spain");
      expect(mix[1]).not.toBe("China");
      expect(mix[2]).not.toBe("Indonesia");
  });
});
