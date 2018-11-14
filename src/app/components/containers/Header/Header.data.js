// imagens usadas no componente
import LogoGrandMotors from 'images/logo-grand-motors.png';
import LogoToyota from 'images/header/logo-toyota.png';

import CarroEtiosHatch from 'images/header/etios-hatch.png';

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
  { name: 'Etios Sedã 2017', icon: CarroEtiosHatch },
  { name: 'Etios Sedã 2017', icon: CarroEtiosHatch },
  { name: 'Etios Sedã 2017', icon: CarroEtiosHatch },
  { name: 'Etios Sedã 2017', icon: CarroEtiosHatch },
  { name: 'Etios Sedã 2017', icon: CarroEtiosHatch },
  { name: 'Etios Sedã 2017', icon: CarroEtiosHatch },
  { name: 'Etios Sedã 2017', icon: CarroEtiosHatch },
];

export {
  MockCars,
  MockPhones,
  LogoGrandMotors,
  LogoToyota,
};
