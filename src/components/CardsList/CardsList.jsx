import PropTypes from "prop-types";
import "./CardsList.css";
import Card from "../Card/Card";

export default function CardsList(props) {
  const { tweets, updateTweet } = props;

  return (
    <section className="Cards">
      <ul className="Cards__list">
        {tweets.map(({ id, user, tweets, followers, isfollowing, avatar }) => (
          <li key={id}>
            <Card
              user={user}
              tweets={tweets}
              followers={followers}
              isfollowing={isfollowing}
              avatar={avatar}
              onHandleClick={() => updateTweet(id)}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

CardsList.propTypes = {
  tweets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      user: PropTypes.string.isRequired,
      tweets: PropTypes.number.isRequired,
      followers: PropTypes.number.isRequired,
      isfollowing: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ).isRequired,
  updateTweet: PropTypes.func.isRequired,
};
