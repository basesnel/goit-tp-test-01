import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container, Header, Link, Loading, Main } from "./Layout.styled";

export const Layout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/tweets">Tweets</Link>
            </li>
          </ul>
        </nav>
      </Header>
      <Main>
        <Suspense fallback={<Loading>Loading...</Loading>}>
          <Outlet />
        </Suspense>
      </Main>
    </Container>
  );
};
