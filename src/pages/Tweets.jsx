import { useLocation } from "react-router-dom";
import BackLink from "../components/BackLink";
import Card from "../components/Card";

const Tweets = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";

  return (
    <>
      <BackLink to={backLinkHref}>Back</BackLink>
      <h1 className="App__title">Tweets</h1>
      <Card user="Hansel" tweets={1414} followers={505505} />
    </>
  );
};

export default Tweets;
