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
