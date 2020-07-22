import React from 'react';

import {
  Container,
  Avatar,
  Info,
  FollowButton,
} from './styles';

import { IconPromoted } from '../WhatsHappening/styles';

interface Props {
  name: string;
  user: string;
  isPromoted?: boolean;
  promoted?: string;
}

const FollowSuggestion: React.FC<Props> = ({
  name,
  user,
  isPromoted,
  promoted,
}) => {
  return (
    <Container>
      <div>
        <Avatar />
        
        <Info>
          <strong>{name}</strong>
          <span>{user}</span>
        </Info>
      </div>    

      <FollowButton outlined>Seguir</FollowButton>  
    </Container>
  );
}

export default FollowSuggestion;
