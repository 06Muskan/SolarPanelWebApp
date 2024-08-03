// Main.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import Main from '../Main';

test('renders the Main component', () => {
  render(
    <MemoryRouter initialEntries={['/main']}>
      <Main />
    </MemoryRouter>
  );
  const mainContainer = screen.getByTestId('mainContainer');
  expect(mainContainer).toBeInTheDocument();
});
