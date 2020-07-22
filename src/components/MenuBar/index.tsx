import React from 'react';

import TweetButton from '../Button';

import {
  Container,
  Topside,
  LogoTwitter,
  MenuButton,
  HomeIcon,
  ExploreIcon,
  BellIcon,
  MessageIcon,
  SaveIcon,
  ListIcon,
  ProfileIcon,
  MoreIcon,
  BottomSide,
  ProfileButton,
  Avatar,
  ProfileName,
  ProfileInfo,
  ArrowIcon,
} from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <Topside>
        <LogoTwitter />

        <MenuButton>
          <HomeIcon />
          <span>Página Inicial</span>
        </MenuButton>

        <MenuButton>
          <ExploreIcon />
          <span>Explorar</span>
        </MenuButton>

        <MenuButton>
          <BellIcon />
          <span>Notificações</span>
        </MenuButton>

        <MenuButton>
          <MessageIcon />
          <span>Mensagens</span>
        </MenuButton>

        <MenuButton>
          <SaveIcon />
          <span>Itens salvos</span>
        </MenuButton>

        <MenuButton>
          <ListIcon />
          <span>Listas</span>
        </MenuButton>

        <MenuButton  className="active">
          <ProfileIcon />
          <span>Perfil</span>
        </MenuButton>

        <MenuButton>
          <MoreIcon />
          <span>Mais</span>
        </MenuButton>

        <TweetButton>
          <span>Tweetar</span>
        </TweetButton>
      </Topside>

      <BottomSide>
        <ProfileButton>
            <ProfileInfo>
              <Avatar />

              <ProfileName>
                <strong>Nícolas Carvalho</strong>
                <span>@nicolasdev1</span>
              </ProfileName>
            </ProfileInfo>

            <ArrowIcon />
          </ProfileButton>
      </BottomSide>
    </Container>
  );
}

export default MenuBar;
