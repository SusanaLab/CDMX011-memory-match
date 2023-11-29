export function shuffle(cards) {
  for (let i = cards.length - 1; i > 0; i--) {
    const randomNumber = Math.floor(Math.random() * (i + 1));
    const selected = cards[i];
    cards[i] = cards[randomNumber];
    cards[randomNumber] = selected;
  }
  return cards;
}