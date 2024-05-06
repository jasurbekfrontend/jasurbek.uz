import { useRef, useState } from "react";
import profile_img from "./assets/img/20240428_123525-removebg-preview.png";
import laptop from "./assets/svg/laptop.svg";
import calendar from "./assets/svg/calendar.svg";
import trade from "./assets/svg/trade.svg";
import pencil from "./assets/svg/pencil.svg";
import rightarrow from "./assets/svg/rightarrow.svg";
import send from "./assets/svg/send.svg";
import install from "./assets/svg/install.svg";

import { IoLocationOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { FaPhoneAlt } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

import issiqbuloq from "./assets/img/issiqbuloq.png";
import frossh from "./assets/img/frossh.png";
import sanone from "./assets/img/sanone.png";
function App() {
  const cardS3data = [
    {
      id: 1,
      img: calendar,
      title: "Research",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.",
    },
    {
      id: 2,
      img: trade,
      title: "Analyze",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.",
    },
    {
      id: 3,
      img: pencil,
      title: "Design",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.",
    },
    {
      id: 4,
      img: laptop,
      title: "Launch",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.",
    },
  ];

  const portfolioData = [
    {
      id: 1,
      img: sanone,
      url: "http://sanone.uz/",
      tech: "React JS",
      title: "Online shopping website",
      subtitle:
        "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
    },
    {
      id: 2,
      img: frossh,
      tech: "React JS",
      url: "http://frossh.uz/",
      title: "Online marketplace",
      subtitle:
        "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
    },
    {
      id: 3,
      img: issiqbuloq,
      tech: "HTML + CSS",
      url: "http://issiq-buloq.netlify.app/",
      title: "Landing page",
      subtitle:
        "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
    },
  ];

  const sec1 = useRef(null);
  const sec2 = useRef(null);
  const sec3 = useRef(null);
  const sec4 = useRef(null);
  const sec5 = useRef(null);
  const sec7 = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="wrapper">
      <nav>
        <div className="logo">
          <div>
            <b>J</b>
          </div>
          <p>Jasurbek</p>
        </div>
        <div className="links">
          <p onClick={() => scrollToSection(sec1)}>Home</p>
          <p onClick={() => scrollToSection(sec2)}>About</p>
          <p onClick={() => scrollToSection(sec3)}>Process</p>
          <p onClick={() => scrollToSection(sec4)}>Portfolio</p>
          <p onClick={() => scrollToSection(sec5)}>Services</p>
          <button onClick={() => scrollToSection(sec7)}>Contact</button>
        </div>
      </nav>
      <div className="section1" ref={sec1}>
        <div className="leftS1">
          <b>Hello, I’m Jasurbek</b>
          <span>
            I'm a Freelance front end developer based in Namangan, Uzbekistan. I
            strives to build immersive and beautiful web applications through
            carefully crafted code and user-centric design.
          </span>
          <button>Say Hello!</button>

          <div className="stats">
            <b>
              15 Y.
              <p>Experience</p>
            </b>
            <b>
              250+
              <p>Project Completed</p>
            </b>
            <b>
              58
              <p>Happy Client</p>
            </b>
          </div>
        </div>
        <div className="rightS1">
          <img src={profile_img} alt="" />
        </div>
      </div>
      <div className="section2" ref={sec2}>
        <div className="cardS2">
          <div className="leftS2card">
            <div className="cardImg">
              <img src={profile_img} alt="" />
              <div className="social_links">
                <a href="#">
                  <FaFacebookF />
                </a>
                <a href="https://t.me/jasurbek_react">
                  <FaTelegramPlane />
                </a>
                <a href="https://www.instagram.com/jasur._.m/">
                  <FaInstagram />
                </a>
                <a href="https://www.linkedin.com/in/jasurbek-mo-minjonov-1ba429300/">
                  <FaLinkedinIn />
                </a>
                <a href="https://github.com/jasurbekk16">
                  <FiGithub />
                </a>
              </div>
            </div>
          </div>
          <div className="rightS2card">
            <b>I am Professional Frontend Developer</b>
            <span>
              Specializing in the art of crafting visually stunning interfaces
              and captivating user experiences, I design and develop modern
              websites, web services, and online stores. With a fervent passion
              for creating digital landscapes that delight and inspire, I bring
              elegance and innovation to every project.
            </span>
            <span>
              I specialize in developing services catered to clients seeking
              stylish and modern websites and web services. With a focus on
              innovation and functionality, I create digital experiences that
              captivate users and drive business growth.
            </span>
            <div className="s2Buttons">
              <button>My project</button>
              <button>
                <img src={install} alt="" /> Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="section3" ref={sec3}>
        <div className="leftS3">
          <b>Work Process</b>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
            arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices
            eget lorem ac vestibulum. Suspendis imperdiet,
          </span>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
            arcu, varius eget velit non.
          </span>
        </div>
        <div className="rightS3">
          <div className="s3Container">
            {cardS3data.slice(0, 2).map((item) => (
              <div className="cardS3">
                <div className="cardImgs3">
                  <img src={item.img} alt="" />
                </div>

                <b>
                  {item.id}. {item.title}
                </b>
                <span>{item.subtitle}</span>
              </div>
            ))}
          </div>
          <div className="s3Container">
            {cardS3data.slice(2, 4).map((item) => (
              <div className="cardS3">
                <div className="cardImgs3">
                  <img src={item.img} alt="" />
                </div>
                <b>
                  {item.id}. {item.title}
                </b>
                <span>{item.subtitle}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="section5">
        <b>Do you have Project Idia? Let's discuss your project!</b>
        <span>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.
        </span>
        <button>
          Let’s work Together
          <img src={rightarrow} alt="" />
        </button>
      </div>
      <div className="section4" ref={sec4}>
        <b>Portfolio</b>
        <span>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.
        </span>
        <div className="portfolioContainer">
          {portfolioData.map((item) => (
            <div className="portfolioCard">
              <div className="portfolioImg">
                <img
                  src={item.img}
                  style={{ width: "424px", height: "248px" }}
                  alt=""
                />
              </div>
              <div className="portfolioText">
                <span>{item.tech}</span>
                <b>{item.title}</b>
                <span>{item.subtitle}</span>
                <a href={item.url}>
                  Link <img src={rightarrow} alt="" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="section7" ref={sec5}>
        <div className="leftS7">
          <b>What I do?</b>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
            arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices
            eget lorem ac vestibulum. Suspendis imperdiet,
          </span>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
            arcu, varius eget velit non.
          </span>
          <button>Say Hello!</button>
        </div>
        <div className="rightS7">
          <div>
            <b>User Experience (UX)</b>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris
              ultrices eget lorem ac vestibulum.
            </span>
          </div>
          <div>
            <b>User Interface (UI)</b>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris
              ultrices eget lorem ac vestibulum.
            </span>
          </div>
          <div>
            <b>Web Development</b>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris
              ultrices eget lorem ac vestibulum.
            </span>
          </div>
        </div>
      </div>
      <div className="section8" ref={sec7}>
        <div className="cardS8">
          <div className="leftS8">
            <b>Contact me now</b>

            <div className="contactContainer">
              <div>
                <div className="leftCardS8">
                  <IoLocationOutline />
                </div>
                <div className="rightCardS8">
                  <p>Addres</p>
                  <a href="https://www.google.com/maps/@40.9940839,71.6693363,21z?entry=ttu">
                    Namangan sh. Sardoba
                  </a>
                </div>
              </div>
              <div>
                <div className="leftCardS8">
                  <TfiEmail />
                </div>
                <div className="rightCardS8">
                  <p>My email</p>
                  <a href="mailto:jasurmominjonov2818@gmail.com?subject=Hello!">
                    jasurfrontend@gmail.com
                  </a>
                </div>
              </div>
              <div>
                <div className="leftCardS8">
                  <FaPhoneAlt />
                </div>
                <div className="rightCardS8">
                  <p>Call me now</p>
                  <a href="tel:+998947052818">+998947052818</a>
                </div>
              </div>
            </div>
          </div>

          <div className="rightS8">
            <form>
              <b>Let’s discuss your Project</b>
              <input type="text" placeholder="Your name" />
              <input type="text" placeholder="Phone number" />
              <input type="text" placeholder="About your project" />
              <button>
                Submit <img src={send} alt="" />
              </button>
            </form>
          </div>
        </div>
      </div>
      <footer>
        <div className="footer_logo">
          <div>
            <b>J</b>
          </div>
          <p>Jasurbek</p>
        </div>
        <div className="footer_links">
        <p onClick={() => scrollToSection(sec1)}>Home</p>
          <p onClick={() => scrollToSection(sec2)}>About</p>
          <p onClick={() => scrollToSection(sec3)}>Process</p>
          <p onClick={() => scrollToSection(sec4)}>Portfolio</p>
          <p onClick={() => scrollToSection(sec5)}>Services</p>
          <p onClick={() => scrollToSection(sec7)}>Contact</p>
        </div>
        <p>Copyright © 2024 Jasurbek.</p>
      </footer>
    </div>
  );
}

export default App;
