import { render, screen, act } from '@testing-library/react';
import CardSet from '../../src/components/CardSet';
import cards from '../../src/constants/cards';

it('renders all cards', () => {
  render(<CardSet />);
  const cardsElements = screen.getAllByRole('button');
  expect(cardsElements).toHaveLength(cards.length);
  
});