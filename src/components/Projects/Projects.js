import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cart from "../../Assets/Projects/786cart.png";
import Auth from "../../Assets/Projects/Auth.png";
import Todo from "../../Assets/Projects/Todo.png";
import Codeguide from "../../Assets/Projects/Codeguide.png";
import Game from "../../Assets/Projects/Game.png";
import Portfolio from "../../Assets/Projects/Portfolio.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Auth}
              isBlog={false}
              title="Authentication"
              description="Online Authentication app where user can login and signup ,implemented using JWT authentication .Only a demo website how authenticatio works."
              ghLink="https://github.com/Utkarshsingh786/Auth-Client/tree/main"
              demoLink="https://auth-client-bbtw.onrender.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Todo}
              isBlog={false}
              title="Todo-App"
              description="Todo App where user can create ,read ,update and delete their notes/todos .The application is build using MERN Stack, Simple UI and multiple operation learning."
              ghLink="https://github.com/Utkarshsingh786/Client"
              demoLink="https://todo-app-6gih.onrender.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cart}
              isBlog={false}
              title="786Cart"
              description="An E-commerce website using wordpress .Where customer can buy anything just a demo website not any authentication is set and payment are also not available just for usecase user can add to cart the selected item and make their own wishlist."
              // ghLink=""
              demoLink="https://dev-768kart.pantheonsite.io/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Game}
              isBlog={false}
              title="Car-game"
              description="This is a javascipt based game website where user can play a car game .More the user go more they score and the score is displayed in the browser .This is only made using HTML ,CSS and JAVASCRIPT."
              ghLink="https://github.com/Utkarshsingh786/Car-game"
              demoLink="https://utkarshsingh786.github.io/Car-game/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Codeguide}
              isBlog={false}
              title="CodeGuide"
              description="This is my own website i have this for the begineers who are new to the programming can learn from the best resources for some topics as per my suggestion .The all website is only created using HTML and CSS."
              ghLink="https://github.com/Utkarshsingh786/My-First-Website"
              demoLink="https://utkarshsingh786.github.io/My-First-Website/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              isBlog={false}
              title="Portfolio"
              description="It is my personal portfolio website where i have mentioned everything you need to know about me,it is build using React and Bootstrap and also a Responsive website."
              ghLink="https://github.com/Utkarshsingh786/Portfolio"
              demoLink="https://main--cerulean-semifreddo-a65e65.netlify.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
