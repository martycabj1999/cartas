import { setLanguageAction } from '../../../../modules/customization/language/store/LanguageAction';
import LanguageMock from '../../../../__mocks__/LanguageMock';

describe("Actions <Language/>", () => {

  test("setLanguageAction", () => {

    const payload = LanguageMock;
    const expected = {
        type: 'SET_LANGUAGE',
        payload
    };

    expect(setLanguageAction(payload.language, payload.messages)).toEqual(expected);
    
  });

});