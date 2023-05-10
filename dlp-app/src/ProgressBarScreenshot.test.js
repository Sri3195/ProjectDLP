import React from "react";
import { render } from "react-dom";
import {createRenderer} from 'react-test-renderer/shallow'

import { MemoryRouter } from "react-router-dom";
import ProgressBar from "./ProgressBar";


//create a test renderer
const renderer=createRenderer()

describe("Progress Bar Screenshot test",()=>{
    test('renders correctly the progress bar',()=>{
        renderer.render(
            <MemoryRouter initialEntries={['/']}>
            <ProgressBar progress={50}/>
          </MemoryRouter>
        );
        const result=renderer.getRenderOutput();
        expect(result).toMatchSnapshot();
    });
})