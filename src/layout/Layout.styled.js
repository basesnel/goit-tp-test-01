import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;

export const Header = styled.header`
  padding: 8px 16px;
  margin-bottom: 16px;
  background-color: #ebd8ff;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14),
    0 1px 10px 0 rgba(0, 0, 0, 0.12);
  nav {
    max-width: 1280px;
    margin: 0 auto;
  }
  nav > ul {
    display: flex;
    gap: 12px;
    padding-left: 0;
    list-style: none;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: #5736a3;
  font-style: normal;
  font-weight: 700;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: #ebd8ff;
    background-color: #5736a3;
  }
  &.active {
    color: #ebd8ff;
    background-color: #5736a3;
  }
`;

export const Loading = styled.div`
  width: 150px;
  height: 50px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #808080;
  border-radius: 5px;
  color: #808080;
`;

export const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  max-width: 1280px;
  margin: 0 auto;
  padding: 8px 16px;
`;
