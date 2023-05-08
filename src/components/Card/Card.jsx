import PropTypes from "prop-types";
import "./Card.css";
import goitLogo from "../../images/goit-logo.svg";

export default function Card(props) {
  const { user, tweets, followers, isfollowing, avatar, onHandleClick } = props;

  function numberWithSeparator(num) {
    if (num < 1000) return num;
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div className="Card">
      <img src={goitLogo} alt="GoIt Logo" className="Card__logo" />
      <div className="Card__imgwrapper">
        <img src={avatar} alt={user} className="Card__img" />
      </div>
      <div className="Card__delimiter"></div>
      <div className="Card__data">
        <p className="Card__txt">{numberWithSeparator(tweets)} tweets</p>
        <p className="Card__txt">{numberWithSeparator(followers)} followers</p>
        {isfollowing ? (
          <button
            className="Card__button Card__button--following"
            onClick={onHandleClick}
          >
            following
          </button>
        ) : (
          <button className="Card__button" onClick={onHandleClick}>
            follow
          </button>
        )}
      </div>
    </div>
  );
}

Card.propTypes = {
  user: PropTypes.string.isRequired,
  tweets: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  isfollowing: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  onHandleClick: PropTypes.func.isRequired,
};
