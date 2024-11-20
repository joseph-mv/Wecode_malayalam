
import { render, screen } from '@testing-library/react';
import { App } from '../src/App';

describe('App Component', () => {
  it('renders the heading', () => {
    render(<App/>);
    const heading = screen.getByText(/web/i);
    expect(heading).toBeInTheDocument();
  });


});
