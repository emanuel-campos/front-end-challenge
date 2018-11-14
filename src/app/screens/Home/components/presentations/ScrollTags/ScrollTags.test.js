import React from 'react';
import { render, shallow } from 'enzyme';

import ScrollTags from './ScrollTags';

/**
 * Lista com o resumo dos testes abaixo:
 *
 * 01 - Renderizar o componente sem erros
 * 02 - Listar todas as tags passadas nas props
 * 03 - Exibir o nome da tag
 */

describe('<ScrollTags />', () => {
    let wrapper;

    const scrollTagsProps = {
      tags: [
        'Ar Condicionado',
        'Air Bag',
        'Desembaçador Traseiro',
        'Ar Quente',
        'Freios ABS',
        'Teto Solar',
        'AirBag',
        'Teto Solar',
        'Ar Quente',
        'Freios ABS',
        'Teto Solar',
        'Air Bag',
        'Ar Condicionado',
        'Desembaçador Traseiro',
      ],
    }

    beforeEach(() => {
      wrapper = shallow(<ScrollTags {...scrollTagsProps} />);
    })

    // 01 - Renderizar o componente sem erros
    test('Should render ScrollTags without errors', () => {
      const wrapperRender = render(<ScrollTags {...scrollTagsProps} />);
    })

    // 02 - Listar todas as tags passadas nas props
    test('Should list all tags', () => {
      expect(
        wrapper.find('.scrolltags-list-item')
      ).toHaveLength(scrollTagsProps.tags.length);
    })

    // 03 - Exibir o nome da tag
    test('Should display tag name in list', () => {
      expect(
        wrapper.find('.scrolltags-tag').at(6)
        .text())
      .toEqual(scrollTagsProps.tags[6]);
    })
})
