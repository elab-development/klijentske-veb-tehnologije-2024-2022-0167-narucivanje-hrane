import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react';
import Products, { ComponentProductVersion } from './Products';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import '@testing-library/jest-dom';
import { expect, describe, it } from 'vitest';

const CartPage = () => <div>Cart Page</div>;

describe('Test funkcionalnosti dugmeta Idi u korpu', () => {
  it('treba da prebaci korisnika na stranicu Korpa', () => {
    //Renderuje elemente
    render(
      <MemoryRouter initialEntries={['/products']}>
        <Routes>
          <Route path="/products" element={
            <Products
              products={[]}
              onAdd={() => {}}
              onRemove={() => {}}
              onDelete={() => {}}
              version={ComponentProductVersion.primary}
            />
          }/>
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </MemoryRouter>
    );

    // Pronalazi dugme "Idi u korpu" 
    const goToCartButton = screen.getByText('Idi u korpu');
    expect(goToCartButton).toBeInTheDocument();

    // Klik na dugme
    fireEvent.click(goToCartButton);

    // Pristupa stranici "Korpa"
    expect(screen.getByText('Cart Page')).toBeInTheDocument();
  });
});
