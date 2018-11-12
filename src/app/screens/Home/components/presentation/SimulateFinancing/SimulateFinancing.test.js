import React from 'react';
import { render, mount, shallow } from 'enzyme';

import SimulateFinancing from './SimulateFinancing';

/**
 * Lista com o resumo dos testes abaixo:
 *
 * 01 - Renderizar o componente sem erros
 * 02 - Exibir o titulo no topo do componente
 * 03 - Exibir a descricao(texto abaixo do titulo) no topo do componente
 * 04 - Lista de todas as versoes
 * 05 - Lista de todas as opcoes de parcelas
 * 06 - Exibir option com texto das versoes
 * 07 - Exibir label com numero da parcela
 * 08 - Exibir input radio com value da parcela
 * 09 - Remover topo, com titulo e descricao, com prop showHeader como false
 */

describe('<SimulateFinancing />', () => {
    let wrapper;

    const simulateProps = {
      title: "Lorem Ipsum Dolor",
      description: "Amet Sit Dolor Lorem Ipsum",
      versions: ['1.0', '1.6', '1.8', '2.0'],
      installments: ['12', '24', '36', '48'],
    }

    beforeEach(() => {
      wrapper = shallow(<SimulateFinancing {...simulateProps} />);
    })

    // 01 - Renderizar o componente sem erros
    test('Should render SimulateFinancing without errors', () => {
      const wrapperRender = render(<SimulateFinancing {...simulateProps} />);
    })

    // 02 - Exibir o titulo no topo do componente
    test('Should display the title at the top of the component', () => {
      expect(
        wrapper.find('.simulatefinancing-title')
        .text())
      .toEqual(simulateProps.title);
    })

    // 03 - Exibir a descricao(texto abaixo do titulo) no topo do componente
    test('Should display the description at the top of the component', () => {
      expect(
        wrapper.find('.simulatefinancing-description')
        .text())
      .toEqual(simulateProps.description);
    })

    // 04 - Lista de todas as versoes
    test('Should list all versions', () => {
      expect(
        wrapper.find('.simulatefinancing-versions')
        .find('option'))
      .toHaveLength(simulateProps.versions.length);
    })

    // 05 - Lista de todas as opcoes de parcelas
    test('Should list all options installments', () => {
      expect(
        wrapper.find('.simulatefinancing-installment'))
      .toHaveLength(simulateProps.installments.length);
    })

    // 06 - Exibir option com texto das versoes
    test('Should display option with text of the versions', () => {
      expect(
        wrapper.find('.simulatefinancing-versions').at(0)
        .find('option').at(2) // com texto "1.8"
        .text())
      .toEqual(simulateProps.versions[2]);
    })

    // 07 - Exibir label com numero da parcela
    test('Should display label with text of the installment', () => {
      expect(
        wrapper.find('.simulatefinancing-installment-number').at(3) // com texto "48"
        .text())
      .toMatch(simulateProps.installments[3]);
    })

    // 08 - Exibir input radio com value da parcela
    test('Should display input radio with value of the installment', () => {
      expect(
        wrapper.find('.simulatefinancing-installment-radio[value="' + simulateProps.installments[1] + '"]') // com texto "24"
        .exists())
      .toBeTruthy();
    })

    // 09 - Remover topo, com titulo e descricao, com prop showHeader como false
    test('Should remove Header component with showHeader equal to false', () => {
      const wrapperHeader = shallow(<SimulateFinancing showHeader={false} {...simulateProps} />);

      expect(
        wrapperHeader.find('.simulatefinancing-header')
        .exists())
      .toBeFalsy();
    })
})
