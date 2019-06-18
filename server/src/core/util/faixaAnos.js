const faixaAnos = ano => {
  return 1581 < ano && ano < 1700
    ? { x: 22, y: 2 }
    : 1699 < ano && ano < 1800
    ? { x: 23, y: 3 }
    : 1799 < ano && ano < 1900
    ? { x: 24, y: 4 }
    : 1899 < ano && ano < 2020
    ? { x: 24, y: 5 }
    : 2019 < ano && ano < 2100
    ? { x: 24, y: 5 }
    : 2099 < ano && ano < 2200
    ? { x: 22, y: 6 }
    : 2020 < ano && ano < 2300
    ? { x: 25, y: 7 }
    : { x: 0, y: 0 };
};

module.exports = { faixaAnos };
