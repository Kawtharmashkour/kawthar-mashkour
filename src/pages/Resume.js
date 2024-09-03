import React from 'react'
import { Col, Row, Container, Image } from 'react-bootstrap'

function Resume() {
  return (
    <Container className="mt-5">
      <Row style={{marginTop: '150px'}}>
        <Col md={6}>
          <h2 className="fw-bold">Kawthar mashkour</h2>
          <h4 className="fst-italic fw-bold">Mobile/Web Developer</h4>
        </Col>
        <Col md={6}>
            <Image
                src="/avatar.png"
                roundedCircle
                fluid
                className="mb-3"
                style={{ width: '150px' }}
                alt="Profile Avatar"
            />
        </Col>
        </Row>
        <Row>
        <Col md={5}>
          <section className="mt-4">
            <h4 className="fw-bold">About Me</h4>
            <p className="justified-text">
            Aspiring mobile developer currently pursuing an Associate's degree in Mobile Application Development, with a strong foundation in UI/UX design, RESTful API integration, and MVVM architecture gained through academic projects and previous roles in web application development. Skilled in enhancing user experiences by creating intuitive and user-friendly interfaces. Eager to apply my skills in a dynamic, collaborative environment and contribute to impactful mobile projects.
            </p>
          </section>
          <section className="mt-4">
            <h4 className="fw-bold">Education</h4>
            <p>
              <b style={{color:'black'}}>Mobile Application Development</b>
              <br/>
              <b>John Abbott College</b>
              <br/>
              Attestations of Collegial Studies (ACS)
              <br />
              10/2023 - 10/2024, Montreal.
              <br />
            </p>
            <p>
              <b style={{color:'black'}}>Web and Database programming</b>
              <br/>
              <b>Vanier College</b>
              <br/>
              Attestations of Collegial Studies (ACS)
              <br />
              01/2017 - 04/2017, Montreal
              <br />
            
            </p>
            <p>
              <b style={{color:'black'}}>Security in Voice over IP</b>
              <br/>
              <b>Al-Nahrain University</b>
              <br/>
              Master of Science (M.Sc.)
              <br />
              01/2004 - 01/2008, Iraq
              <br />
            
            </p>
          </section>
        </Col>
        <Col md={1}></Col>
        <Col md={5}>
          <section className="mt-4">
            <h4 className="fw-bold">Skills</h4>
            <ul className="list-unstyled">
              <li><Image src="/assets/react.ico"/></li>
              <li>Tax Consultant</li>
              <li>Digital Marketing</li>
              <li>English</li>
              <li>Spanish</li>
            </ul>
          </section>
          <section className="mt-4">
            <h4 className="fw-bold">Experience</h4>
            <p>
              <b>Experience Work</b>
              <br />
              2009-2012
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              diam nonummy nibh euismod tincidunt ut laoreet dolore magna
              aliquam erat volutpat. Ut wisi
            </p>
            <p>
              <b>Experience Work</b>
              <br />
              2012-2014
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              diam nonummy nibh euismod tincidunt ut laoreet dolore magna
              aliquam erat volutpat. Ut wisi
            </p>
            <p>
              <b>Experience Work</b>
              <br />
              2014-2018
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              diam nonummy nibh euismod tincidunt ut laoreet dolore magna
              aliquam erat volutpat. Ut wisi
            </p>
          </section>
        </Col>
      </Row>
    </Container>
  )
}

export default Resume
