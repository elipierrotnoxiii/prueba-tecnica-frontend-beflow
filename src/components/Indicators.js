const Indicators = ({ data, indicatorsNames }) => {
  const indicators = indicatorsNames.map(x => {
    return data[x];
  });

  const parseUnit = key => {
    switch (key) {
      case "Pesos":
        return "CLP";
      case "Porcentaje":
        return "%";
      case "Dólar":
        return "$";
      default:
        return "CLP";
    }
  };

  return indicators.map(i => (
    <div className="border-2 bg-slate-800 rounded-lg" key={i.nombre}>
      <div className="p-5">
        <p className="text-center text-white uppercase mb-3">{i.nombre}</p>
        <div className="p-3 bg-white">
          <p>
            Valor: {parseUnit(i.unidad_medida)} {i.valor}
          </p>
          <p>Fecha: {i.fecha.substring(0, 10)}</p>
        </div>
      </div>
    </div>
  ));
};

export default Indicators;
