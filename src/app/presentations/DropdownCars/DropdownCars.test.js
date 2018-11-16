import React from 'react';
import { render, shallow } from 'enzyme';

import DropdownCars from './DropdownCars';

/**
 * Lista com o resumo dos testes abaixo:
 *
 * 01 - Renderizar o componente sem erros
 * 02 - Listar todos os veiculos recebidos pela prop
 * 03 - Carregar uma tag img para o icone do carro
 * 04 - A prop img src deve receber o valor da url/path passada
 * 05 - Não deve renderizar o img se o icone do carro não for passado
 * 06 - Mostrar texto com o nome dos veiculos na lista
 */

describe('<DropdownCars />', () => {
    let wrapper;
    const cars = [
      {
        name: 'Nome do carro',
        icon: 'local/to/path/img'
      },
      {
        name: 'Novo titulo do carro',
        icon: 'local/to/path/img'
      },
      {
        name: 'Mais nome do carro',
        icon: 'local/to/path/img'
      },
      {
        name: 'Esse nome do carro'
      },
      {
        name: 'Nome do carro 2017',
        icon: 'local/to/path/img'
      },
    ];

    beforeEach(() => {
      wrapper = shallow(<DropdownCars items={cars} title="Nossos Veículos" id="nossos-veiculos-dropdown" />);
    })

    // 1 - Renderizar o componente sem erros
    test('Should render DropdownCars without errors', () => {
      const wrapperRender = render(<DropdownCars items={cars} title="Nossos Veículos" id="nossos-veiculos-dropdown" />);
    })

    // 2 - Listar todos os veiculos recebidos pela prop
    test('Should list all cars', () => {
      expect(wrapper.find('.dropdowncars-item')).toHaveLength(cars.length);
    })

    // 3 - Carregar uma tag img para o icone do carro
    test('Should load an img tag for the car icon', () => {
      expect(
        wrapper.find('.dropdowncars-item')
        .at(0)
        .find('img')
        .exists())
      .toBeTruthy();
    })

    // 4 - A prop img src deve receber o valor da url/path passada
    test('Should load an img tag for the car icon', () => {
      expect(
        wrapper.find('.dropdowncars-item').at(0)
        .find('img').at(0)
        .props().src)
      .toEqual(cars[0].icon);
    })

    // 5 - Não deve renderizar o img se o icone do carro não for passado
    test('Should not render the img if the car icon is not passed', () => {
      expect(
        wrapper.find('.dropdowncars-item')
        .at(3) // exemplo de objeto "car" sem icon
        .find('img')
        .exists())
      .toBeFalsy();
    })

    // 6 - Mostrar texto com o nome dos veiculos na lista
    test('Should show text with the vehicles name in the list', () => {
      expect(
        wrapper.find('.dropdowncars-item')
        .at(0)
        .find('span').at(0)
        .text())
      .toEqual(cars[0].name);
    })
})
