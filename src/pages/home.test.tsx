// Home.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './Home';
import { expect, describe, it } from 'vitest';

describe('Home component', () => {
  it('should display the correct header, description, and images', () => {
    // Renderovanje Home komponente
    render(<Home />);

    // Provera da li sadrzi header
    expect(screen.getByText('Brza i sveža hrana dostavljena do Vaših vrata!')).toBeInTheDocument();

    // Provera da li sadrzi opis
    expect(screen.getByText('Izaberite iz naše široke ponude jela i uživajte u ukusu kao iz restorana, u udobnosti vašeg doma.')).toBeInTheDocument();

    // Provera slika
    expect(screen.getByAltText('slika 1')).toBeInTheDocument();
    expect(screen.getByAltText('slika 2')).toBeInTheDocument();
  });
});
