import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // Za proširene expect funkcije
import Products, { ComponentProductVersion } from './Products'; // Prilagodi putanju prema mestu gde je komponenta
import OneProduct from '../components/OneProduct';
import { describe, it, expect, vi } from 'vitest';
import { Product } from '../models/product';

describe('Products component', () => {
  it('should call onAdd when the add button is clicked', () => {
    // Kreiraj mock funkciju za onAdd
    const handleAdd = vi.fn();

    // Dummy proizvodi za testiranje
    const products: Product[] = [
      {
        id: 1,
        name: 'Product 1',
        description: 'Description 1',
        price: 100,
        imagePath: 'path/to/image1.png',
        amount: 0,
      },
      {
        id: 2,
        name: 'Product 2',
        description: 'Description 2',
        price: 200,
        imagePath: 'path/to/image2.png',
        amount: 0,
      }
    ];

    // Renderuj Products komponentu sa mock funkcijama
    render(
      <Products
        products={products}
        onAdd={handleAdd}
        onRemove={vi.fn()} // Možeš koristiti vi.fn() za funkcije koje ne testiramo
        onDelete={vi.fn()}
        version={ComponentProductVersion.primary}
      />
    );

    // Pronađi dugme za dodavanje proizvoda
    const addButton1 = screen.getAllByTestId('plus-button')[0]; // Prvi proizvod
    const addButton2 = screen.getAllByTestId('plus-button')[1]; // Drugi proizvod

    // Klikni na dugme za dodavanje
    fireEvent.click(addButton1);
    fireEvent.click(addButton2);

    // Proveri da li je mock funkcija pozvana sa odgovarajućim ID-evima
    expect(handleAdd).toHaveBeenCalledWith(1); // ID prvog proizvoda
    expect(handleAdd).toHaveBeenCalledWith(2); // ID drugog proizvoda

    // Proveri broj poziva mock funkcije
    expect(handleAdd).toHaveBeenCalledTimes(2); // Trebalo bi da bude pozvano dva puta
  });
});
