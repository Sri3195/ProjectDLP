import React from "react";
import {createRenderer} from 'react-test-renderer/shallow'

import { MemoryRouter } from "react-router-dom";
import PersonalDetails from './PersonalDetails'
//create a test renderer
const renderer=createRenderer()

describe("Personal Details Screenshot test",()=>{
    test('renders correctly the personal details component',()=>{
        renderer.render(
            <MemoryRouter initialEntries={['/']}>
                <PersonalDetails/>
          </MemoryRouter>
        );
        const result=renderer.getRenderOutput();
        expect(result).toMatchSnapshot();
    });
});