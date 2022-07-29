import App from "../App";
import { render, getByTestId, screen } from '@testing-library/react';

test("should print name", () => {
    render(<App />);
    screen.getByRole('heading', {name: "Randy"})
})

