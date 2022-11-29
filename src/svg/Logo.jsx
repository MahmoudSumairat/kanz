import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const Logo = props => (
  <Svg
    width={138}
    height={35}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M2.35.2v23.55L25.95.2h2.6L14 14.7 28.5 35h-2.2L12.7 16 2.35 26.35V35H.5V.2h1.85Zm47.212 0h1.95l14.3 34.8h-2l-4.7-11.5h-17.15L37.212 35h-1.95L49.562.2Zm-6.85 21.5h15.65l-7.85-19.1-7.8 19.1ZM73.923 35V.2h1.95l24.3 23.6V.2h1.85V35h-1.85v-8.6l-24.4-23.8V35h-1.85ZM137.485.2l-.05 1.85-23.5 31.1h23.55V35h-25.85v-1.85l23.45-31.1h-22.9V.2h25.3Z"
      fill="#DA5B6E"
    />
  </Svg>
);

export default Logo;
