import { useEffect, useState } from "react";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const fetch = async path => {
  const { data } = await axios.get(`https://mindicador.cl/api/${path}`);
  return data;
};

const SelectIndicator = ({ indicatorsNames }) => {
  const [value, setValue] = useState("");
  const [dates, setDates] = useState([]);
  const [indicatorsValues, setIndicatorsValues] = useState([]);
  const [dataChart, setDataChart] = useState({});

  const handleOnChange = e => {
    if (e.target.value !== "Elige un indicador") {
      setValue(e.target.value);
    }
  };

  useEffect(() => {
    if (value !== "") {
      (async () => {
        const getData = await fetch(value);
        const getDates = getData.serie.map(x => x.fecha.substring(0, 10));
        const getValues = getData.serie.map(y => y.valor);
        setDates(getDates);
        setIndicatorsValues(getValues);
      })();
    }
  }, [value]);

  useEffect(() => {
    if (dates.length !== 0) {
      setDataChart({
        labels: dates.reverse(),
        datasets: [
          {
            label: `Indicador financiero ${value}`,
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: indicatorsValues.reverse()
          }
        ]
      });
    }
  }, [dates, indicatorsValues, value]);

  return (
    <div className="container mx-auto my-6">
      <h1 className="text-center">Selector de indicadores financieros</h1>
      <label
        htmlFor="indicators"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
      >
        Selecciona un Indicador para revisar su información.
      </label>
      <select
        id="indicators"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={handleOnChange}
      >
        <option>Elige un indicador</option>
        {indicatorsNames.map(x => (
          <option value={x} key={x}>
            {x}
          </option>
        ))}
      </select>
      {Object.keys(dataChart).length !== 0 ? <Line data={dataChart} /> : null}
    </div>
  );
};

export default SelectIndicator;
