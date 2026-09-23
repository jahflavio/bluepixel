import React from 'react';

// Los stats se renderizan en font-black con tracking-tighter, y con ese
// letter-spacing negativo el guion de un rango ("14-28", "2-4") se pega a los
// digitos y se lee como un solo bloque. Aqui se detecta solo el guion que une
// dos numeros -y nunca el signo negativo de "-60%"- para darle su propio aire
// y cambiarlo por un guion medio, que es el separador tipografico correcto
// para un rango.
const NUMERIC_RANGE = /^(\s*[^\s-]*\d)\s*-\s*(\d[^\s-]*\s*)$/;

const StatValue = ({ value }) => {
  const range = typeof value === 'string' ? value.match(NUMERIC_RANGE) : null;

  if (!range) return <>{value}</>;

  return (
    <>
      {range[1]}
      <span className="mx-[0.08em] tracking-normal">{'\u2013'}</span>
      {range[2]}
    </>
  );
};

export default StatValue;
