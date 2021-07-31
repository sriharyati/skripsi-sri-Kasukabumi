import React, { Component } from "react";

import Header from 'parts/Header';
import TestimoniTittle from 'parts/TestimoniTittle';
import Testimoni from 'parts/Testimoni';
import TestimonyFrom from 'parts/TestimonyFrom';
import Button from "elements/Button";
import Stepper, {
  Numbering,
  Meta,
  MainContent,
  Controller,
} from "elements/Stepper";
import Footer from 'parts/Footer';
import landingPage from "json/landingPage.json";
export default class Example extends Component {
  state = {
    data: {
      rate: "",
      photo: "",
      judul: "",
      konten: "",
      nama: "",
      perkerjaan: "",
    },
  };

  onChange = (event) => {
    this.setState({
      data: {
        ...this.state.data,
        [event.target.name]: event.target.value,
      },
    });
  };
  componentDidMount() {
    window.scroll(0, 0);
    document.title = "Kasukabumi | Testimoni";
  }
  render() {
    const { data } = this.state;
    const steps = {
      testimonyFrom: {
        title: "Input Testimoni",
        description: "Please fill up the blank fields below",
        content: (
          <TestimonyFrom
            data={data}
            onChange={this.onChange}
          />
        ),
      },
    }
      return (
          <>
          <Header {...this.props}></Header>
          <TestimoniTittle></TestimoniTittle>
          <Testimoni data={landingPage.testimonial}/>
          <Stepper steps={steps} initialStep="testimonyFrom">
          {(prevStep, nextStep, CurrentStep, steps) => (
            <>
              <Meta data={steps} current={CurrentStep} />

              <MainContent data={steps} current={CurrentStep} />

              {CurrentStep === "testimonyFrom" && (
                <Controller>
                  {data.rate !== "" &&
                    data.photo !== "" &&
                    data.judul !== "" &&
                    data.konten !== "" &&
                    data.nama !== "" &&
                    data.perkerjaan !== "" && (
                        <Button
                          className="btn mb-3"
                          type="button"
                          isBlock
                          isPrimary
                          hasShadow
                          onClick={nextStep}
                        >
                          Continue to Book
                        </Button>  
                    )}
                  <Button
                    className="btn"
                    type="link"
                    isBlock
                    isPrimary
                    hasShadow
                    href="/"
                  >
                    Simpan Testimoni
                  </Button>
                </Controller>
              )}
            </>
          )}
        </Stepper>
          <Footer/>
          </>
      )
  }
}
