// imagens usadas no componente
import LogoGrandMotors from 'images/logo-grand-motors.png';
import LogoToyota from 'images/header/logo-toyota.png';

import CarroEtiosHatch from 'images/header/etios-hatch.png';
import CarroEtiosSeda from 'images/header/etios-seda.png';
import CarroEtiosCross from 'images/header/etios-cross.png';
import CarroCorolla from 'images/header/corolla.png';
import CarroHilux from 'images/header/hilux.png';

// informacoes sobre os telefones de contato
const MockPhones = [
  {
    name: 'Toyota Nações Unidas',
    phones: [
      { areaCode: '11', number: '3500-7909', type: 'Vendas' },
      { areaCode: '11', number: '3500-7909', type: 'Serviços' },
    ],
  },
  {
    name: 'Toyota Morumbi',
    phones: [
      { areaCode: '11', number: '3500-7909', type: 'Vendas' },
      { areaCode: '11', number: '3500-7909', type: 'Serviços' },
    ],
  },
];

// simulacao de dados dos carros listados no menu "Nossos Veiculos"
const MockCars = [
  { name: 'Etios Hatch 2017', icon: CarroEtiosHatch },
  { name: 'Etios Sedã 2017', icon: CarroEtiosSeda },
  { name: 'Etios Cross 2017', icon: CarroEtiosCross },
  { name: 'Corolla 2016', icon: CarroCorolla },
  { name: 'Hilux CD Diesel', icon: CarroHilux },
  { name: 'Etios Hatch 2017', icon: CarroEtiosHatch },
  { name: 'Etios Sedã 2017', icon: CarroEtiosSeda },
  { name: 'Etios Cross 2017', icon: CarroEtiosCross },
  { name: 'Corolla 2016', icon: CarroCorolla },
  { name: 'Hilux CD Diesel', icon: CarroHilux },
];

export {
  MockCars,
  MockPhones,
  LogoGrandMotors,
  LogoToyota,
};
