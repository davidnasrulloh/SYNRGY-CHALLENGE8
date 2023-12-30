import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import FormFilter from '../FormFilter';
import { BASE_URL_API } from '../../../types';

describe('FormFilter Component', () => {
  test('renders FormFilter component', () => {
    render(<FormFilter />);
    expect(screen.getByLabelText(/Type Driver/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Tanggal/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Time Options/i)).toBeInTheDocument();
  });

  test('filters cars correctly', async () => {
    render(<FormFilter />);

    fireEvent.click(screen.getByText(/Cari Mobil/i));

    await screen.findByText(/Car 1/i);

    expect(global.fetch).toHaveBeenCalledWith(`${BASE_URL_API}/api/cars`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({

      }),
    });
  });

});
