import Navbar from "../components/Navbar";
import boy from "../assets/img/boy.png";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="home-main">
        <div className="circle"></div>
        <div className="home container">
          <div className="left">
            <h1>Ankit Gupta</h1>
            <p>A Passionate Software Developer.</p>
          </div>
          <div className="right">
            <img
              style={{
                width: "100%",
                height: "80%",
                position: "relative",
                top: "5rem",
              }}
              src={boy}
              alt="boy-holding-laptop"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
