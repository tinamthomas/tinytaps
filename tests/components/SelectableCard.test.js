/**
 * @jest-environment jsdom
 */
import { render, screen, act } from '@testing-library/react';
import SelectableCard from '../../src/components/SelectableCard';

it('renders hide image by default', () => {
  render(
    <SelectableCard title="Bunny" description="Hop litte bunny hop hop hop" image="/images/bunny.jpg" defaultImage="/images/card-back-1.jpg" />
  );
  
  expect(screen.getByText('Bunny')).toBeDefined();
  expect(screen.getByText('Hop litte bunny hop hop hop')).toBeDefined();
  expect(screen.getByAltText('Bunny').src).toContain('/images/card-back-1.jpg');
});

it('should show image when clicked', () => {
  let wrapper = render(
    <SelectableCard title="Bunny" description="Hop litte bunny hop hop hop" image="/images/bunny.jpg" />
  );
  act(() => {
    wrapper.getByText('Bunny').click();
  });
  expect(screen.getByText('Bunny')).toBeDefined();
  expect(screen.getByText('Hop litte bunny hop hop hop')).toBeDefined();
  expect(screen.getByAltText('Bunny').src).toContain('/images/bunny.jpg');
});
