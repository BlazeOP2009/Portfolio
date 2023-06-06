import Avatar from "../../src/assets/rounded_corners.png";
import { Link } from "react-router-dom";
import "../styles/about.css";

export default function About() {
  return (
    <div className="content">
      <div className="short-about">
        <h2>Hi, I am BlazeOP</h2>
        <hr />
        <p>
          I am a freelancer, and I specialize <br /> in content writing &
          frontend web <br /> development with 6 months of experience. <br /> And I can
          provide you the following services:-
        </p>
        <ul>
          <li>Content Writing</li>
          <li>Article Writing</li>
          <li>Blog Writing</li>
          <li>Advertisement Writing</li>
          <li>Product Description Writing</li>
          <li>Website Content Writing</li>
          <li>Essay Writing</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
      </div>
      <img src={Avatar} alt="Avatar" />
      <div className="service-info">
        <span>
          I provide services for content writing <br /> & developing frontend websites and
          portfolios. <br /> Also, feel free to check out my{" "}
          <Link to="/pastworks" className="link">
            previous projects
          </Link>{" "}
          <br /> to assess the quality of my work. If you are <br /> interested in hiring
          me, please contact me on Discord.
        </span>
      </div>
    </div>
  );
}
