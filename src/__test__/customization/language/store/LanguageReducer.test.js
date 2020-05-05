import LanguageMock from '../../../../__mocks__/LanguageMock';
import LanguageReducer from '../../../../modules/customization/language/store/LanguageReducer';

describe("Reducer <Language/>", () => {

  test("Retorna initial state", () => {

    const initialState = LanguageMock;
    const action = {
        type: 'SET_LANGUAGE',
        payload: initialState
    };
    const expected = {
      language: LanguageMock.language,
      messages: LanguageMock.messages
    };
    
    expect(LanguageReducer(initialState, action)).toEqual(expected);
    
  });

});