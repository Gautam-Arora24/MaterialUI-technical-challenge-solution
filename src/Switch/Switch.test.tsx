import * as React from 'react';
import { render } from '@testing-library/react';
import Switch from './Switch';

describe('Switch', () => {
  test('renders switch element', () => {
    const { getByRole } = render(<Switch />);
    expect(getByRole('switch')).not.toEqual(null);
  });

  test('sets aria-checked attribute to true', () => {
    const { getByRole } = render(<Switch checked />);
    expect(getByRole('switch')).toHaveAttribute('aria-checked', true);
  });

  test('sets aria-checked attribute to false', () => {
    const { getByRole } = render(<Switch checked={false} />);
    expect(getByRole('switch')).toHaveAttribute('aria-checked', false);
  });
})
