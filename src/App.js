import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar, Card } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Navbar expand="lg" id="navbar_top">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="../public/logo.png"
              alt="Logo"
              style={{ maxHeight: 80, maxWidth: 150 }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#experience">Experience</Nav.Link>
              <Nav.Link href="#education">Education</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#languages">Languages</Nav.Link>
              <Nav.Link href="#certificates">Certificates</Nav.Link>
              <Nav.Link href="#links">Useful links</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="text-center" data-aos="fade-in">
        <h1 className="display-4">Vadym Liss</h1>
        <p className="lead">Master Engineer and Full-Stack Developer</p>
        <p className="contact-info">
          <span className="email">moc.liamg@77ssilmidav</span> | 
          <span className="phone">+48884001830</span> | 
          Dusseldorf
        </p>
      </Container>
      <Container data-aos="fade-in">
        <Card className="mb-3" id="about">
          <Card.Header>
            <h2>About</h2>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              I am a 24-year-old Master Engineer and full-stack developer with 3.5 years commercial and 6 years non-commercial experience.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="mb-3" id="experience">
          <Card.Header>
            <h2>Experience</h2>
          </Card.Header>
          <Card.Body>
            <h4 className="card-title">Junior DevOps - ISS</h4>
            <h5 className="card-subtitle"><b>Dusseldorf | Feb 2024 - Present</b></h5>
            <ul className="rounded-list">
              <li>Experienced in Java development, working with APIs to enhance file transfer functionality, integrate third-party services, and automate workflows using Groovy.</li>
              <li>Skilled in Document Management Systems (DMS), particularly Doxis, where I developed scripts for agents and the web version to enable custom operations, preprocessing over 1,000 files in tailored workflows.</li>
              <li>Proficient in Jira for project coordination and Excel for data-driven reporting.</li>
              <li>As a DevOps engineer, implemented OCR solutions in Python with EasyOCR and Pytesseract, successfully preprocessing more than 60,000 images.</li>
              <li>Deployed containerized projects on Azure for machine learning, analyzed data for model definition and preprocessing, and developed RESTful APIs with multi-protocol support and monitoring tools.</li>
              <li>Experienced with VPN and communication protocols to ensure solution stability across systems.</li>
              <li>Additionally, leveraged Power Automate and Power Apps to improve customer response and process efficiency.</li>
            </ul>
            <hr />
            <h4 className="card-title">Information Technologies Tutor - Freelance</h4>
            <h5 className="card-subtitle"><b>Wrocław | Sep 2023 - Present</b></h5>
            <ul className="rounded-list">
              <li>Experienced in C++, C, and Java programming, including mentoring and explaining concepts to students.</li>
              <li>Additionally responsible for creating websites, REST APIs, and Android applications to demonstrate and explore new technologies with clients.</li>
            </ul>
            <hr />
            <h4 className="card-title">Junior Android Developer - Emognition</h4>
            <h5 className="card-subtitle"><b>Wrocław | Feb 2022 - Oct 2022</b></h5>
            <ul className="rounded-list">
              <li>Implemented and refactored Kotlin code with Firebase and RxJava, developed JUnit tests, and built UI functionalities with Cucumber while testing the Emognition Android app for physical signal examination, serving 100+ active testers and users.</li>
              <li>Additionally, developed secure RESTful APIs to protect user-generated data, extended Node.js/Python scripts for data scraping, and optimized SQL/NoSQL databases for analysis and performance.</li>
              <li>Collaborated via Git/GitHub, applied Agile practices, and created responsive React.js front-ends.</li>
            </ul>
          </Card.Body>
        </Card>
        <Card className="mb-3" id="education">
          <Card.Header>
            <h2>Education</h2>
          </Card.Header>
          <Card.Body>
            <h4 className="card-title">Master Engineer Applied Computer Science - Politechnika Wrocławska</h4>
            <h5 className="card-subtitle"><b>Mar 2023 - Jul 2025</b></h5>
            <p className="card-text">GPA: 5.0 (Bardzo dobry)</p>
          </Card.Body>
          <Card.Body>
            <h4 className="card-title">Engineer Algorithmic Computer Science - Politechnika Wrocławska</h4>
            <h5 className="card-subtitle"><b>Oct 2019 - Jan 2023</b></h5>
            <p className="card-text">GPA: 4.5 (Dobry plus)</p>
          </Card.Body>
        </Card>
        <Card className="mb-3" id="skills">
          <Card.Header>
            <h2>Skills</h2>
          </Card.Header>
          <Card.Body>
            <div className="skills-container">
              <div className="skill">DevOps</div>
              <div className="skill">Java</div>
              <div className="skill">Android</div>
              <div className="skill">Python</div>
              <div className="skill">DMS</div>
              <div className="skill">Communication</div>
              <div className="skill">Problem-Solving</div>
              <div className="skill">Teamwork</div>
              <div className="skill">Groovy</div>
              <div className="skill">Doxis</div>
              <div className="skill">Jira</div>
              <div className="skill">Excel</div>
              <div className="skill">OCR</div>
              <div className="skill">EasyOCR</div>
              <div className="skill">Pytesseract</div>
              <div className="skill">Azure</div>
              <div className="skill">RESTful APIs</div>
              <div className="skill">VPN</div>
              <div className="skill">Power Automate</div>
              <div className="skill">Power Apps</div>
              <div className="skill">C++</div>
              <div className="skill">C</div>
              <div className="skill">Kotlin</div>
              <div className="skill">Firebase</div>
              <div className="skill">RxJava</div>
              <div className="skill">JUnit</div>
              <div className="skill">Cucumber</div>
              <div className="skill">Node.js</div>
              <div className="skill">SQL</div>
              <div className="skill">NoSQL</div>
              <div className="skill">Git/GitHub</div>
              <div className="skill">Agile</div>
              <div className="skill">React.js</div>
            </div>
          </Card.Body>
        </Card>
        <Card className="mb-3" id="languages">
          <Card.Header>
            <h2>Languages</h2>
          </Card.Header>
          <Card.Body>
            <ul className="rounded-list">
              <li>Polish (C1)</li>
              <li>English (B2)</li>
              <li>Ukrainian (C2)</li>
              <li>Russian (C2)</li>
              <li>German (A1)</li>
            </ul>
          </Card.Body>
        </Card>
        <Card className="mb-3" id="certificates">
          <Card.Header>
            <h2>Certificates</h2>
          </Card.Header>
          <Card.Body>
            <h4 className="card-title">Technical Support Fundamentals - Coursera</h4>
            <h5 className="card-subtitle"><b>Jul 2021</b></h5>
          </Card.Body>
        </Card>
        <Card className="mb-3" id="links">
          <Card.Header>
            <h2>Useful links</h2>
          </Card.Header>
          <Card.Body>
            <p className="card-text"></p>
            <div className="d-flex bd-highlight">
              <div className="p-2 flex-fill bd-highlight links-icon">
                <a href="https://www.linkedin.com/in/vadym-liss/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </a>
              </div>
              <div className="p-2 flex-fill bd-highlight links-icon">
                <a href="https://github.com/Foxxich">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-github"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </a>
              </div>
              <div className="p-2 flex-fill bd-highlight links-icon">
                <a href="https://github.com/Foxxich/foxxich.github.io/blob/main/files/cv.pdf">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-file-person"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z" />
                    <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  </svg>
                </a>
              </div>
            </div>
            <p />
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default App;