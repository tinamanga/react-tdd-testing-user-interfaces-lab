import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "../App";


test("displays an image with alt text identifying the content", () => {
    // Arrange
    render(<App />);
  
    // Act
    const image = screen.getByAltText(/your image/i);
  
    // Assert
    expect(image).toBeInTheDocument();
  });
  
  test("displays a second-level heading with the text 'About Me'", () => {
    // Arrange
    render(<App />);
  
    // Act
    const aboutMeHeading = screen.getByRole("heading", {
      name: /about me/i,
      level: 2,
    });
  
    // Assert
    expect(aboutMeHeading).toBeInTheDocument();
  });
  
  test("displays a paragraph for the biography", () => {
    // Arrange
    render(<App />);
  
    // Act
    const bioParagraph = screen.getByText(/your biography/i);
  
    // Assert
    expect(bioParagraph).toBeInTheDocument();
  });
  
  test("displays a link to GitHub with the correct href", () => {
    // Arrange
    render(<App />);
  
    // Act
    const githubLink = screen.getByRole("link", {
      name: /github/i,
    });
  
    // Assert
    expect(githubLink).toHaveAttribute("href", "https://github.com/yourusername");
  });
  
  test("displays a link to LinkedIn with the correct href", () => {
    // Arrange
    render(<App />);
  
    // Act
    const linkedinLink = screen.getByRole("link", {
      name: /linkedin/i,
    });
  
    // Assert
    expect(linkedinLink).toHaveAttribute("href", "https://linkedin.com/in/yourusername");
  });
  