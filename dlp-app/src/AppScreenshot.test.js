import React from "react";
import { render } from "react-dom";
import {createRenderer} from 'react-test-renderer/shallow'
import App from "./App";

const renderer=createRenderer();

describe('App Screenshot Test',()=>{

    test('renders corretly the app component',()=>{
        renderer.render(<App/>)

        const result=renderer.getRenderOutput();
        expect(result).toMatchSnapshot()
    });



});