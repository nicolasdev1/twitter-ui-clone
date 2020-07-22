import React from 'react';

import {
  Container,
  Divider,
  Link,
  IconPromoted,
  Picture,
} from './styles';

interface Props {
  subtitle: string;
  time: string;
  title: string;
  isMoment?: boolean;
  moment?: string;
  isPromoted?: boolean;
  promoted?: string;
}

const WhatsHappening: React.FC<Props> = ({
  subtitle,
  time,
  title,
  isMoment,
  moment,
  isPromoted,
  promoted,
}) => {
  return (
    <Container>
      <div>
        <span>{subtitle}<Divider />{time}</span>
        <strong>{title}</strong>
        <span>{isMoment ? "Assuntos do Momento: " : isPromoted ? <IconPromoted /> : ""}{isMoment ? <Link>{moment}</Link> : isPromoted ? promoted : ""}</span>
      </div>

      <Picture />
    </Container>
  );
}

export default WhatsHappening;
