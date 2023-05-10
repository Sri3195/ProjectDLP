import React from "react";
import {render} from 'react-dom';
import {createRenderer} from 'react-test-renderer/shallow';
import PhoneNumber from "./PhoneNumber";
import { MemoryRouter } from "react-router-dom";

//creates a test renderer
const renderer=createRenderer();

describe('PhoneNumber Screenshot Test',()=>{
    test('renders correctly the phone number component',()=>{
        //renderers the component using the test renderer
        renderer.render(
            <MemoryRouter initialEntries={['/']}>
        <PhoneNumber/>
      </MemoryRouter>
        );
        //get the rendered output
        const result=renderer.getRenderOutput();

        //assest the expected snapshot
        expect(result).toMatchSnapshot();

    });

})