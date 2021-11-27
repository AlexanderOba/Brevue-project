import React, { useEffect } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import Header_2 from "../Header_2/header_2";
import Footer from "../Footer/footer";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = props => {
  console.log(props);
  useEffect(() => {
    AOS.init({
      duration: 1500
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <div>
        <Header_2
          style={{
            boxShadow: "0 0 10px rgb(0 0 0 / 30%)",
            position: "relative"
          }}
        />
      </div>
      <div className="Hmpgsection_one">
        <Container>
          <Row>
            <Col md={12} className="Hmpgsection_one-col">
              <h3 className="HmpgHeading_primary">
                AWESOME TEMPLATE FOR COURIER & DELIVERY SERVICES
              </h3>
              <a className="Hmpgsection_one--btn" href="/services">
                <span >View our Services</span>
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default Home;
