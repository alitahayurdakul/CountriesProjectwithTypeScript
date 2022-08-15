import axios from "axios";
import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import { CountryType } from "../types/types";

function AllCountry() {
  const [countries, setCountries] = useState<CountryType[]>([]);

  useEffect(() => {
    const getAllCountry = async (): Promise<void> => {
      await axios
        .get<CountryType[]>("https://restcountries.com/v3.1/all")
        .then((response) => setCountries(response.data))
        .catch((err) => console.log(err));
    };

    getAllCountry();
  }, []);

  return (
    <div className="all-countries w-75 mx-auto">
      {countries.map((country) => (
        <React.Fragment key={country.name.common}>
          <CountryCard
            imgSrc={country.flags.png}
            countryName={country.name.common}
            countryNativeName={country.name.official}
          />
        </React.Fragment>
      ))}
    </div>
  );
}
export default AllCountry;
