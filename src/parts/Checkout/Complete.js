import React from "react";
import Fade from "react-reveal/Fade";
import CompletedIllustration from "assets/images/completed.jpg";
import Button from "elements/Button";

export default function Complete() {
  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center text-center">
          <div className="col-4">
            <img
              src={CompletedIllustration}
              className="img-fluid"
              alt="completed checkout apartment"
            /><br></br>
            <Button className="btn"
                    type="link"
                    isBlock
                    isPrimary
                    hasShadow 
                    href="/example">
                Lihat Testimonial
            </Button>
          </div>
          
        </div>
      </div>
    </Fade>
  );
}
