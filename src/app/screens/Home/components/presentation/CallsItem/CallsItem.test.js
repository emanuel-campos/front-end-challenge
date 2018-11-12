import React from 'react';
import { render, shallow } from 'enzyme';

import CallsItem from './CallsItem';

/**
 * Lista com o resumo dos testes abaixo:
 *
 * 01 - Renderizar o componente sem erros
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
})
