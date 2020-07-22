import React from 'react';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  EditButton,
  LocationIcon,
  CakeIcon,
  Followage,
} from './styles';

import Feed from '../Feed';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Nícolas Carvalho</h1>
        <h2>@nicolasdev1</h2>

        <p>
          Sou entusiasta por tudo que envolva tecnologia. Não sinto medo em começar algo do completo nada.
        </p>

        <ul>
          <li>
            <LocationIcon />
            Santos, Brasil
          </li>

          <li>
            <CakeIcon />
            Nascido(a) em 14 de agosto de 2001
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>80</strong>
          </span>

          <span>
            <strong>48</strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
}

export default ProfilePage;
