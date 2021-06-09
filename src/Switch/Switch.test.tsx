import * as React from 'react';
import { render } from '@testing-library/react';
import Switch from './Switch';

describe('Switch', () => {
  test('renders switch element', () => {
    const { getByRole } = render(<Switch />);
    expect(getByRole('switch')).not.toEqual(null);
  });

  test('sets aria-checked attribute to true', () => {
    const { getByRole } = render(<Switch checked />);                    // aria-checked attribute accepts strings instead of boolean.
    expect(getByRole('switch')).toHaveAttribute('aria-checked', "true"); // Edited the boolean true to "true"
  });

  test('sets aria-checked attribute to false', () => {
    const { getByRole } = render(<Switch checked={false} />);
    expect(getByRole('switch')).toHaveAttribute('aria-checked', "false"); //Edited the boolean false to "false"
  });
})
