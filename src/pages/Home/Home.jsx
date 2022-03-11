import "./Home.scss";
import { FaCode } from "react-icons/fa";
import { RiArrowDownSLine } from "react-icons/ri";
import { GiCoffeeCup } from "react-icons/gi";

const Home = () => {
  return (
    <div className="home">
      <p className="greeting">Hello!</p>
      <p className="name">I&apos;m Jaskaran</p>
      <p className="username">
        <span>@TheCoderSingh</span>
      </p>
      <p className="description">
        I believe we, the developers have the ability and the opportunity to
        <span className="description-special">
          {" "}
          &ldquo;revolutionize the world through code&rdquo;
        </span>
        .
        <br />
        <br />
        I&apos;m a{" "}
        <span className="description-special">
          Frontend/Full Stack Developer
        </span>{" "}
        currently looking for opportunities.
      </p>
      <div className="section section-1">
        <div className="icon-container">
          <FaCode />
        </div>
        <div>
          <p className="section-title">Wanna skip to the good part?</p>
          <p>View my projects</p>
        </div>
      </div>
      <hr />
      <div className="section section-2">
        <div>
          <p className="section-title">Let&apos;s get a cup of coffee.</p>
          <p>Contact Me</p>
        </div>
        <div className="icon-container">
          <GiCoffeeCup />
        </div>
      </div>
      <div className="section-arrow">
        <RiArrowDownSLine />
      </div>
    </div>
  );
};

export default Home;
