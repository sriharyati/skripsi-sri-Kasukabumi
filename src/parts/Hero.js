import React from 'react'
import Fade from 'react-reveal/Fade'
import ImageHero from 'assets/images/img-hero.jpg'
import ImageHero_ from 'assets/images/img-hero-frame.jpg'
import IconCity from 'assets/images/icons/icon_location.svg'
import IconTravel from 'assets/images/icons/icon_travel.svg'
import IconTreasure from 'assets/images/icons/icon_camera.svg'

import Button from 'elements/Button'
export default function Hero(props) {

    function showMostPicked() {
        window.scrollTo({
            top: props.refMostPicked.current.offsetTop - 30,
            behavior: "smooth"
        });       
    }


    return (
        <Fade bottom>
        <section className="container pt-4">
            <div className="row align-items-center">
                <div className="col-auto pr-5" style={{ width: 530}}>
                    <h1 className="h2 font-weight-bold line-height-1 mb-1">
                        Lupakan pekerjaanmu, <br/>
                        Ayo Liburan saja!
                    </h1><br/>
                    <p
                     className="mb-9 font-weight-light text-gray-500 w-75"
                     style={{ lineHeight:"170%"}}
                    >
                        kami menyediakan tempat nyaman untuk anda
                        ber istirahat dengan lokasi yang berada dengan 
                        tempat wisata
                    </p><br/>
                    <Button
                        className="btn px-5"
                        hasShadow
                        isPrimary
                        onClick={showMostPicked}
                        >
                        Show Me Now
                    </Button>

                    <div className="row mt-5">
                        <div className="col-auto" style={{ marginRight: 35}}>
                            <img 
                            width="36" 
                            height="36" 
                            src={IconTravel} 
                            alt={`${props.data.travelers} Travelers`}
                            />
                            <h6 className="mt-3">
                                {props.data.travelers} {" "} 
                                <span className="text-gray-500 font-weight-light">
                                    travelers
                                </span>
                            </h6>
                        </div>
                        <div className="col-auto" style={{ marginRight: 35}}>
                            <img 
                            width="36" 
                            height="36" 
                            src={IconTreasure} 
                            alt={`${props.data.treasures} Treasures`}
                            />
                            <h6 className="mt-3">
                                {props.data.treasures} {" "} 
                                <span className="text-gray-500 font-weight-light">
                                    treasures
                                </span>
                            </h6>
                        </div>
                        <div className="col-auto" style={{ marginRight: 35}}>
                            <img 
                            width="36" 
                            height="36" 
                            src={IconCity} 
                            alt={`${props.data.cities} Cities`}
                            />
                            <h6 className="mt-3">
                                {props.data.cities} {" "} 
                                <span className="text-gray-500 font-weight-light">
                                    cities
                                </span>
                            </h6>
                        </div>
                    </div>
                </div>

                <div className="col-6 pl-5">
                    <div style={{ width: 520, height: 400}}>
                        <img 
                        src={ImageHero}
                        alt="Room with couches"
                        className="img-fluid position-absolute"
                        style={{ margin: "-10px 0 0 -10px", zIndex: 1}} 
                        />
                        <img 
                        src={ImageHero_}
                        alt="Room with couches frame"
                        className="img-fluid position-absolute"
                        style={{ margin: "0 -30px -30px 0"}} 
                        />
                    </div>

                </div>
            </div>
        </section>
        </Fade>
    );
}
