import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { FaLinkedin, FaGithub } from "react-icons/fa"; // Import LinkedIn and GitHub icons

function Home() {
  return (
    <div>
      <div
        className="text-crop-animation-wrapper p-5"
        style={{ backgroundColor: "#f8f9fa" }}
      >
        <Row className="py-5 my-5">
          <Col md={4} className="d-flex flex-column align-items-center">
            <Image
              src="/assets/kawtharpic.png"
              roundedCircle
              fluid
              className="my-3"
              alt="Kawthar Mashkour"
              style={{ maxWidth: 275, maxHeight: 275 }}
            />
            <div>
              <a
                href="https://www.linkedin.com/in/kawthar-mashkour"
                target="_blank"
                rel="noopener noreferrer"
                className="me-3"
              >
                <FaLinkedin size={24} color="black" />
              </a>
              <a
                href="https://github.com/Kawtharmashkour"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={24} color="black" />
              </a>
            </div>
          </Col>
          <Col md={7}>
            <h1 className="heading-2">
              <strong>Kawthar Mashkour</strong>
            </h1>
            <h3 className="heading">Mobile / Web Application Developer</h3>
            <h4 className="paragraph-large justified-text pe-5" style={{ opacity: 0.6 }}>
              A Multidisciplinary experienced Developer with 
              skill set extends to designing and implementing mobile and web
              applications, and I have successfully led teams across multiple
              projects and campaigns. I get passion about technology stuff, will
              jump at the chance to scuba dive.
            </h4>
          </Col>
        </Row>
      </div>

      <section id="about-us" className="section">
        <Container className="container-default">
          <Row className="align-items-center">
            <Col md={6}>
              <div className="number-top-wrapper d-flex align-items-center my-3">
                <div
                  className="number-line"
                  style={{
                    width: "30px",
                    height: "2px",
                    backgroundColor: "#000",
                  }}
                ></div>
                <div style={{ fontSize: "24px" }}>01</div>
              </div>
              <h2 className="pb-5">
                <strong>Mission</strong>
              </h2>
            </Col>
            <Col>
              <p
                className="paragraph-large strong justified-text"
                style={{ fontFamily: `'Clash Display', sans-serif` }}
              >
                My mission is to spotlight your bright ideas in the endless
                digital solutions space for creativity, innovation, and positive
                change in people's lives.
              </p>
            </Col>
            <div md={6} className="position-relative">
              <div className="about-image-home-v2 image-1">
                <div className="image-wrapper-animation">
                  <img
                    className="image-animation pt-4"
                    src="https://cdn.prod.website-files.com/619f6d59e23aa676a02c506f/644f9d73d7cf76f3418ec625_woman-making-modern-app-interface.jpeg"
                    alt="Modern app interface"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
              <div className="about-image-home-v2 image-2">
                <div className="image-wrapper-animation">
                  <img
                    className="image-animation"
                    src="https://cdn.prod.website-files.com/619f6d59e23aa676a02c506f/644f9d720229793b0bf162ca_charming-caucasian-businesswoman-striped-shirt-working-with-laptop-papers-light-apartment.jpeg"
                    alt="Businesswoman working"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </section>

      <div
        data-w-id="0a747f81-3163-b72c-f4c4-cc0e0966eaa6"
        className="divider-vertical"
        style={{ opacity: 1 }}
      ></div>

      <div className="section bg-neutral-200 home-v2-portfolio">
        <div className="container-default w-container">
          <div className="w-layout-grid top-content">
            <div className="text-crop-animation-wrapper">
              <div
                data-w-id="d68893ac-7f09-2f9f-6dae-40255cf24a08"
                style={{ opacity: 1 }}
              >
                <div className="number-top-wrapper">
                  <div className="number-line"></div>
                  <div>02</div>
                </div>
                <h2>A quick glance of my past projects</h2>
              </div>
            </div>
            <a
              id="w-node-d68893ac-7f09-2f9f-6dae-40255cf24a0b-4e2c508e"
              data-w-id="d68893ac-7f09-2f9f-6dae-40255cf24a0b"
              style={{ opacity: 1 }}
              href="/portfolio"
              className="button-secondary w-button"
            >
              Browse all projects
            </a>
          </div>
          <div>
            <div role="list" className="w-dyn-items">
              <div
                role="listitem"
                className="project-card-wrapper v2 w-dyn-item"
              >
                
                  <div className="w-layout-grid project-card-grid">
                    <div
                      id="w-node-_6b1c5999-9d40-4839-a587-8bdee1bfc5e1-4e2c508e"
                      className="project-details-wrapper v2"
                    >
                      <div data-w-id="4f80fb2c-cf54-df5a-02e3-d70f6fc7fddf">
                        <h3 className="project-card-title v2">
                          NutriScan
                        </h3>
                        <p className="project-card-subtext v2">
                        Intuitive design and comprehensive features make healthy eating and nutritional tracking accessible and enjoyable for everyone.
                        </p>
                        <div className="link-underline-wrapper">
                          <div>View Case Study</div>
                          <div className="underline-wrapper">
                            <div
                              style={{ width: "0%" }}
                              className="underline"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="image-wrapper-animation">
                      <img
                        data-w-id="0faa9808-d195-c69a-fa5c-bf222d8ae573"
                        alt=""
                        src="/assets/nutriscan.png"
                        sizes="(max-width: 479px) 90vw, (max-width: 767px) 94vw, (max-width: 1439px) 95vw, (max-width: 1919px) 1092px, 1232px"
                        className="image-animation"
                      />
                    </div>
                    <div
                      data-w-id="97a03106-39fb-1dcd-7d80-b60d6307b81a"
                      className="link-circle-card-wrapper"
                    >
                      <div>View</div>
                    </div>
                  </div>
            
              </div>
              <div
                role="listitem"
                className="project-card-wrapper v2 w-dyn-item"
              >
                <div className="w-layout-grid project-card-grid">
                  <div
                    id="w-node-_6b1c5999-9d40-4839-a587-8bdee1bfc5e1-4e2c508e"
                    className="project-details-wrapper v2"
                  >
                    <div data-w-id="4f80fb2c-cf54-df5a-02e3-d70f6fc7fddf">
                      <h3
                        className="project-card-title v2"
                        style={{ opacity: 1 }}
                      >
                        E-Commerce Shopping Experience
                      </h3>
                      <p className="project-card-subtext v2">
                        Creating a Seamless shopping experience.
                      </p>
                      <div className="link-underline-wrapper">
                        <div>View Case Study</div>
                        <div className="underline-wrapper">
                          <div
                            style={{ width: "0%" }}
                            className="underline"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="image-wrapper-animation">
                    <img
                      data-w-id="0faa9808-d195-c69a-fa5c-bf222d8ae573"
                      alt=""
                      src="/assets/eshop.png"
                      sizes="(max-width: 479px) 90vw, (max-width: 767px) 94vw, (max-width: 1439px) 95vw, (max-width: 1919px) 1092px, 1232px"
                      className="image-animation"
                    />
                  </div>
                  <div
                    data-w-id="97a03106-39fb-1dcd-7d80-b60d6307b81a"
                    className="link-circle-card-wrapper"
                  >
                    <div>View</div>
                  </div>
                </div>
              </div>
              <div
                role="listitem"
                className="project-card-wrapper v2 w-dyn-item"
              >
                
                  <div className="w-layout-grid project-card-grid">
                    <div
                      id="w-node-_6b1c5999-9d40-4839-a587-8bdee1bfc5e1-4e2c508e"
                      className="project-details-wrapper v2"
                    >
                      <div data-w-id="4f80fb2c-cf54-df5a-02e3-d70f6fc7fddf">
                        <h3
                          className="project-card-title v2"
                          style={{ opacity: 1 }}
                        >
                          Transforming the educational grading and reward management systems in UCMAS.
                        </h3>
                        <p className="project-card-subtext v2">
                        Leveraging modern technology to streamline grading, automate administrative tasks, and enhance communication in education.
                        </p>
                        <div className="link-underline-wrapper">
                          <div>View Case Study</div>
                          <div className="underline-wrapper">
                            <div
                              style={{ width: "0%" }}
                              className="underline"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="image-wrapper-animation">
                      <img
                        data-w-id="0faa9808-d195-c69a-fa5c-bf222d8ae573"
                        alt=""
                        src="/assets/ucmas.png"
                        sizes="(max-width: 479px) 90vw, (max-width: 767px) 94vw, (max-width: 1439px) 95vw, (max-width: 1919px) 1092px, 1232px"
                        className="image-animation"
                      />
                    </div>
                    <div
                      data-w-id="97a03106-39fb-1dcd-7d80-b60d6307b81a"
                      className="link-circle-card-wrapper"
                    >
                      <div>View</div>
                    </div>
                  </div>
            
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
