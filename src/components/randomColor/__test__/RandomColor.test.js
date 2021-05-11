import React from 'react';
import RandomColor from '../RandomColor'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';

let getByTestId;

beforeEach(() => {
    const component = render(<RandomColor />);
    getByTestId = component.getByTestId;
})

test('that the div el has styles', () => {
    const divEl = getByTestId('div');

    expect(divEl).toHaveStyle('background: color, height: 300px, width: 300px')
})