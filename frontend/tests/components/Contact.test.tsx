// ContactSection.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import ContactSection from '../../src/components/Contact/Contact';

describe('ContactSection', () => {
    beforeEach(()=>render(<ContactSection />))

    
  it('renders the contact form', () => {
    expect(screen.getByText('Contact Us')).toBeInTheDocument();
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
  });

  it('allows user to input data and submit the form', async () => {
    // Using userEvent to simulate user input
    const nameInput = screen.getByLabelText(/Name/i);
    const emailInput = screen.getByLabelText(/Email/i);
    const messageTextarea = screen.getByLabelText(/Message/i);
    const submitButton = screen.getByRole('button', { name: /Send Message/i });

    await userEvent.type(nameInput, 'John Doe');
    await userEvent.type(emailInput, 'john@example.com');
    await userEvent.type(messageTextarea, 'Hello, this is a test message.');

    expect(nameInput).toHaveValue('John Doe');
    expect(emailInput).toHaveValue('john@example.com');
    expect(messageTextarea).toHaveValue('Hello, this is a test message.');

    // Submitting the form
    await userEvent.click(submitButton);

    // Verifying form submission status
    expect(screen.getByText('Message sent successfully!')).toBeInTheDocument();
  });


});
