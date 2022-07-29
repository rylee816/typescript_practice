import PersonComponent from '../PersonComponent';
import { render, screen } from '@testing-library/react';
import {Person} from '../App';

//testing notes from Drew
//TESTING:
// helps prevent unforseen bugs and side effects and makes code more extensible
// Creates a more proactive rather than reactive style of coding
// Forces you to structure your code in such a way that makes testing easier
// Write code where values aren't "hidden away" or inaccessable from your tests
// Prevents "monolithic" functions and file structures
// Creates a more "intentional" mindset when writing code
// Encourages "developer empathy" (code with other developers/users in mind)

// DOWNSIDES
// more time spend and more code written
// test brittleness
// refactoring constantly changing codebase
// can create a false sense of security
// coverage reports can lie to you


test("Person function 'getAge' should return person age", () => {
    const randy = new Person("Randy", "Detroit", 1977);
    expect(randy.getAge()).toEqual(45)
})


test("should return age", () => {
    render(<PersonComponent name="Randy" index={0} location="Detroit" getAge={45} />)
    let person0 = screen.getByTestId('people-0');
    expect(person0).toBeInTheDocument();
    expect(person0).toContainHTML('<p>45</p>')
});
    