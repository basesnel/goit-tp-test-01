import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getUsers, updateUser } from "../api/mockapi";
import BackLink from "../components/BackLink";
import CardsList from "../components/CardsList";

const Tweets = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";

  const [users, setUsers] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      getUsers()
        .then((users) => {
          setUsers(users);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }, 250);
  }, []);

  function updateTweet(tweetId) {
    const { followers, isfollowing } = users.find(
      (tweet) => tweet.id === tweetId
    );

    let modFollowers = isfollowing ? followers - 1 : followers + 1;
    let modIsfollowing = !isfollowing;

    updateUser(tweetId, modFollowers, modIsfollowing)
      .then((user) => {
        setUsers((prevState) =>
          prevState.map((user) =>
            user.id === tweetId
              ? {
                  ...user,
                  followers: modFollowers,
                  isfollowing: modIsfollowing,
                }
              : user
          )
        );
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  return (
    <>
      <BackLink to={backLinkHref}>Back</BackLink>
      <h1 className="App__title">Tweets</h1>
      <CardsList tweets={users} updateTweet={updateTweet} />
    </>
  );
};

export default Tweets;
