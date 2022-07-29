import App from "../App";
import { render, getByTestId, screen } from '@testing-library/react';

test("should print name", () => {
    render(<App />);
    let person0 = screen.getByTestId("people-0");
    screen.getByRole('heading', {name: "Randy"})
    
    expect(person0).toBeInTheDocument();
    expect(person0).toContainHTML("Randy");

})

