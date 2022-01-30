import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';
afterEach(cleanup);

describe('Contact is rendering', () => {
    it('renders', () => {
        render(<ContactForm></ContactForm>);
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<ContactForm></ContactForm>);
        expect(asFragment()).toMatchSnapshot();
    });

    it('matches h1 test id', () => {
        const { getByTestId } = render(<ContactForm></ContactForm>)
        expect(getByTestId('h1tag')).toHaveTextContent('Contact me')
    });
    
    it('matches button test id', () => {
        const { getByTestId } = render(<ContactForm></ContactForm>)
        expect(getByTestId('buttontag')).toHaveTextContent('Submit')
    });
})