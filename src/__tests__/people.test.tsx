import PersonComponent from '../PersonComponent';
import { render, screen } from '@testing-library/react';



test("should return age", () => {
    render(<PersonComponent name="Randy" index={0} location="Detroit" getAge={45} />)
    let person0 = screen.getByTestId('people-0');
    expect(person0).toBeInTheDocument();
    expect(person0).toContainHTML('<p>45</p>')
});
    