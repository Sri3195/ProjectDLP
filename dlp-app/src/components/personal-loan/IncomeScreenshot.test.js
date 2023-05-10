import React from "react";
import {createRenderer} from 'react-test-renderer/shallow'

import { MemoryRouter } from "react-router-dom";
import Income from './Income'
//create a test renderer
const renderer=createRenderer()

describe("Income Screenshot test",()=>{
    test('renders correctly the income component',()=>{
        renderer.render(
            <MemoryRouter initialEntries={['/']}>
                <Income/>
          </MemoryRouter>
        );
        const result=renderer.getRenderOutput();
        expect(result).toMatchSnapshot();
    });
});