import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Portfolio = () => {
  return (
    <div className="section bg-neutral-200">
      <Container className="container-default my-5">
        {/* Project Cards Section */}
        <div className="mg-top-64px">
          <div className="w-dyn-list">
            <Row className="">
              {/* Example of a Project Card */}
              {[
                {
                  href: '/portfolio/nutriscan',
                  imgSrc: '/assets/nutriscan.png',
                  title: 'NutriScan Mobile Application',
                  description: 'Intuitive design and comprehensive features make healthy eating and nutritional tracking accessible and enjoyable for everyone.',
                  client: 'NutriScan',
                  date: 'May 2023',
                },
                {
                    href: '/portfolio/eshop',
                    imgSrc: '/assets/eshop.png',
                    title: 'E-Commerce Shopping Experience',
                    description: 'Creating a Seamless shopping experience.',
                    client: 'E-shop',
                    date: 'Jun 2022',
                  }
                // Add more project details here
              ].map((project, index) => (
                <Col key={index} role="listitem" className="project-card-wrapper show-circle-link w-dyn-item">
                  <a href={project.href} className="project-card show-link-circle w-inline-block">
                    <div
                      data-w-id="f6682e11-c2a8-1137-5665-08107aaf821a"
                      className="link-circle-card-wrapper"
                      
                    >
                      <div>View</div>
                    </div>
                    <div className="image-wrapper-animation">
                      <img
                        src={project.imgSrc}
                        alt="Project Image"
                        className="image-animation"
                        
                      />
                    </div>
                    <div className="project-details-wrapper">
                      <div
                        data-w-id="f6682e11-c2a8-1137-5665-08107aaf8220"
                        className="project-card-details left"
                    
                      >
                        <div className="flex details">
                          <div>{project.client}</div>
                          <div className="text-divider"></div>
                          <div>{project.date}</div>
                        </div>
                        <h3 className="project-card-title">{project.title}</h3>
                        <p className="project-card-subtext">{project.description}</p>
                      </div>
                    </div>
                  </a>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Portfolio;
