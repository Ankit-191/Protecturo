import { Accordion, Col, Container, Row } from "react-bootstrap";
import faqs from "../assets/images/webp/faqs.webp";
const Faqs = () => {
  return (
    <>
      <section className="faqs_shadow position-relative overflow-hidden">
        <Container className="position-relative py-lg-5 py-4">
          <Row className="align-items-xl-center justify-content-center py-xl-5">
            <Col xl={6} className="py-xxl-5">
              <p className="textred ff_Gilroy fw_700 fs_2xl">FAQs</p>
              <h5 className="ff_Gilroy fw_700 fs_6xl clr_gray_200 mb-4 pb-xl-3">
                Some useful answers
              </h5>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    what are the main objectives of cyber security?
                  </Accordion.Header>
                  <Accordion.Body>
                    At vero eos et accusamus et iusto odio dign era sue issimos
                    ducimus qui blanditiis praesentium vol uptatum deleniti
                    atque corrupti.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    What are the three types of cyber threats?
                  </Accordion.Header>
                  <Accordion.Body>
                    At vero eos et accusamus et iusto odio dign era sue issimos
                    ducimus qui blanditiis praesentium vol uptatum deleniti
                    atque corrupti.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    How can you protect yourself from cyber security?
                  </Accordion.Header>
                  <Accordion.Body>
                    At vero eos et accusamus et iusto odio dign era sue issimos
                    ducimus qui blanditiis praesentium vol uptatum deleniti
                    atque corrupti.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    What would happen without cyber security?
                  </Accordion.Header>
                  <Accordion.Body>
                    At vero eos et accusamus et iusto odio dign era sue issimos
                    ducimus qui blanditiis praesentium vol uptatum deleniti
                    atque corrupti.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    Is cyber security a social or governance issue?
                  </Accordion.Header>
                  <Accordion.Body className="ff_Gilroy fw_500 fs_sm clr_white">
                    At vero eos et accusamus et iusto odio dign era sue issimos
                    ducimus qui blanditiis praesentium vol uptatum deleniti
                    atque corrupti.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
            <Col sm={6} lg={5} xl={6}>
              <div className="position_xxl_absolute faqsimg_mw_668px bottom-0 end-0 mt-4 mt-xl-0">
                <img src={faqs} alt="faqs" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Faqs;
