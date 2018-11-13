import React from 'react';
import { render, shallow } from 'enzyme';

import ScrollTable from './ScrollTable';

/**
 * Lista com o resumo dos testes abaixo:
 *
 * 01 - Renderizar o componente sem erros
 * 02 - Exibir uma tabela para carregar os dados
 * 03 - Listar todos os dados passados nas props
 * 04 - Exibir "title" na tabela de dados
 * 05 - Exibir "value" na tabela de dados
 * 06 - Definir "height" passada nas props
 * 07 - Ter uma "height" padrão de 250px já definida
 */

describe('<ScrollTable />', () => {
    let wrapper;

    const scrollTableProps = {
      rows: [
        { title: '456 Lorem Ipsum', value: '21-567' },
        { title: '789 Lorem Ipsum', value: '34-123' },
        { title: '454 Lorem Ipsum', value: '79-235' },
        { title: '987 Lorem Ipsum', value: '46-754' },
        { title: '456 Lorem Ipsum', value: '23-537' },
        { title: '268 Lorem Ipsum', value: '55-884' },
        { title: '379 Lorem Ipsum', value: '78-724' },
      ],
      height: "320px",
    }

    beforeEach(() => {
      wrapper = shallow(<ScrollTable {...scrollTableProps} />);
    })

    // 01 - Renderizar o componente sem erros
    test('Should render ScrollTable without errors', () => {
      const wrapperRender = render(<ScrollTable {...scrollTableProps} />);
    })

    // 02 - Exibir uma tabela para carregar os dados
    test('Should load an table tag', () => {
      expect(
        wrapper.find('table').exists())
      .toBeTruthy();
    })

    // 03 - Listar todos os dados passados nas props
    test('Should list all rows of data', () => {
      expect(
        wrapper.find('.scrolltable-row')
      ).toHaveLength(scrollTableProps.rows.length);
    })

    // 04 - Exibir "title" na lista de dados
    test('Should display "title" in the data table', () => {
      expect(
        wrapper.find('.scrolltable-row-title').at(3) // linha 4 de dados
        .text())
      .toEqual(scrollTableProps.rows[3].title);
    })

    // 05 - Exibir "value" na tabela de dados
    test('Should display "value" in the data table', () => {
      expect(
        wrapper.find('.scrolltable-row-value').at(5) // linha 4 de dados
        .text())
      .toEqual(scrollTableProps.rows[5].value);
    })

    // 06 - Definir "height" passada nas props
    test('Should set "height" passed in props', () => {
      expect(
        wrapper.find('.scrolltable-wrapper')
        .prop('style')
      ).toHaveProperty('height', scrollTableProps.height);
    })

    // 07 - Ter uma "height" padrão de 250px já definida
    test('Should have a default height of 250px already set', () => {
      wrapper = shallow(<ScrollTable rows={scrollTableProps.rows} />);

      expect(
        wrapper.find('.scrolltable-wrapper')
        .prop('style')
      ).toHaveProperty('height', '250px');
    })
})
