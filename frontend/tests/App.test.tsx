
import { render } from '@testing-library/react';
import { App } from '../src/App';

describe('App Component', () => {
  it('renders the heading', () => {
    render(<App/>);
    // const heading = screen.getByText(/we/i);
    // expect(heading).toBeInTheDocument();
  });


});
