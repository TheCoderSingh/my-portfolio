import "./Home.scss";
import { BsCodeSlash } from "react-icons/bs";

const Home = () => {
  return (
    <div className="home">
      <p className="greeting">Hello!</p>
      <p className="name">I&apos;m Jaskaran</p>
      <p className="username">
        <span>@TheCoderSingh</span>
      </p>
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
        lacus vel facilisis.
      </p>
      <div className="section">
        <div className="icon-container">
          <BsCodeSlash />
        </div>
        <p>Wanna skip to the good part?</p>
        <p>View my projects</p>
      </div>
      <hr />
      <div className="section">
        <p>Wanna skip to the good part?</p>
        <p>View my projects</p>
        <div className="icon-container">
          <BsCodeSlash />
        </div>
      </div>
    </div>
  );
};

export default Home;
