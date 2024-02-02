import React from 'react';
import styled from "styled-components";
import { other_images } from '../utils/images';

const Hero = () => {
  return (
    <HeroWrapper className="bg-black">
      <div className='container h-100 flex'>
        <div className='hero-content'>
          <h1>Your training, solved.</h1>
          <p>Shop our big sale for courses from $9.99. If you want to learn it. Sale Ends on Dec. 31.</p>
        </div>
      </div>
    </HeroWrapper>
  )
}

const HeroWrapper = styled.div`
  background: url(${other_images.hero1}) center/cover no-repeat;
  height: 300px;

  .container{
    .hero-content{
      background-color: var(--clr-white);
      max-width: 400px;
      width: 100%;
      margin-left: 0;
      padding: 20px;

      h1{
        font-size: 32px;
        margin-bottom: 5px;
        white-space: nowrap;
      }
      p{
        font-size: 15px;
      }
    }
  }
`;

export default Hero