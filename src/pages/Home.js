import Footer from "../components/layout/footer";
import Navbar from "../components/layout/navbar";
import Fade from "react-reveal/Fade";

const Home = () => {
  return (
    <div className="bgPrimary">
      <Navbar />
      <section className="py-32">
        <div className="angry-grid max-w-screen-lg mx-auto h-screen">
          <Fade>
            <div className="card item-0 px-20 py-10">
              <h2 className="text-4xl font-bold flex bg-gradient-to-b from-[#ffe993] to-[#eb831c] bg-clip-text text-transparent">
                Boudra Tristan
              </h2>
              <p className="text-4xl font-bold flex ml-10 mt-10 bg-gradient-to-b from-[#ffe993] to-[#eb831c] bg-clip-text text-transparent">
                Web Developer at OpenClassroom
              </p>
            </div>
          </Fade>
          <Fade delay={100}>
            <div className="card item-1 px-20 py-10 relative">
              <img
                src={require("../assets/focus.png")}
                className="h-auto w-72 mx-auto absolute top-1 left-14"
                alt=""
              />
              <p className="text-xl font-bold text-center justify-center flex mt-16 bg-gradient-to-b from-[#ffe993] to-[#eb831c] bg-clip-text text-transparent">
                + 10 innovative <br /> projects
              </p>
            </div>
          </Fade>
          <Fade delay={200}>
            <div className="card item-2 relative px-20 py-10 flex items-start justify-center">
              <img
                src={require("../assets/photo_profile.png")}
                className="h-96 w-auto rounded-lg mx-auto absolute top-0 left-44"
                alt=""
              />
              <p className="text-5xl font-bold flex items-center bg-gradient-to-b from-[#ffe993] to-[#eb831c] bg-clip-text text-transparent">
                I'm ready to work with you !
              </p>
            </div>
          </Fade>
          <Fade delay={300}>
            <div className="card item-3 px-20 py-10 text-center flex">
              <p className="text-4xl font-bold flex items-center bg-gradient-to-b from-[#ffe993] to-[#eb831c] bg-clip-text text-transparent">
                Many experiences in the development
              </p>
            </div>
          </Fade>
          <Fade delay={400}>
            <div className="card item-4 px-20 py-10 flex relative">
              <img
                src={require("../assets/heart.png")}
                className="h-auto w-28 z-0 absolute top-0 right-0"
                alt=""
              />
              <p className="text-4xl font-bold z-10 text-center flex items-center bg-gradient-to-b from-[#ffe993] to-[#eb831c] bg-clip-text text-transparent">
                A developer passionate about his job
              </p>
            </div>
          </Fade>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
