import styled from "styled-components";

import { Search } from '../../styles/Icons';

export const Container = styled.div`
  display: none;

  @media (min-width: 1000px) {
    display: flex;

    flex-direction: column;

    width: min(399px, 100%);
  }
`;

export const SearchWrapper = styled.div`
  padding: 7px 26px;

  width: min(399px, 100%);

  position: fixed;
  top: 0;
  z-index: 2;

  background: var(--primary);

  max-height: 57px;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 44px;

  font-size: 14px;
  background: var(--search);

  padding: 0 10px 0 52px;

  border-radius: 26px;
  border: 1px solid var(--search);

  &::placeholder {
    color: var(--gray);

    font-size: 15px;
  }

  ~ svg {
    position: relative;
    top: -34px;
    left: 15px;

    z-index: 1;

    transition: 180ms ease-in-out;
  }

  outline: 0;

  &:focus {
    border: 1px solid var(--twitter);

    background: var(--primary);

    ~ svg {
      path {
        color: var(--twitter);
      }
    }
  }
`;

export const SearchIcon = styled(Search)`
  width: 24px;
  height: 24px;

  color: var(--gray);
`;

export const Body = styled.div`
  display: flex;

  flex-direction: column;

  padding: 57px 24px 100px;
  margin-top: 3px;

  > div + div {
    margin-top: 15px;
  }
`;
