import styled, { css } from "styled-components";

import {
  Home,
  Hashtag,
  Notifications,
  Email,
  Save,
  FileList,
  User,
  MoreHoriz,
  Twitter,
  ArrowIosDownwardOutline,
  ExitToApp,
} from '../../styles/Icons';

export const Container = styled.div`
  display: none;

  align-items: center;

  @media (min-width: 500px) {
    display: flex;

    flex-direction: column;
    justify-content: space-between;

    position: sticky;
    top: 0;
    left: 0;

    padding: 9px 19px 20px;

    max-height: 100vh;
    overflow-y: auto;
  }
`;

export const Topside = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;

  @media (min-width: 1280px) {
    align-items: flex-start;
  }
`;

export const LogoTwitter = styled(Twitter)`
  width: 51px;
  height: 51px;

  padding: 8px;

  @media (min-width: 1280px) {
    margin-left: 06px;
  }
 
  > path {
    fill: var(--white);
  }

  margin-bottom: 20px;

  &:hover {
    cursor: pointer;

    background: var(--twitter-dark-hover);

    border-radius: 50%;
  }
`;

export const MenuButton = styled.button`
  display: flex;

  align-items: center;
  justify-content: center;

  width: 51px;
  height: 51px;

  flex-shrink: 0;

  > span {
    display: none;
  }

  @media (min-width: 1280px) {
    > span {
      display: inline;
    
      margin-left: 19px;

      font-weight: bold;
      font-size: 19px;
    }

    width: unset;
    height: unset;
    
    border-radius: 25px;

    padding-right: 15px;

    padding-left: 15px;
  }

  padding: 8.25px 0;
  outline: 0;

  & + button {
    margin-top: 16px;
  }

  & + button:last-child {
    margin-top: 33px;

    width: 49px;
    height: 49px;

    > span {
      display: none;
    }

    &:hover {
      background: rgb(26, 145, 218);
    }

    @media (min-width: 1280px) {
      width: 100%;
      height: unset;

      > span {
        display: inline;
      }
    }
  }

  cursor: pointer;
  border-radius: 50%;

  &:hover {
    background: var(--twitter-dark-hover); 
  }

  &:hover, &.active {
    span, path {
      color: var(--twitter);
    }
  }
`;

export const BottomSide = styled.div`

`;

export const ProfileButton = styled.button`
  display: flex;

  padding: 10px;

  border-radius: 50%;

  align-items: center;
  justify-content: space-between;
  
  outline: 0;

  cursor: pointer;

  span, strong, svg {
    display: none;
  }

  @media (min-width: 1280px) {
    span, strong, svg {
      display: inline;
    }
  }

  &:hover {
    background: var(--twitter-dark-hover);

    border-radius: 30px;
  }
`;

export const Avatar = styled.div`
  width: 36px;
  height: 36px;

  border-radius: 50%;

  flex-shrink: 0;

  background: var(--gray);

  top: 0;
  left: 0;
`;

export const ProfileName = styled.div`
  display: flex;

  flex-direction: column;

  align-items: flex-start;
  justify-content: center;

  > strong {
    font-size: 15px;
  }

  > span {
    font-size: 13px;

    color: var(--gray);
  }

  @media (min-width: 1280px) {
    margin-left: 10px;

    margin-right: 30px;
  }
`;

export const ProfileInfo = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
`;

const iconCss = css`
  flex-shrink: 0;

  width: 31px;
  height: 31px;

  > path {
    color: var(--white);
  }
`;


export const HomeIcon = styled(Home)`
  ${iconCss}
`;

export const ExploreIcon = styled(Hashtag)`
  ${iconCss}
`;

export const BellIcon = styled(Notifications)`
  ${iconCss}
`;

export const MessageIcon = styled(Email)`
  ${iconCss}
`;

export const SaveIcon = styled(Save)`
  ${iconCss}
`;

export const ListIcon = styled(FileList)`
  ${iconCss}
`;

export const ProfileIcon = styled(User)`
  ${iconCss}
`;

export const MoreIcon = styled(MoreHoriz)`
  ${iconCss}
`;

export const ArrowIcon = styled(ArrowIosDownwardOutline)`
  ${iconCss}

  width: 24px;
  height: 24px;
`;
