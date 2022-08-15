import { Link } from "react-router-dom";

interface IProps {
  imgSrc: string;
  countryName: string;
  countryNativeName: string;
}

const CountryCard: React.FunctionComponent<IProps> = ({
  imgSrc,
  countryName,
  countryNativeName,
}) => {
  return (
    <div className="country-card">
      <img src={imgSrc} alt={imgSrc} />
      <p>{countryName}</p>
      <p>{countryNativeName}</p>
      <Link className="btn btn-success" to={"/detail/" + countryName}>
        Detail
      </Link>
    </div>
  );
};
export default CountryCard;
