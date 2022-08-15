import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CountryType } from "../types/types";

function Detail() {
  const { countryName } = useParams();
  const [countryInformation, setCountryInformation] = useState<CountryType[]>(
    []
  );
  const [status, setStatus] = useState(false);

  useEffect(() => {
    const getCountry = async (): Promise<void> => {
      await axios
        .get<CountryType[]>(
          `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
        )
        .then((response) => {
          setCountryInformation(response.data);
          setStatus(true);
        })
        .catch(() => {
          setStatus(false);
        });
    };

    getCountry();
  }, [countryName]);

  return (
    <>
      {status ? (
        <div className="country-detail">
          <div className="country-card">
            <h1>
              {countryInformation[0].name.common} -{" "}
              {countryInformation[0].name.official}
            </h1>
            <img
              src={countryInformation[0].flags.png}
              alt={countryInformation[0].flags.png}
            />
            <p>
              <b>Continents: </b>
              {countryInformation[0].continents[0]}
            </p>
            <p>
              <b>Population: </b>
              {countryInformation[0].population
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
            </p>
            <p>
              <b>Capital </b>
              {countryInformation[0].capital}
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
export default Detail;
