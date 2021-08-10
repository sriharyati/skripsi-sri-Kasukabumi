import React from 'react';
import Fade from 'react-reveal/Fade'
import TestimonyAccent from 'assets/images/testimonial-landingpages.jpg'
import Star from 'elements/Star';
import Button from 'elements/Button';

export default function Testimoni({data}) {
    return data.map((testimony, index1) => {
        if (testimony.length === 0) return null;
        return (
            <Fade bottom>
            <section className="container" key={`testimony-${index1}`}>
                <div className="row align-items-center">
                    <div className="col-auto" style={{ marginRight: 70 }}>
                        <div
                         className="testimmonial-hero"
                         style={{ margin: `70px 0 0 70px`}}
                         >
                             <img 
                             src={`${process.env.REACT_APP_HOST}/${testimony.photoTestimonial}`}
                             alt="Testimonial" 
                             className="position-absolute"
                             style={{zIndex: 1}}/>
                         </div>
                    </div>
                    <div className="col-6">
                        <h4 style={{marginBottom: 40}}>
                            {testimony.name}
                        </h4>
                        <Star value={testimony.rate} width={39} height={35} spacing={7}></Star>
                        <h5 className="h5 font-weight-light line-height-2 my-3">
                            {testimony.content}
                        </h5>
                        <span className="text-gray-500">
                            {testimony.familyName}, {testimony.familyOccupation}
                        </span>
                        
                    </div>
                </div>
            </section>
            </Fade>
          );
    }
    )
    
}
