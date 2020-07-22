import styled from "styled-components";

import { RightTopArrowCircle } from '../../styles/Icons';

export const Container = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: flex-start;

  > div {
    display: flex;

    flex-direction: column;

    > strong {
      margin: 3px 0px;

      padding-right: 5px;

      font-size: 15px;
    }

    > span {
      display: flex;

      align-items: center;

      flex-direction: row;

      color: var(--gray);

      font-size: 13px;

      > div {
        margin: 0 5px;
      }

      &:last-child {
        margin-top: 3px;

        > span {
          margin-left: 3px;
        }
      }
    }
  }
`;

export const Divider = styled.div`
  width: 2px;
  height: 2px;

  background: var(--gray);

  border-radius: 2px;
`;

export const Link = styled.span`
  color: var(--twitter);

  &:hover {
    text-decoration: underline;

    cursor: pointer;
  }
`;

export const IconPromoted = styled(RightTopArrowCircle)`
  width: 20px;
  height: 20px;

  margin-right: 4px;

  > path {
    fill: var(--gray);
  }
`;

export const Picture = styled.div`
  width: 64px;
  height: 64px;

  border-radius: 15px;
  
  flex-shrink: 0;

  background: var(--gray);
`;


