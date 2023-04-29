import "./Landing.css";
import Footer from "../Footer/Footer.js";
import LogoImage from "../Images/NavLogo.png";
import CheckIcon from "../Images/hero-image.svg";
import ComputerWoman from "../Images/computerWoman.png";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="pageBody">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <img
            src={LogoImage}
            alt="Projectboard Logo"
            style={{ height: "70px", width: "70px" }}
          />
          <h3 className="navbar-nav linkText" href="/">
            Projectboard
          </h3>
          <button
            className="navbar-toggler button-color"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item nav-button">
                <a className="nav-link" aria-current="page" href="/login">
                  Log In
                </a>
              </li>
              <li className="nav-item nav-button">
                <a className="nav-link" href="/register">
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header className="page-header gradient">
        <div className="container pt-3">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-4">
              <h1>Welcome to Projectboard</h1>
              <p>A project management web-application that makes tracking and managing projects easier, faster and efficient</p>
              <Link
                type="button"
                className="btn btn-outline-info btn-lg signUpBtn"
                to="/register"
              >
                Sign Up
              </Link>
            </div>
            <div className="col-md-5">
              <img
                className="hero-image"
                src={CheckIcon}
                alt="a man standing before a completed checklist"
              />
            </div>
            {/* image from: https://www.vecteezy.com/vector-art/4474417-setting-the-alarm-clock-for-work-plan-reminders */}
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,32L48,37.3C96,43,192,53,288,80C384,107,480,149,576,138.7C672,128,768,64,864,53.3C960,43,1056,85,1152,90.7C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </header>
      <section className="optask">
        <div class="container">
          <h1 className=" optask_heading ">Manage your Project</h1>
          <div class="row">
            <div class="col-md-4 col-xl-3">
              <div class="card bg-c-blue order-card">
                <div class="card-block">
                  <h6 class="m-b-20">Start-Project</h6>
                  <h2 class="text-right">
                    <i class="fa fa-cart-plus f-left"></i>
                    <span>01</span>
                  </h2>
                  <p class="m-b-0">
                    Setup Account<span class="f-right">1.1</span>
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-4 col-xl-3">
              <div class="card bg-c-green order-card">
                <div class="card-block">
                  <h6 class="m-b-20">Add Project</h6>
                  <h2 class="text-right">
                    <i class="fa fa-rocket f-left"></i>
                    <span>02</span>
                  </h2>
                  <p class="m-b-0">
                    Project Tittle and Details<span class="f-right">2.1</span>
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-4 col-xl-3">
              <div class="card bg-c-yellow order-card">
                <div class="card-block">
                  <h6 class="m-b-20">Add Tasks</h6>
                  <h2 class="text-right">
                    <i class="fa fa-refresh f-left"></i>
                    <span>03</span>
                  </h2>
                  <p class="m-b-0">
                    Enter Your Tasks<span class="f-right">3.1</span>
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-4 col-xl-3">
              <div class="card bg-c-pink order-card">
                <div class="card-block">
                  <h6 class="m-b-20">Manage Tasks</h6>
                  <h2 class="text-right">
                    <i class="fa fa-credit-card f-left"></i>
                    <span>04</span>
                  </h2>
                  <p class="m-b-0">
                    Activity Overview<span class="f-right">4.1</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="feature gradient">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,64L48,58.7C96,53,192,43,288,64C384,85,480,139,576,181.3C672,224,768,256,864,229.3C960,203,1056,117,1152,96C1248,75,1344,117,1392,138.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
        <div className="container" role="complementary">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-5">
              <img src={ComputerWoman} alt="woman working at a computer" />
            </div>
            {/* image from: https://www.vecteezy.com/vector-art/227880-female-developer-vector*/}
            <div className="col-md-5 Landing-h1">
              <h2 className="my-3">What can Projectboard do?</h2>
              <p className="my-4">
                Projectboard is reimaging how project management can be done. By
                streamlining the process and giving you a place to keep track of
                all of your projects, you no longer need to go anywhere else to
                keep track of your work.
              </p>
              <ul>
                <li> Create a project.</li>
                <li> Add tasks.</li>
                <li> Get projects done.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="accordion" id="accordionExample">
          <h1 className="faq-heading">FAQ - Your Common Issues Solved</h1>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Things you can do with "Project-Board Application"
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong>Create and manage projects:</strong> You can create new
                projects and organize them by categories, departments, or other
                relevant criteria
                <strong>Create and manage tasks:</strong> Within each project,
                you can create individual tasks, assign them to team members,
                set deadlines, and track their progress.
                <strong>Track progress: </strong>You can use the project board
                application to visualize the progress of each project and task,
                and to monitor key metrics such as completion rates and time to
                completion.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Benefits of Project-Management
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Project management is the process of planning, organizing, and
                overseeing resources and tasks to achieve specific goals within
                a defined timeframe. It is essential for project success, and
                involves a combination of technical skills, leadership
                abilities, and communication skills. Project management is used
                in various industries, and there are several popular
                methodologies and software tools available to assist with the
                process.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Methods of Project-Management
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                There are several types of project management methods, each with
                its own approach to planning, executing, and controlling
                projects. Here are some of the most popular methods: Waterfall:
                A linear approach that involves a sequential flow of project
                activities, from planning and design to testing and deployment.
                Agile: An iterative and collaborative approach that emphasizes
                flexibility, adaptability, and continuous improvement. Scrum: A
                specific type of Agile methodology that involves short,
                time-boxed iterations or sprints, with a focus on delivering
                working software at the end of each sprint. Kanban: A visual
                workflow management system that emphasizes the flow of work and
                limiting work in progress.
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container mb-3">
        <Footer />
      </div>
    </div>
  );
};

export default Landing;
