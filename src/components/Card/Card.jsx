import "./Card.css";
import hansel from "../../images/hansel.png";
import goitLogo from "../../images/goit-logo.svg";

export default function Card(props) {
  const { user, tweets, followers } = props;

  return (
    <div className="Card">
      <img src={goitLogo} alt="GoIt Logo" className="Card__logo" />
      <div className="Card__imgwrapper">
        <img src={hansel} alt={user} className="Card__img" />
      </div>
      <div className="Card__delimiter"></div>
      <div className="Card__data">
        <p className="Card__txt">{tweets} tweets</p>
        <p className="Card__txt">{followers} followers</p>
        <button className="Card__button">follow</button>
      </div>
    </div>
  );
}
