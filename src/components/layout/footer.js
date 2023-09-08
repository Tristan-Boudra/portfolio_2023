import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="font-poppins bg-[#161616] py-10">
        <div className="flex flex-row justify-between py-5 max-w-screen-lg mx-auto border border-slate-200 border-t-[0.5px] border-l-0 border-r-0 border-b-0">
            <div className="sectionCol">
                <h2 className="font-bold">Pages</h2>
                <ul className="ulList">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/project">Projects</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
            <div className="sectionCol">
                <h2 className="font-bold">Social</h2>
                <ul className="ulList">
                    <li><Link to="https://www.linkedin.com/in/tristan-boudra-a43b6918a/">Linkedin</Link></li>
                    <li><Link to="https://twitter.com/TristanBoudra">Twitter</Link></li>
                </ul>
            </div>
            <div className="sectionCol">
                <h2 className="font-bold">Contact</h2>
                <ul className="ulList">
                    <li><a href="mailto:boudratristan@gmail.com">Email</a></li>
                    <li><a href="telto:0777117198">Phone</a></li>
                </ul>
            </div>
            <div className="sectionCol">
                <h2 className="font-bold">Legal</h2>
                <ul className="ulList">
                    <li><Link to="/">Privacy Policy</Link></li>
                    <li><Link to="/">Terms of Use</Link></li>
                </ul>
            </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
