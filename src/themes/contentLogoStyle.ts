import styled from 'styled-components';
import Fadein from '../animations/FadeInAnimation';
import { ContentLogo } from '../paths/ImagesPath';
import { GRAY700 } from '../colors/Colors';

// fadeinAnimation.ts 상속
const ContentLogoStyle = styled( Fadein )`
  position: absolute;
  width: 400px;
  height: 338px;
  padding-top: 280px;

  text-align: center;
  font-family: sans-serif;
  font-size: 15px;
  color: ${ GRAY700 };

  background-size: 400px 338px;
  background-repeat: no-repeat;
  background-image: url(${ ContentLogo });
`;

export default ContentLogoStyle;