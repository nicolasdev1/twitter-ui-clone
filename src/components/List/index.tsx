import React from 'react';

import {
  Container,
  Option,
  Information,
  Title,
} from './styles';

interface Props {
  title: string;
  elements: React.ReactNode[];
}

const List: React.FC<Props> = ({
  title,
  elements
}) => {
  return (
    <Container>
      <Option>
        <Title>{title}</Title>
      </Option>

      {elements.map((element, index) => {
        return (
          <Option
            key={index}
          >
            <Information>{element}</Information>
          </Option>
        );
      })}

      <Option>
        <span>Mostrar mais</span>
      </Option>
    </Container>
  );
}

export default List;
