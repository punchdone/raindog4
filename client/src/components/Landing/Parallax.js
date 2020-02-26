import React, { useEffect } from 'react';
import M from 'materialize-css';
import Image from '../../assets/images/IMG_1573.jpeg';
import Image2 from '../../assets/images/IMG_1576.jpg';

const Parallax = () => {

  useEffect(() => {
    let elements = document.querySelectorAll(".parallax");
    M.Parallax.init(elements);
  }, []);

  return (
    <div>
      <div className="parallax-container" style={{height: "300px"}}>
        <div className="parallax"><img className="responsive-img" src={Image} alt="doors" /></div>
      </div>
      <div className="section white">
        <div className="row container">
          <h2 className="header">Samples</h2>
          <p className="grey-text text-darken-3 lighten-3">Rainier makes it possible to checkout samples from our selection center.  An important part of this selection process is returning the samples.  Please be aware that there is a $7.95 charge for each finish sample and $89.95 charge for each door sample if not returned with 21 days.  Your RW representative can help you get samples checked out through this system.</p>
        </div>
      </div>
      <div className="parallax-container">
        <div className="parallax"><img className="responsive-img" src={Image2} alt="finishes" /></div>
      </div>
    </div>
  );
};

export default Parallax;
