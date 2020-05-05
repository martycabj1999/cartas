import React from 'react';
import { shallow } from 'enzyme';
import { createStore } from 'redux';
import reducer  from '../../../../reducer';
import { Provider } from 'react-redux';
import Language from '../../../../modules/customization/language/components/Language';

describe("<Language/>", () => {

  const store = createStore(reducer);

  const language = shallow(
    <Provider store={store}>
      <Language />
    </Provider>
  ).dive();

  test("Render del Language", () => {

    expect(language.length).toEqual(1);
    
  });

  test("SnapShot del Language", () => {

    expect(language).toMatchSnapshot();
    
  });

  /*test("Promise updateLanguage", () => {   

    const language = 'es';

    updateLanguage(language).then( response => {
        expect(response.data.length).toBeGreaterThan(0);
    })
  });

  test("Return updateLanguage", () => {   

    const language = 'es';

    updateLanguage(language).then( response => {
        console.log(response.data);
        expect(response.data).toEqual('ndeah');
    })
    .catch( error => {
        console.error(error);
    })
  });*/

});