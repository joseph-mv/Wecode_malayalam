import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Login from "../../src/components/Authentication/loginPopup/LoginPopup"


describe('SignUp',()=>{
   
    beforeEach(()=> render(<Login/>))
    it('render the signup form',()=>{
        expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
        expect(screen.getByLabelText("Password")).toBeInTheDocument();
        expect(screen.getByRole('button',{name:/log in/i})).toBeInTheDocument()
    })

    it('allows user to input passwords with mismatch , then correct it and submit', async () => {
        // Using userEvent to simulate user input
        const emailInput = screen.getByLabelText(/email/i);
        const passwordInput = screen.getByLabelText("Password");
        const signUpBtn=screen.getByRole('button',{name:/log in/i})
        await userEvent.type(emailInput, 'john@example.com');
        await userEvent.type(passwordInput, '12345678');
    
        expect(emailInput).toHaveValue('john@example.com');
        expect(passwordInput).toHaveValue('12345678');
        // Submitting the form
        await userEvent.click(signUpBtn);
    
        // Verifying form submission status
        expect(screen.getByText('Message sent successfully!')).toBeInTheDocument();
      });
})