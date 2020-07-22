import styled from "styled-components";

import Button from '../Button';

export const Container = styled.div`
  display: flex;

  width: 100%;

  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
  }
`;

export const Avatar = styled.div`
  width: 49px;
  height: 49px;

  background: var(--gray);

  border-radius: 50%;

  flex-shrink: 0;

  margin-right: 10px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 15px;

  cursor: pointer;

  &:hover {
    > strong {
      text-decoration: underline;
    }
  }

  > span {
    color: var(--gray);
  }
`;

export const FollowButton = styled(Button)`
  padding: 6px 17px;

  &:hover {
    background: rgba(29, 161, 242, 0.1);
  }
`;
