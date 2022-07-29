import App from "../App";
import { render, getByTestId, screen } from '@testing-library/react';

it("should print name", () => {
    render(<App />);
    const [people] = screen.getAllByTestId("people");
    
    // console.log(people);
    expect(people).toBeInTheDocument();
    expect(people).toContainHTML("Detroit")
})