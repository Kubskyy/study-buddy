import { Button } from 'components/atoms/Button/Button';

import React from 'react';
import {
  ArticleWrapper,
  NewSectionHeader,
  TitleWrapper,
  Wrapper,
} from './NewsSection.styles';

const NewsSection = () => {
  return (
    <Wrapper>
      <NewSectionHeader>News feed section</NewSectionHeader>
      <ArticleWrapper>
        <TitleWrapper>
          <h3>Lorem ipsum</h3>
          <p>Tech news</p>
        </TitleWrapper>
        <p>
          rem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus
          odio non felis tempor, sodales lacinia neque ornare. Pellentesque
          vestibulum libero tempus odio dignissim lobortis. Phasellus et
          placerat augue, non pulvinar massa. Interdum et malesuada fames ac
          ante ipsum primis in faucibus. Maecenas egestas augue in dui euismod
          consequat.
        </p>
        <Button isBig>Read more</Button>
      </ArticleWrapper>
    </Wrapper>
  );
};

export default NewsSection;
