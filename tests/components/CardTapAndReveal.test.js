import { render, screen, act } from '@testing-library/react';
import CardTapAndReveal from '../../src/components/CardTapAndReveal';
import cards from '../../src/constants/cards';

it('renders all cards', () => {
  render(<CardTapAndReveal />);
  const cardsElements = screen.getAllByRole('button');
  expect(cardsElements).toHaveLength(cards.length);
  
});