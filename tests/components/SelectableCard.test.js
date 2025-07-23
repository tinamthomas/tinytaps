/**
 * @jest-environment jsdom
 */
import { render, screen, act } from '@testing-library/react';
import SelectableCard from '../../src/components/SelectableCard';

it('renders blank card by default with no image', () => {
  render(
    <SelectableCard title="Bunny" description="Hop little bunny hop hop hop" image="/images/bunny.jpg" />
  );
  
  expect(screen.getByText('Bunny')).toBeDefined();
  expect(screen.getByText('Hop little bunny hop hop hop')).toBeDefined();
  
  const images = screen.queryAllByRole('img');
  expect(images).toHaveLength(0);
  
  const cardContainer = screen.getByRole('button'); // CardActionArea renders as button
  expect(cardContainer).toBeDefined();
});

it('should show image when clicked', () => {
  render(
    <SelectableCard title="Bunny" description="Hop little bunny hop hop hop" image="/images/bunny.jpg" />
  );
  
  expect(screen.queryAllByRole('img')).toHaveLength(0);
  
  act(() => {
    screen.getByRole('button').click();
  });
  
  const images = screen.getAllByRole('img');
  expect(images).toHaveLength(1);
  expect(images[0].alt).toBe('Bunny');
  expect(images[0].src).toContain('/images/bunny.jpg');
  
  expect(screen.getByText('Bunny')).toBeDefined();
  expect(screen.getByText('Hop little bunny hop hop hop')).toBeDefined();
});

it('should hide image when clicked again', () => {
  render(
    <SelectableCard title="Bunny" description="Hop little bunny hop hop hop" image="/images/bunny.jpg" />
  );
  
  act(() => {
    screen.getByRole('button').click();
  });
  
  expect(screen.getAllByRole('img')).toHaveLength(1);
  
  act(() => {
    screen.getByRole('button').click();
  });
  
  expect(screen.queryAllByRole('img')).toHaveLength(0);
});
