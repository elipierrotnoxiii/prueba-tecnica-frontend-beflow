import { useEffect, useState } from "react";
import Header from "./components/Header";
import axios from "axios";
import Indicators from "./components/Indicators";
import Spinner from "./components/Spinner";
import SelectIndicators from "./components/SelectIndicators";

const indicatorsNames = [
  "bitcoin",
  "dolar",
  "dolar_intercambio",
  "euro",
  "imacec",
  "ipc",
  "ivp",
  "libra_cobre",
  "tasa_desempleo",
  "tpm",
  "uf",
  "utm"
];

const fetch = async () => {
  try {
    const { data } = await axios.get("https://mindicador.cl/api");
    return data;
  } catch (error) {
    console.log(error);
  }
};

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const getData = await fetch();

      setTimeout(() => {
        setData(getData);
      }, 3000);
    })();
  }, []);

  return (
    <>
      <Header />
      <div className="container mx-auto my-10">
        {data.length !== 0 ? (
          <>
            <div className="grid grid-cols-4 gap-7">
              <Indicators data={data} indicatorsNames={indicatorsNames} />
            </div>

            <SelectIndicators indicatorsNames={indicatorsNames} />
          </>
        ) : (
          <Spinner />
        )}
      </div>
    </>
  );
};

export default App;
