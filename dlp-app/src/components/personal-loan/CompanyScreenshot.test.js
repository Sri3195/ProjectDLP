import React from "react";
import {createRenderer} from 'react-test-renderer/shallow'

import { MemoryRouter } from "react-router-dom";
import Company from './Company'
//create a test renderer
const renderer=createRenderer()

describe("Company Screenshot test",()=>{
    test('renders correctly the company component',()=>{
        renderer.render(
            <MemoryRouter initialEntries={['/']}>
                <Company/>
          </MemoryRouter>
        );
        const result=renderer.getRenderOutput();
        expect(result).toMatchSnapshot();
    });
});