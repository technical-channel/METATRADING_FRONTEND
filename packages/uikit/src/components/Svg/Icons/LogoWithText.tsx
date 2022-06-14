import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg width="30px"  xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 497.6 435.8" xmlSpace="preserve">

  <style type="text/css" dangerouslySetInnerHTML={{__html: "\n.st0{fill:none;stroke:#000000;stroke-width:10;stroke-miterlimit:10;}\n.st1{fill:none;stroke:#000000;stroke-width:13;stroke-miterlimit:10;}\n.st2{fill:#FFFFFF;}\n.st3{fill:none;stroke:#000000;stroke-width:8;stroke-miterlimit:10;}\n.st4{fill:none;stroke:#000000;stroke-width:11;stroke-miterlimit:10;}\n" }} />
  <g>
    <g>
      <path className="st2" d="M58.9,210.3C58.9,210.3,58.9,210.4,58.9,210.3l16.1,0c0,0,0,0,0,0H58.9z M229.6,390.4    c-81.1-8.1-145.8-72.7-153.9-153.8H59.5c8.2,89.9,79.9,161.7,169.8,170c-0.9-2.4-1.3-5-1.3-7.7C228,395.8,228.5,393,229.6,390.4z     M417.7,236.5c-7.8,78.4-68.5,141.4-145.8,152.8c1.3,2.9,2,6.1,2,9.4c0,2.3-0.3,4.6-1,6.7c85.7-12,153-82,161-169H417.7z     M418.3,210.3C418.3,210.3,418.4,210.4,418.3,210.3l16.1,0c0,0,0,0,0,0H418.3z M227.8,37c0-1.6,0.2-3.2,0.5-4.8    C138.9,41,67.7,112.6,59.5,202.1h16.2c8.1-81.5,73.4-146.4,155.1-153.9C228.9,44.9,227.8,41.1,227.8,37z" />
    </g>
    <g>
      <path className="st2" d="M271.9,389.4c-2.4-5.3-6.7-9.6-12.1-11.8v-69.4c-4,0-8,0.1-11.8,0.1c-2.1,0-4.2,0-6.2,0v69.5    c-5.6,2.4-10,7-12.2,12.6c-1,2.6-1.6,5.4-1.6,8.4c0,2.7,0.5,5.3,1.3,7.7c3.2,8.9,11.7,15.2,21.6,15.2c10.4,0,19.1-6.9,22-16.3    c0.6-2.1,1-4.4,1-6.7C273.9,395.4,273.2,392.2,271.9,389.4z M252.7,407.2L252.7,407.2c-0.6,0.1-1.2,0.2-1.8,0.2    c-0.5,0-0.9,0-1.3-0.1h0c-4.1-0.6-7.3-4.2-7.3-8.5c0-1.9,0.6-3.7,1.7-5.1c0.7-1,1.7-1.8,2.8-2.4c1.2-0.7,2.6-1,4.1-1    c1.3,0,2.6,0.3,3.7,0.9c1.3,0.6,2.4,1.5,3.2,2.6c1.1,1.4,1.7,3.2,1.7,5.1C259.6,402.9,256.6,406.4,252.7,407.2z" />
    </g>
    <g>
      <path className="st2" d="M469.3,202.1c-6.2,0-11.7,3.3-14.7,8.3H411c-3.9-9.8-13.5-16.6-24.6-16.6h-17.8v-17.9    c0-15.8-10.7-29.6-25.9-33.5c-18.4-4.8-47.2-10.5-82.9-11.6c-5.8-0.2-11.8-0.2-17.9-0.2c-24.7,0.3-52,3-80.9,9.6    c-15.8,3.6-26.8,17.5-26.8,33.8v19.8h-14.5c-7.3,0-14,3-18.8,7.8c-2.5,2.5-4.5,5.5-5.8,8.9H47.5c-3-5-8.5-8.3-14.7-8.3    c-9.5,0-17.2,7.7-17.2,17.2c0,9.5,7.7,17.2,17.2,17.2c6.2,0,11.7-3.3,14.7-8.3h46.8c3.4,10.8,13.5,18.5,25.3,18.5h14.5v24.6    l-0.3,6.5c-0.4,4.3,1,8.7,4.2,12.3c6.7,7.7,24.9,17.5,103.9,18c2,0,4.1,0,6.2,0c3.8,0,7.7,0,11.8-0.1c0.3,0,0.7,0,1,0h0.3    c1,0,24.6-0.9,48.9-3.8c41.7-4.9,57.6-11.9,58.6-25.8v-31.8h17.8c7.3,0,14-3,18.8-7.8c3-3,5.3-6.6,6.6-10.8h42.8    c3,5,8.5,8.3,14.7,8.3c9.5,0,17.2-7.7,17.2-17.2C486.5,209.8,478.8,202.1,469.3,202.1z M346.4,274.3c-10.4,5.6-51.4,10.5-86,11.8    c-78.3,0.9-99.2-6.6-104.4-9.4l0.2-4.3l0-98.4c0-5.8,4-10.9,9.5-12.1c75.9-17.3,139.9-6.2,171.3,2c5.5,1.4,9.3,6.4,9.3,12.1V274.3    z" />
    </g>
    <g>
      <rect x="170.6" y="234.2" className="st2" width={28} height={38} />
    </g>
    <g>
      <rect x="214.9" y="212.4" className="st2" width={28} height="59.8" />
    </g>
    <g>
      <rect x="255.6" y="187.4" className="st2" width={28} height="84.8" />
    </g>
    <g>
      <rect x="300.8" y="172.3" className="st2" width={28} height="99.9" />
    </g>
    <g>
      <path className="st2" d="M273.5,33.3C271.7,22.3,262.2,14,250.8,14c-11.1,0-20.3,7.8-22.5,18.2c-0.3,1.5-0.5,3.1-0.5,4.8    c0,4.1,1.1,7.9,2.9,11.2c2.5,4.4,6.4,8,11.1,10v72.4c6.1-0.1,12.1,0,17.9,0.2V58.2c4.4-1.9,8.1-5.1,10.6-9.1    c78,10.8,139.5,74.1,147.4,153h16.2C426,115.4,358.9,45.5,273.5,33.3z M250.8,45.6c-4.8,0-8.6-3.9-8.6-8.6c0-2.2,0.8-4.1,2.1-5.6    c1.6-1.8,3.9-3,6.5-3c2.7,0,5.2,1.3,6.7,3.3c1.2,1.5,1.9,3.3,1.9,5.3C259.4,41.8,255.5,45.6,250.8,45.6z" />
    </g>
  </g>




    </Svg>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
