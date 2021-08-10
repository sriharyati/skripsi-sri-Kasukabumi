import React, { Component } from "react";
import { connect } from "react-redux";
import Header from 'parts/Header';
import TestimoniTittle from 'parts/TestimoniTittle';
import Testimoni from 'parts/Testimoni';
import Footer from 'parts/Footer';
import { fetchPage } from "store/actions/page";
class Example extends Component {
  componentDidMount() {
    document.title = "Kasukabumi | Testimoni";
    window.scrollTo(0, 0);

    if (!this.props.page.testimonialPage)
      this.props.fetchPage(`${process.env.REACT_APP_HOST}/api/v1/member/testimonial-page`, "testimonialPage");
  }


  render() {
    const { page } = this.props;
    console.log(page);
    if (!page.hasOwnProperty("testimonialPage")) return null;
    
      return (
          <>
          <Header {...this.props}></Header>
          <TestimoniTittle></TestimoniTittle>
          <Testimoni data={page.testimonialPage.testimony}/>
          <Footer/>
          </>
      )
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
});
export default connect(mapStateToProps, { fetchPage })(Example);
