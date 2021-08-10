import React, { Component } from "react";
import { connect } from "react-redux";
import Header from 'parts/Header';
import TestimonyFrom from 'parts/TestimonyFrom';
import Button from "elements/Button";
import Stepper, {
  Meta,
  MainContent,
  Controller,
} from "elements/Stepper";
import Footer from 'parts/Footer';
import Complete from "parts/Checkout/Complete";
import { submitTestimonial } from "store/actions/checkout";
class Rating extends Component {
  state = {
    data: {
      photo: "",
      judul: "",
      rate: "",
      konten: "",
      nama: "",
      perkerja: "",
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
  onChangeRating = (event) => {
    this.setState({
      data: {
        ...this.state.data,
        rate: event,
      },
    });
  };
  componentDidMount() {
    document.title = "Kasukabumi | Input Testimoni";
    window.scrollTo(0, 0);
  }

  _Submit = (nextStep) => {
    const { data } = this.state;

    const payload = new FormData();
    payload.append("image", data.photo[0]);
    payload.append("name", data.judul);
    payload.append("rate", data.rate);
    payload.append("content", data.konten);
    payload.append("familyName", data.nama);
    payload.append("familyOccupation", data.pekerja);


    this.props.submitTestimonial(payload).then(() => {
      nextStep();
    });
  };
  render() {
    const { data } = this.state;
    console.log(data)
    const steps = {
      testimonyFrom: {
        title: "Input Testimoni",
        description: "Please fill up the blank fields below",
        content: (
          <TestimonyFrom
            data={data}
            onChange={this.onChange}
            onChangeRating={this.onChangeRating}
          />
        ),
      },
      completed: {
        title: "Yay! Testimoni Telah Tersimpan",
        description: null,
        content: <Complete />,
      },
    }
      return (
          <>
          <Header {...this.props}></Header>
          <Stepper steps={steps} initialStep="testimonyFrom">
          {(prevStep, nextStep, CurrentStep, steps) => (
            <>
              <Meta data={steps} current={CurrentStep} />

              <MainContent data={steps} current={CurrentStep} />

              {CurrentStep === "testimonyFrom" && (
                <Controller>
                  {
                    data.rate !== "" &&
                    data.photo !== "" &&
                    data.judul !== "" &&
                    data.konten !== "" &&
                    data.nama !== "" &&
                    data.perkerja !== ""}
                  <Button
                    className="btn"
                    type="link"
                    isBlock
                    isPrimary
                    hasShadow
                    onClick={() => this._Submit(nextStep)}
                  >
                    Simpan Testimoni
                  </Button>
                </Controller>
              )}
              {CurrentStep === "complete" && (
                <Controller>
                  <Button
                    className="btn"
                    type="link"
                    isBlock
                    isPrimary
                    hasShadow
                    href=""
                  >
                    Lihat Testimoni
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

const mapStateToProps = (state) => ({
  page: state.page,
});
export default connect(mapStateToProps, { submitTestimonial })(Rating);
