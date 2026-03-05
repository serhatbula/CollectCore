// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CollectCore title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CollectCore/i);
    expect(titleElement).toBeInTheDocument();
});
