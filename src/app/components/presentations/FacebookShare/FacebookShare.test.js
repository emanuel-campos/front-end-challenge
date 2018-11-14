import React from 'react';
import { render, shallow } from 'enzyme';

import FacebookShare from './FacebookShare';

/**
 * Lista com o resumo dos testes abaixo:
 *
 * 01 - Renderizar o componente sem erros
 * 02 - Carregar um elemento iframe
 * 03 - O src do elemento iframe tem a url de compartilhar do Facebook
 * 04 - A width do elemento iframe tem o numero passado na props
 * 05 - A height do elemento iframe tem o numero passado na props
 */

describe('<FacebookShare />', () => {
    let wrapper;
    const shareData = {
      url: 'https://www.facebook.com/FacebookBrasil/',
      width: '90',
      height: '20'
    };

    beforeEach(() => {
      wrapper = shallow(<FacebookShare {...shareData} />);
    })

    // 01 - Renderizar o componente sem erros
    test('Should render FacebookShare without errors', () => {
      const wrapperRender = render(<FacebookShare {...shareData} />);
    })

    // 02 - Carregar um elemento iframe
    test('Should render an iframe element', () => {
      expect(wrapper.find('iframe').exists()).toBeTruthy();
    })

    // 03 - O src do elemento iframe tem a url de compartilhar do Facebook
    test('Should get have url Facebook Share on iframe src', () => {
      const url = `https://www.facebook.com/plugins/share_button.php?href=${shareData.url}&layout=button_count&size=small&mobile_iframe=true&width=${shareData.width}&height=${shareData.height}&appId`;

      expect(wrapper.find('iframe').prop('src')).toEqual(url);
    })

    // 04 - A width do elemento iframe tem o numero passado na props
    test('Should get have correct number on iframe width', () => {
      expect(wrapper.find('iframe').prop('width')).toEqual(shareData.width);
    })

    // 05 - A height do elemento iframe tem o numero passado na props
    test('Should get have correct number on iframe height', () => {
      expect(wrapper.find('iframe').prop('height')).toEqual(shareData.height);
    })
})
