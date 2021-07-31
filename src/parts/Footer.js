import React from 'react';


import Button from 'elements/Button';
import BrandIcon from 'parts/iconText';

export default function Footer() {
    return (
        
        <footer>
           <div className="container">
               <div className="row">
                   <div className="col-auto" style={{ width: 358}}>
                       <BrandIcon />
                       <p className="brand-tagline">
                           Membuat pengalaman liburan menjadi menyenangkan
                       </p>
                   </div>
                   <div className="col-auto mr-5">
                       <h6 className="mt-2">For Beinners</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button type="link" href="/register">
                                    New Account
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/properties">
                                    Star Booking a Room
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/use-payments">
                                    Use Payments
                                </Button>
                            </li>
                        </ul>
                   </div>
                   <div className="col-auto mr-5">
                       <h6 className="mt-2">Explore Us</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button type="link" href="/careers">
                                    Our Careers
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/privacy">
                                    Privacy
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/terms">
                                    Terms & Conditions
                                </Button>
                            </li>
                        </ul>
                   </div>
                   <div className="col-3">
                       <h6 className="mt-2">Connect Us</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button type="link" href="mailto:support@kasukabumi.id">
                                    support@kasukabumi.id
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="tel:+622122081887">
                                    0212-2081-8870
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <span>kasukabumi, Surade, Sukabumi</span>
                            </li>
                        </ul>
                   </div>
               </div>
               <div className="row">
                   <div className="col text-center copyright">
                       copyright 2021 All right reserved Kasukabumi
                   </div>
               </div>
               </div> 
        </footer>
        
    )
}
