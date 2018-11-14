import React from 'react';
import { render, shallow } from 'enzyme';

import CallsItem from './CallsItem';

/**
 * Lista com o resumo dos testes abaixo:
 *
 * 01 - Renderizar o componente sem erros
 * 02 - Exibir valor do titulo dentro do componente
 * 03 - Exibir valor do subtitulo dentro do componente
 * 04 - Exibir valor do descricao dentro do componente
 */

describe('<CallsItem />', () => {
    let wrapper;

    const callsItemProps = {
      title: "Lorem Ipsum",
      subtitle: "Sit Dolor Lorem",
      description: "Amet Sit Dolor Lorem Ipsum",
    }

    beforeEach(() => {
      wrapper = shallow(<CallsItem {...callsItemProps} />);
    })

    // 01 - Renderizar o componente sem erros
    test('Should render CallsItem without errors', () => {
      const wrapperRender = render(<CallsItem {...callsItemProps} />);
    })

    // 02 - Exibir valor do titulo dentro do componente
    test('Should display text with the title', () => {
      expect(
        wrapper.find('.callsitem-title-text').at(0)
        .text())
      .toEqual(callsItemProps.title);
    })

    // 03 - Exibir valor do subtitulo dentro do componente
    test('Should display text with the subtitle', () => {
      expect(
        wrapper.find('.callsitem-subtitle').at(0)
        .text())
      .toEqual(callsItemProps.subtitle);
    })

    // 04 - Exibir valor do descricao dentro do componente
    test('Should display text with the description', () => {
      expect(
        wrapper.find('.callsitem').at(0)
        .text())
      .toMatch(callsItemProps.description);
    })
})
