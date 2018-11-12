import React from 'react';
import { render, shallow } from 'enzyme';

import FacebookLike from './FacebookLike';

/**
 * Lista com o resumo dos testes abaixo:
 *
 * 01 - Renderizar o componente sem erros
 * 02 - Carregar um elemento iframe
 * 03 - O src do elemento iframe tem a url de curtir do Facebook
 * 04 - A width do elemento iframe tem o numero passado na props
 * 05 - A height do elemento iframe tem o numero passado na props
 */

describe('<FacebookLike />', () => {
    let wrapper;
    const likeData = {
      url: 'https://www.facebook.com/FacebookBrasil/',
      width: '90',
      height: '20'
    };

    beforeEach(() => {
      wrapper = shallow(<FacebookLike {...likeData} />);
    })

    // 01 - Renderizar o componente sem erros
    test('Should render FacebookLike without errors', () => {
      const wrapperRender = render(<FacebookLike {...likeData} />);
    })

    // 02 - Carregar um elemento iframe
    test('Should render an iframe element', () => {
      expect(wrapper.find('iframe').exists()).toBeTruthy();
    })

    // 03 - O src do elemento iframe tem a url de curtir do Facebook
    test('Should get have url Facebook Like on iframe src', () => {
      const url = `https://www.facebook.com/plugins/like.php?href=${likeData.url}&width=${likeData.width}&layout=button_count&action=like&size=small&show_faces=false&share=false&height=${likeData.height}&appId`;

      expect(wrapper.find('iframe').prop('src')).toEqual(url);
    })

    // 04 - A width do elemento iframe tem o numero passado na props
    test('Should get have correct number on iframe width', () => {
      expect(wrapper.find('iframe').prop('width')).toEqual(likeData.width);
    })

    // 05 - A height do elemento iframe tem o numero passado na props
    test('Should get have correct number on iframe height', () => {
      expect(wrapper.find('iframe').prop('height')).toEqual(likeData.height);
    })
})
