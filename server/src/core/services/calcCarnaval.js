const { faixaAnos } = require("../util/faixaAnos");

const calcPascoa = ano => {
  const { x, y } = faixaAnos(ano);

  const a = ano % 19;
  const b = ano % 4;
  const c = ano % 7;
  const d = (19 * a + x) % 30;
  const e = (2 * b + 4 * c + 6 * d + y) % 7;

  if (d + e > 9) {
    const dia = d + e - 9;
    if (dia === 26) return new Date(ano, 3, 19);
    else if (dia === 25 && d === 28 && a > 10) return new Date(ano, 3, 18);
    else return new Date(ano, 3, dia);
  } else return new Date(ano, 2, d + e + 22);
};

const calcCarnaval = ano => {
  const pascoa = calcPascoa(ano);

  pascoa.setDate(pascoa.getDate() - 47);

  const diaCarnaval = pascoa
    .getDate()
    .toString()
    .padStart(2, "0");
  const mesCarnaval = (pascoa.getMonth() + 1).toString().padStart(2, "0");
  const anoCarnaval = pascoa.getFullYear();

  return {
    ano,
    dtCarnaval: diaCarnaval + "/" + mesCarnaval + "/" + anoCarnaval
  };
};

module.exports = calcCarnaval;
