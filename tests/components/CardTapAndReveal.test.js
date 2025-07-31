import { render, screen, fireEvent } from '@testing-library/react';
import CardTapAndReveal from '../../src/components/CardTapAndReveal';
import cards from '../../src/constants/cards';

it('renders all animal cards by default', () => {
  render(<CardTapAndReveal />);
  const cardsElements = screen.getAllByRole('button');
  expect(cardsElements).toHaveLength(cards.animals.length);
  
});
it('renders all vehicle cards when the vehicle tab is clicked', () => {
  render(<CardTapAndReveal />);
  const vehicleTab = screen.getByText('Vehicles');
  fireEvent.click(vehicleTab);
  const cardsElements = screen.getAllByRole('button');
  expect(cardsElements).toHaveLength(cards.vehicles.length);
});

it('renders all fruits cards when the fruits tab is clicked', () => {
  render(<CardTapAndReveal />);
  const fruitsTab = screen.getByText('Fruits');
  fireEvent.click(fruitsTab);
  const cardsElements = screen.getAllByRole('button');
  expect(cardsElements).toHaveLength(cards.fruits.length);
});
