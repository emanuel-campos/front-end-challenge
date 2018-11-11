import React from 'react';
import { render, shallow } from 'enzyme';

import DropdownCars from './DropdownCars';

/**
 * Lista com o resumo dos testes abaixo:
 *
 * 1 - Renderizar o componente sem erros
 * 2 - Listar todos os veiculos recebidos pela prop
 * 3 - Carregar uma tag img para o icone do carro
 * 4 - A prop img src deve receber o valor da url/path passada
 * 5 - Não deve renderizar o img se o icone do carro não for passado
 * 6 - Mostrar texto com o nome dos veiculos na lista
 */

describe('<DropdownCars />', () => {
    const cars = [
      { name: 'Etios Sedã 2017', icon: 'local/to/path/img' },
      { name: 'Etios Sedã 2017', icon: 'local/to/path/img' },
      { name: 'Etios Sedã 2017', icon: 'local/to/path/img' },
      { name: 'Etios Sedã 2017' },
      { name: 'Etios Sedã 2017', icon: 'local/to/path/img' },
      { name: 'Etios Sedã 2017', icon: 'local/to/path/img' },
      { name: 'Etios Sedã 2017', icon: 'local/to/path/img' },
    ];

    // 1 - Renderizar o componente sem erros
    test('Should render DropdownCars without errors', () => {
        const wrapper = render(<DropdownCars items={cars} title="Nossos Veículos" id="nossos-veiculos-dropdown" />)
    })

    // 2 - Listar todos os veiculos recebidos pela prop
    test('Should list all cars', () => {
        const wrapper = shallow(<DropdownCars items={cars} title="Nossos Veículos" id="nossos-veiculos-dropdown" />)

        expect(wrapper.find('.dropdowncars-item')).toHaveLength(cars.length);
    })

    // 3 - Carregar uma tag img para o icone do carro
    test('Should load an img tag for the car icon', () => {
        const wrapper = shallow(<DropdownCars items={cars} title="Nossos Veículos" id="nossos-veiculos-dropdown" />)

        expect(
          wrapper.find('.dropdowncars-item')
          .at(0)
          .find('img')
          .exists())
        .toBeTruthy();
    })

    // 4 - A prop img src deve receber o valor da url/path passada
    test('Should load an img tag for the car icon', () => {
        const wrapper = shallow(<DropdownCars items={cars} title="Nossos Veículos" id="nossos-veiculos-dropdown" />)

        expect(
          wrapper.find('.dropdowncars-item').at(0)
          .find('img').at(0)
          .props().src)
        .toEqual(cars[0].icon);
    })

    // 5 - Não deve renderizar o img se o icone do carro não for passado
    test('Should not render the img if the car icon is not passed', () => {
        const wrapper = shallow(<DropdownCars items={cars} title="Nossos Veículos" id="nossos-veiculos-dropdown" />)

        expect(
          wrapper.find('.dropdowncars-item')
          .at(3) // exemplo de objeto "car" sem icon
          .find('img')
          .exists())
        .toBeFalsy();
    })

    // 6 - Mostrar texto com o nome dos veiculos na lista
    test('Should show text with the vehicles name in the list', () => {
        const wrapper = shallow(<DropdownCars items={cars} title="Nossos Veículos" id="nossos-veiculos-dropdown" />)

        expect(
          wrapper.find('.dropdowncars-item')
          .at(0)
          .find('span').at(0)
          .text())
        .toEqual(cars[0].name);
    })
})
