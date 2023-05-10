import React from "react";
import {createRenderer} from 'react-test-renderer/shallow'

import { MemoryRouter } from "react-router-dom";
import BrandType from "./BrandType";
//create a test renderer
const renderer=createRenderer()

describe("Brand Type Screenshot test",()=>{
    test('renders correctly the brand type component',()=>{
        renderer.render(
            <MemoryRouter initialEntries={['/']}>
                <BrandType/>
          </MemoryRouter>
        );
        const result=renderer.getRenderOutput();
        expect(result).toMatchSnapshot();
    });
})