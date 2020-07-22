import React from 'react';
import StickyBox from 'react-sticky-box';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

import List from '../List';

import WhatsHappening from '../WhatsHappening';
import FollowSuggestion from '../FollowSuggestion';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="O que está acontecendo"
            elements={[
              <WhatsHappening
                subtitle="Covid-19"
                time="há 1 hora"
                title="EUA compram 100% das doses de vacina Pfizer e BioNTech podem produzir em 2020"
                isPromoted
                promoted="Promovido por Record News"
              />,
              <WhatsHappening
                subtitle="Covid-19"
                time="há 1 hora"
                title="EUA compram 100% das doses de vacina Pfizer e BioNTech podem produzir em 2020"
                isMoment
                moment="EUA e China"
              />,
              <WhatsHappening
                subtitle="Covid-19"
                time="há 1 hora"
                title="EUA compram 100% das doses de vacina Pfizer e BioNTech podem produzir em 2020"
                isMoment
                moment="EUA e China"
              />,
              <WhatsHappening
                subtitle="Covid-19"
                time="há 1 hora"
                title="EUA compram 100% das doses de vacina Pfizer e BioNTech podem produzir em 2020"
                isPromoted
                promoted="Promovido por Record News"
              />,
              <WhatsHappening
                subtitle="Covid-19"
                time="há 1 hora"
                title="EUA compram 100% das doses de vacina Pfizer e BioNTech podem produzir em 2020"
                isMoment
                moment="EUA e China"
              />,
            ]}
          />

          <List
            title="Talvez você curta"
            elements={[
              <FollowSuggestion
                name="Nícolas Carvalho"
                user="@nicolasdev1"
                isPromoted
                promoted="Promovido"
              />,
              <FollowSuggestion
                name="Nícolas Carvalho"
                user="@nicolasdev1"
              />,
              <FollowSuggestion
                name="Nícolas Carvalho"
                user="@nicolasdev1"
                isPromoted
                promoted="Promovido"
              />,
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
}

export default SideBar;
