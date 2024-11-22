// Header.test.tsx
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import {userEvent} from "@testing-library/user-event";
import { describe, it, expect, beforeEach } from "vitest";
import { Header } from "../../src/components/Header/Header";

describe("Header component", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
  });

  it("should render the logo", () => {
    const logo = screen.getByAltText("logo");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "images/logo.png");
  });

  it("should render the navigation links", () => {
    const links = [
      { icon: "Home", text: "Home", href: "/" },
      { icon: "Events", text: "Events", href: "/destinations" },
      { icon: "Resources", text: "Resources", href: "/trips" },
      { icon: "Discussions", text: "Discussions", href: "/about" },
      { icon: "Colleges", text: "Colleges", href: "/contact" },
      { icon: "Account", text: "Account", href: "/account" },
    ];

    links.forEach((link) => {
      const linkElement = screen.getByText(link.text);
      expect(linkElement).toBeInTheDocument();
      expect(linkElement.closest("a")).toHaveAttribute("href", link.href);
    });
  });

  it('toggles the menu when checkbox is checked and unchecked', async () => {

    const checkbox = screen.getByRole('checkbox');
    const navbar=screen.getByRole('navigation')

    // Initially, the checkbox should be unchecked
    expect(checkbox).not.toBeChecked();
    expect(navbar).not.toHaveClass('z-10')

    // Simulate a click to check the checkbox using userEvent
    await userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    expect(navbar).toHaveClass('z-10')
    // Simulate a click to uncheck the checkbox using userEvent
    await userEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });
 
});
