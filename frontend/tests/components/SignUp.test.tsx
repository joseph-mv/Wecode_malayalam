import { render, screen } from "@testing-library/react"
import Signup from "../../src/components/Authentication/SignupPopup/SignupPopup"
import userEvent from "@testing-library/user-event"


describe('SignUp',()=>{
   
    beforeEach(()=> render(<Signup/>))
    it('render the signup form',()=>{
        expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Confirm Password/i)).toBeInTheDocument();
        expect(screen.getByLabelText("Password")).toBeInTheDocument();
        expect(screen.getByRole('button',{name:/Sign up/i})).toBeInTheDocument()
    })

    it('allows user to input passwords with mismatch , then correct it and submit', async () => {
        // Using userEvent to simulate user input
        const emailInput = screen.getByLabelText(/email/i);
        const passwordInput = screen.getByLabelText("Password");
        const ConfirmPasswordInput = screen.getByLabelText("Confirm Password");
        const signUpBtn=screen.getByRole('button',{name:/Sign up/i})
        await userEvent.type(emailInput, 'john@example.com');
        await userEvent.type(passwordInput, '12345678');
        await userEvent.type(ConfirmPasswordInput, '1234567');
    
        expect(emailInput).toHaveValue('john@example.com');
        expect(passwordInput).toHaveValue('12345678');
        expect(ConfirmPasswordInput).toHaveValue('1234567')
        expect(screen.getByText(/passwords do not match/i)).toBeInTheDocument();
        await userEvent.type(ConfirmPasswordInput, '8');
        // Submitting the form
        await userEvent.click(signUpBtn);
    
        // Verifying form submission status
        // expect(screen.getByText('Message sent successfully!')).toBeInTheDocument();
      });
})