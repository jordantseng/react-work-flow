/* eslint-disable react/react-in-jsx-scope */
import { describe, expect, it } from 'vitest';
import { render, screen } from '../test-utils';
import App from './App';

describe('Simple working test', () => {
  it('the title is visible', () => {
    render(<App />);

    const welcomeText = screen.getByText(/Vite \+ React/i);

    screen.debug(welcomeText);

    expect(screen.getByText(/Vite \+ React/i)).toBeInTheDocument();
  });
});
