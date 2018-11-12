import React from 'react';
import { render, shallow } from 'enzyme';

import DropdownPhones from './DropdownPhones';

/**
 * Lista com o resumo dos testes abaixo:
 *
 * 01 - Renderizar o componente sem erros
 * 02 - Verificar o estado inicial do componente
 * 03 - Listar todos os titulos das lojas/locais
 * 04 - Lista de todos os telefones
 * 05 - Lista de todos os codigos de area
 * 06 - Lista de todos os tipos de telefone(Vendas, Serviços)
 * 07 - Exibir texto com o titulo/local da loja
 * 08 - Exibir texto com o numero do telefone
 * 09 - Exibir texto com o numero do codigo de area
 * 10 - Exibir texto com o tipo de telefone(Vendas, Serviços)
 */

describe('<DropdownPhones />', () => {
    let wrapper;
    const places = [
      {
        name: 'Titulo de Teste',
        phones: [
          { areaCode: '84', number: '1111-2222', type: 'Vendas' },
          { areaCode: '11', number: '2222-3434', type: 'Serviços' },
        ],
      },
      {
        name: 'Mais um Titulo de Teste',
        phones: [
          { areaCode: '71', number: '3535-3434', type: 'Vendas' },
          { areaCode: '88', number: '2211-4433', type: 'Serviços' },
        ],
      },
    ];

    beforeEach(() => {
      wrapper = shallow(<DropdownPhones places={places} title="Telefones" id="telefones-dropdown" />);
    })

    // 01 - Renderizar o componente sem erros
    test('Should render DropdownPhones without errors', () => {
      const wrapperRender = render(<DropdownPhones places={places} title="Telefones" id="telefones-dropdown" />);
    })

    // 02 - Verificar o estado inicial do componente
    test('Should init component with default value on menuOpen state', () => {
      const defaultValueState = false;

      expect(defaultValueState).toEqual(wrapper.state().menuOpen);
    })

    // 03 - Listar todos os titulos das lojas/locais
    test('Should list all stores/places titles', () => {
      expect(wrapper.find('.dropdownphones-title')).toHaveLength(places.length);
    })

    // 04 - Lista de todos os telefones
    test('Should list all phones', () => {
      let numberPhones = 0;

      places.map(place => {
        numberPhones += place.phones.length;
      });

      expect(wrapper.find('.dropdownphones-number')).toHaveLength(numberPhones);
    })

    // 05 - Lista de todos os codigos de area
    test('Should list all area code of phones', () => {
      let numberAreaCode = 0;

      places.map(place => {
        numberAreaCode += place.phones.length;
      });

      expect(wrapper.find('.dropdownphones-areacode')).toHaveLength(numberAreaCode);
    })

    // 06 - Lista de todos os tipos de telefone(Vendas, Serviços)
    test('Should list all types of phones', () => {
      let numberTypes = 0;

      places.map(place => {
        numberTypes += place.phones.length;
      });

      expect(wrapper.find('.dropdownphones-type')).toHaveLength(numberTypes);
    })

    // 07 - Exibir texto com o titulo/local da loja
    test('Should display text with store/place title', () => {
      expect(
        wrapper.find('.dropdownphones-title')
        .at(0)
        .text())
      .toMatch(places[0].name);
    })

    // 08 - Exibir texto com o numero do telefone
    test('Should display text with phone number', () => {
      expect(
        wrapper.find('.dropdownphones-number')
        .at(1) // segundo telefone a ser listado
        .text())
      .toMatch(places[0].phones[1].number);
    })

    // 09 - Exibir texto com o numero do codigo de area
    test('Should display text with the area code number', () => {
      expect(
        wrapper.find('.dropdownphones-areacode')
        .at(2) // terceiro codigo de area a ser listado
        .text())
      .toMatch(places[1].phones[0].areaCode);
    })

    // 10 - Exibir texto com o tipo de telefone(Vendas, Serviços)
    test('Should display text with the phone type', () => {
      expect(
        wrapper.find('.dropdownphones-type')
        .at(3) // quarto tipo de telefone a ser listado
        .text())
      .toMatch(places[1].phones[1].type);
    })
})
