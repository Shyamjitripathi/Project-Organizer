import "./Footer.css";

function Footer() {
  return (
    <footer className="text-center text-lg-start footer-design">
      <div className="mt-3">
        <div className="row align-items-center row-design">
          <div className="col-lg-4 col-md-4 mb-4 mb-md-0 footer-section">
            <p className="text-uppercase colorDesign footer-p">ProjectBoard</p>
            <ul className="list-unstyled mb-0">
              <li>
                <p className="footer-para">Major-Project</p>
              </li>
              <li>
                <p className="footer-para">By- Ashish, Saumya, Richa</p>
              </li>
              <li>
                <p className="footer-para">Ravindra, Harsh and Shyamji</p>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-4 mb-4 mb-md-0 footer-section">
            <p className="text-uppercase colorDesign footer-p">Resources</p>
            <ul className="list-unstyled mb-0">
              <li>
                <a
                  href="https://github.com/Ravindra9555/ProjectBoard"
                  className="text-dark"
                >
                  Project-Management
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Ravindra9555/ProjectBoard"
                  className="text-dark"
                >
                  Types of Management
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-4 mb-4 mb-md-0 footer-section">
            <p className="text-uppercase colorDesign footer-p">Links</p>
            <ul className="list-unstyled mb-0">
              <li>
                <a
                  href="https://github.com/Ravindra9555/ProjectBoard"
                  className="text-dark"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
