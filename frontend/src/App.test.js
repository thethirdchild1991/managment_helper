// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });


import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import {APIAddr} from './configs/APISettings'
import ProjectFormConfig from './configs/ProjectFormConfig'
import SignInFormConfig from './configs/SignInFormConfig'
import SignUpFormConfig from './configs/SignUpFormConfig'
import LabeledInput from './LabeledInput'
import AppForm from './AppForm'

import App from './App';

//-------------------------------------------------------------------------
describe('LabeledInput', () => {
  const LabeledInputParams = {
    text:'agent',        
    id: 'pro_agent',
    required: true,
    BR : true,

  }

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(                
      <LabeledInput params={LabeledInputParams} />
    , div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
//-------------------------------------------------------------------------
describe('AppForm', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(                
      <AppForm
        id='SignUpForm'
        url={APIAddr}
        proto={SignUpFormConfig} 
        submitText="SignUp" /> 
    , div);
    ReactDOM.unmountComponentAtNode(div);
  });

  // test('has a valid snapshot', () => {
  //   const component = renderer.create( <App /> );
  //   const tree = component.toJSON();
  //   expect(tree).toMatchSnapshot();
  // });



});