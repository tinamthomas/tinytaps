/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import SelectableCard from '../../src/components/SelectableCard';

it('renders correctly', () => {
  render(
    <SelectableCard title="Bunny" description="Hop litte bunny hop hop hop" image="/images/bunny.jpg" />
  );
  
  expect(screen.getByText('Bunny')).toBeDefined();
  expect(screen.getByText('Hop litte bunny hop hop hop')).toBeDefined();
  expect(screen.getByAltText('green iguana').src).toContain('/images/bunny.jpg');
});