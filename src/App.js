import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar, Card, Button } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg" id="navbar_top">
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
              <Nav.Link href="#links">Useful links</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="text-center" data-aos="fade-in">
        <h1 className="display-4">Vadym Liss</h1>
        <p className="lead">Software Developer</p>
      </Container>
      <Container data-aos="fade-in">
        <Card className="mb-3" id="about">
          <Card.Header>
            <h2>About</h2>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              I'm a dedicated software developer with a passion for crafting
              exceptional Android, Python, and NodeJS applications. I've played
              a pivotal role in shaping of software stack, focusing primarily on
              Android development. My strengths lie in effective communication,
              collaborative teamwork, and meticulous technical documentation.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="mb-3" id="experience">
          <Card.Header>
            <h2>Experience</h2>
          </Card.Header>
          <Card.Body>
            <h4 className="card-title">Software Developer - Emognition</h4>
            <h5 className="card-subtitle">
              <b>April, 2022 - Present</b>
            </h5>
            <p className="card-text">
              <b>Android Application Development:</b>
            </p>
            <ul>
              <li>
                Implemented and refactored Kotlin code to enhance functionality
                and user experience.
              </li>
              <li>
                Developed and executed comprehensive JUnit tests to ensure the
                robustness.
              </li>
              <li>
                Conducted thorough Android application testing to identify and
                rectify issues.
              </li>
            </ul>
            <p className="card-text">
              <b>Documentation:</b>
            </p>
            <ul>
              <li>
                Successfully completed documentation for multiple projects,
                ensuring clear and accessiblereference materials for the team.
              </li>
            </ul>
            <p className="card-text">
              <b>API Development:</b>
            </p>
            <ul>
              <li>
                Implemented RESTful APIs to enable efficient data exchange and
                communication betweendifferent software components.
              </li>
            </ul>
            <p className="card-text">
              <b>Node.js and Python Scripting:</b>
            </p>
            <ul>
              <li>
                Collaborated in extending the functionality of Node.js and
                Python scripts.
              </li>
              <li>
                Demonstrated proficiency in web scraping using Python,
                extracting valuable data fromweb sources.
              </li>
            </ul>
          </Card.Body>
        </Card>

        <Card className="mb-3" id="education">
          <Card.Header>
            <h2>Education</h2>
          </Card.Header>
          <Card.Body>
            <h4 className="card-title">
              Engineer of Algorithmic Computer Science (Software Engineering) -
              Wrocław University of Science and Technology
            </h4>
            <h5 className="card-subtitle">
              <b>2019 - 2023</b>
            </h5>
            <p className="card-text" />
          </Card.Body>
          <Card.Body>
            <h4 className="card-title">
              Master of Applied Computer Science (Software Engineering) -
              Wrocław University of Science and Technology
            </h4>
            <h5 className="card-subtitle">
              <b>2023 - 2024</b>
            </h5>
            <p className="card-text" />
          </Card.Body>
        </Card>

        <Card className="mb-3" id="skills">
          <Card.Header>
            <h2>Skills</h2>
          </Card.Header>
          <Card.Body>
            <div className="skills-container">
              <div className="skill">Java</div>
              <div className="skill">Kotlin</div>
              <div className="skill">Dagger</div>
              <div className="skill">Python</div>
              <div className="skill">Compose</div>
              <div className="skill">REST API</div>
              <div className="skill">SQL</div>
              <div className="skill">Git</div>
              <div className="skill">Node.js</div>
              <div className="skill">Android</div>
              <div className="skill">HTML</div>
              <div className="skill">CSS</div>
              <div className="skill">Hilt</div>
              <div className="skill">Docker</div>
              <div className="skill">Firebase</div>
              <div className="skill">Glide</div>
              <div className="skill">RxJava2</div>
              <div className="skill">Django</div>
              <div className="skill">Cucumber</div>
              <div className="skill">Espresso</div>
              <div className="skill">Linux</div>
              <div className="skill">Bash</div>
              <div className="skill">Jira</div>
              <div className="skill">Threads</div>
            </div>
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
                <a href="https://pl.linkedin.com/in/vadym-liss-a63657216">
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

        {/* Repeat for Experience, Education, Skills, and Useful links sections with appropriate Card components */}
      </Container>
    </div>
  );
}

export default App;
