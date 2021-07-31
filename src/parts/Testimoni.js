import React from 'react';
import Fade from 'react-reveal/Fade'
import TestimonyAccent from 'assets/images/testimonial-landingpages.jpg'
import Star from 'elements/Star';
import Button from 'elements/Button';

export default function Testimoni({data}) {
    return data.map((testimonial, index1) => {
        if (testimonial.length === 0) return null;
        return (
            <Fade bottom>
            <section className="container" key={`testimonial-${index1}`}>
                <div className="row align-items-center">
                    <div className="col-auto" style={{ marginRight: 70 }}>
                        <div
                         className="testimmonial-hero"
                         style={{ margin: `70px 0 0 70px`}}
                         >
                             <img 
                             src={testimonial.imageUrl}
                             alt="Testimonial" 
                             className="position-absolute"
                             style={{zIndex: 1}}/>
                         </div>
                    </div>
                    <div className="col-6">
                        <h4 style={{marginBottom: 40}}>
                            {testimonial.name}
                        </h4>
                        <Star value={testimonial.rate} width={39} height={35} spacing={7}></Star>
                        <h5 className="h5 font-weight-light line-height-2 my-3">
                            {testimonial.content}
                        </h5>
                        <span className="text-gray-500">
                            {testimonial.familyName}, {testimonial.familyOccupation}
                        </span>
                        
                    </div>
                </div>
            </section>
            </Fade>
          );
    }
    )
    
}
