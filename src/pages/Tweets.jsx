import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { getUsers, updateUser } from "../api/mockapi";
import BackLink from "../components/BackLink";
import CardsList from "../components/CardsList";
import Info from "../components/Info";
import Loader from "../components/Loader";
import LoadMoreButton from "../components/LoadMoreButton";
import Warning from "../components/Warning";

const Tweets = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";

  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pending, setPending] = useState(true);
  const [errorStatus, setErrorStatus] = useState(false);
  const [error, setError] = useState(null);

  const perPage = 3;
  const effectRan = useRef(false);

  useEffect(() => {
    setPending(true);
    setErrorStatus(false);

    if (effectRan.current === true || process.env.NODE_ENV !== "development") {
      setTimeout(() => {
        getUsers(currentPage, perPage)
          .then((users) => {
            setUsers((prevUsers) => [...prevUsers, ...users]);
          })
          .catch((error) => {
            setError(error);
            setErrorStatus(true);
            console.log(error.message);
          })
          .finally(setPending(false));
      }, 370);
    }

    return () => {
      effectRan.current = true;
    };
  }, [currentPage]);

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

  const onLoadMoreTweets = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <BackLink to={backLinkHref}>Back</BackLink>
      <h1 className="App__title">Tweets</h1>
      <CardsList tweets={users} updateTweet={updateTweet} />
      {pending ? (
        <Loader waitingNote="Loading  more tweets..." />
      ) : errorStatus ? (
        <Warning message={error.message} />
      ) : currentPage > 3 ? (
        <Info message="End of tweet list" />
      ) : (
        <LoadMoreButton onClick={onLoadMoreTweets} />
      )}
    </>
  );
};

export default Tweets;
