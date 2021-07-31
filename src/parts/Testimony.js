import React from 'react';
import Fade from 'react-reveal/Fade'
import TestimonyAccent from 'assets/images/testimonial-landingpages-frame.jpg'
import Star from 'elements/Star';
import Button from 'elements/Button';

export default function Testimony({data}) {
    return (
        <Fade bottom>
        <section className="container">
            <div className="row align-items-center">
                <div className="col-auto" style={{ marginRight: 70 }}>
                    <div
                     className="testimmonial-hero"
                     style={{ margin: `70px 0 0 70px`}}
                     >
                         <img 
                         src={`${process.env.REACT_APP_HOST}/${data.imageUrl}`} 
                         alt="Testimonial" 
                         className="position-absolute"
                         style={{zIndex: 1}}/>
                         <img
                         src={TestimonyAccent}
                         alt="Testimonial frame"
                         className="position-absolute"
                         style={{margin: `-45px 0 0 -45px`}}/>
                         
                         
                     </div>
                </div>
                <div className="col-6">
                    <h4 style={{marginBottom: 40}}>
                        {data.name}
                    </h4>
                    <Star value={data.rate} width={39} height={35} spacing={7}></Star>
                    <h5 className="h2 font-weight-light line-height-2 my-3">
                        {data.content}
                    </h5>
                    <span className="text-gray-500">
                        {data.familyName}, {data.familyOccupation}
                    </span>
                    <div>
                        <Button
                            className="btn px-5"
                            style={{ marginTop: 40}}
                            hasShadow
                            isPrimary
                            type="link"
                            href={`/testimonial/${data._id}`}
                        >
                            Read Their Story
                        </Button>
                    </div>
                </div>
            </div>
        </section>
        </Fade>
    );
}
