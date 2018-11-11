import React from 'react';
import { render, shallow } from 'enzyme';

import DropdownCars from './DropdownCars';

describe('<DropdownCars />', () => {
    const cars = [
      { name: 'Etios Sedã 2017', icon: '' },
      { name: 'Etios Sedã 2017', icon: '' },
      { name: 'Etios Sedã 2017', icon: '' },
      { name: 'Etios Sedã 2017', icon: '' },
      { name: 'Etios Sedã 2017', icon: '' },
      { name: 'Etios Sedã 2017', icon: '' },
      { name: 'Etios Sedã 2017', icon: '' },
    ];

    test('Should render DropdownCars without errors', () => {
        const wrapper = render(<DropdownCars items={cars} title="Nossos Veículos" id="nossos-veiculos-dropdown" />)
    })
})
