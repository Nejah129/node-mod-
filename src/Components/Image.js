import React from "react";
import jsx from '../Components/Images/jsx.png'

const Image = () => {
  return (
    <div>
      <img
        src="https://miro.medium.com/max/1720/1*Rvs7u_g6dnDTRF-FMY4vsA.png"
        className="JSX-Picture"
        alt="jsx"
      />
      <img src={jsx} alt="hop"/>
    </div>
  );
};

export default Image;
