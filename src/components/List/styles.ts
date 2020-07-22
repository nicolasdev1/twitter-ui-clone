import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  flex-direction: column;

  background: var(--secondary);
  border-radius: 14px;
`;

export const Option = styled.div`
  display: flex;

  padding: 10px 15px;

  border-bottom: 1px solid var(--outline);

  cursor: pointer;

  &:first-child {
    cursor: unset;

    &:hover {
      background: unset;
    }
  }

  &:last-child {
    padding: 15px 15px;

    border-bottom: unset;

    border-bottom-left-radius: 14px;
    border-bottom-right-radius: 14px;

    > span {
      cursor: pointer;

      color: var(--twitter);
    }
  }

  &:hover {
    background: rgba(255, 255, 255, 0.03);
  }
`;

export const Information = styled.div`
  display: flex;

  width: 100%;
`;

export const Title = styled.span`
  font-weight: bold;
  font-size: 19px;
`;
