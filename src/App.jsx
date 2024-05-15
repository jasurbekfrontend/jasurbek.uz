import { useRef, useState } from "react";
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
import { FaYoutube } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";

import issiqbuloq from "./assets/img/issiq-buloq.png";
import nexccent from "./assets/img/nexcent.png";
import uzchatter from "./assets/img/uz-chatter.png";
import crm from "./assets/img/crm-img.png";
import applogo from "./assets/img/app-logo.png";
import shopping from "./assets/img/shoppinga-app.png";
import axios from "axios";
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
      img: uzchatter,
      url: "https://uzchatter.netlify.app/",
      tech: "React JS",
      title: "Online chatting system",
      subtitle:
        "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
    },
    {
      id: 2,
      img: nexccent,
      tech: "React JS",
      url: "https://nexcent-site.vercel.app/",
      title: "Landing page",
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
    {
      id: 4,
      img: shopping,
      tech: "React JS",
      url: "https://fruit-shopping-app.vercel.app/",
      title: "Shopping website",
      subtitle:
        "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
    },
    {
      id: 4,
      img: applogo,
      tech: "HTML(file source)",
      url: "https://fruit-shopping-app.vercel.app/",
      title: "Download my application",
      subtitle:
        "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
    },
    {
      id: 4,
      img: crm,
      tech: "React JS, Mockapi.io",
      url: "https://napitka-crm.vercel.app/",
      title: "CRM web site",
      subtitle:
        "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
    },
  ];
  const [modalToggle, setModalToggle] = useState(false);

  const [formdata, setFormdata] = useState({
    firstName: "",
    phoneNumber: "",
    message: "",
  });

  const sec1 = useRef(null);
  const sec2 = useRef(null);
  const sec3 = useRef(null);
  const sec4 = useRef(null);
  const sec5 = useRef(null);
  const sec7 = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({
      ...formdata,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = "7144513024:AAHhU48rb_emyURzr7DrHHNEJwldEC5Z8e0";
      const chatId = "@jasurbek_zakaz";

      await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
        chat_id: chatId,
        text: `Name: ${formdata.firstName}\nPhone: ${formdata.phoneNumber}\nMessage: ${formdata.message}`,
      });

      setFormdata({
        firstName: "",
        message: "",
        phoneNumber: "",
      });
    } catch (error) {
      console.error("Xato ketdi", error);
    }
  };
  return (
    <div className="wrapper">
      <a className="telegram" href="https://t.me/jasurbek_react">
        <FaTelegramPlane />
      </a>
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
        <button
          className="modal-toogle"
          onClick={() => setModalToggle(!modalToggle)}
        >
          <FaBars />
        </button>
      </nav>
      <div className="section1" ref={sec1}>
        <div
          className="modal"
          style={
            modalToggle === true
              ? { transform: "translateX(0)" }
              : { transform: "translateX(300px)" }
          }
        >
          <p onClick={() => scrollToSection(sec1)}>Home</p>
          <p onClick={() => scrollToSection(sec2)}>About</p>
          <p onClick={() => scrollToSection(sec3)}>Process</p>
          <p onClick={() => scrollToSection(sec4)}>Portfolio</p>
          <p onClick={() => scrollToSection(sec5)}>Services</p>
          <p onClick={() => scrollToSection(sec7)}>Contact</p>
        </div>
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
          <img src={""} alt="" />
        </div>
      </div>
      <div className="section2" ref={sec2}>
        <div className="cardS2">
          <div className="leftS2card">
            <div className="cardImg">
              <img src={""} alt="" />
              <div className="social_links">
                <a href="https://www.youtube.com/channel/UC-tLM8xv9shDjzZOE4Ik7gA">
                  <FaYoutube />
                </a>
                <a href="https://t.me/jasurbek_react">
                  <FaTelegramPlane />
                </a>
                <a href="https://www.instagram.com/jasurbek_frontend">
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
                  <a href="mailto:jasurbekfrontend@gmail.com?subject=Hello!">
                    jasurbekfrontend@gmail.com
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
            <form onSubmit={handleSubmit}>
              <b>Let’s discuss your Project</b>
              <input
                type="text"
                placeholder="Your name"
                value={formdata.firstName}
                name="firstName"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Phone number"
                value={formdata.phoneNumber}
                onChange={handleChange}
                name="phoneNumber"
              />
              <input
                type="text"
                placeholder="About your project"
                value={formdata.message}
                onChange={handleChange}
                name="message"
              />
              <button type="submit">
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
