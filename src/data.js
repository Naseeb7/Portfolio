import JustSocial from "./assets/JustSocial.png"
import CloudNote from "./assets/CloudNote.png"
import TextAndTools from "./assets/TextAndTools.png"
import CodingContests from "./assets/CodingContests.png"
import github from "./assets/github.png"
import linkedin from "./assets/linkedin.png"
import gmail from "./assets/gmail.png"
import MERN from "./assets/MERN-logo.png"
import HTMLCSSJS from "./assets/HTML,CSS,JS.png"
import resume from "./assets/resume.png"
import resumepdf from "./assets/PradoshResume.pdf"

export const projects = [
    {
        title: "JustSocial",
        subtitle: "MERN Stack",
        description:
          "A fully responsive full-stack MERN social media webapp. And the UI is designed using Material-UI. It has a real-time chat functionality and real-time notifications as well. You can toggle between dark and light mode.",
        image: JustSocial,
        techImage: MERN,
        link: "https://astonishing-gelato-875bc7.netlify.app/",
        test : {
          id : "test@test.com",
          password : "testtest",
        }
      },
    {
        title: "CloudNote",
        subtitle: "MERN Stack",
        description:
          "A simple full-stack MERN notes webapp. You can create an account and login using credentials. You can add notes and retrieve saved notes across devices.",
        image: CloudNote,
        techImage: MERN,
        link: "https://whimsical-bunny-5fb082.netlify.app/",
        test : {
          id : "test@test.com",
          password : "testtest",
        }
      },
    {
        title: "TextAndTools",
        subtitle: "HTML, CSS, JS",
        description:
          "A simple webapp of text utilities built using react. TextandTools is an utility app for all your text needs. And to make the long hour sessions easy, feel free to use the themes to your liking.",
        image: TextAndTools,
        techImage: HTMLCSSJS,
        link: "https://ubiquitous-selkie-4f13e6.netlify.app/",
      },
    {
        title: "CodingContests",
        subtitle: "HTML, CSS, JS",
        description:
          "A simple webapp to see the online coding contests list in one place. It has a filter to sort out all the contests within 24 hours.",
        image: CodingContests,
        techImage: HTMLCSSJS,
        link: "https://naseeb7.github.io/CodingContests/",
      },
]

export const skills = [
  "React", "TailwindCSS", "MaterialUI", "JavaScript", "Python", "Node", "MongoDB", "HTML", "CSS"
]

export const links =[
  {
    title : "GitHub",
    link : "https://github.com/Naseeb7",
    image : github,
  },
  {
    title : "LinkedIn",
    link : "https://www.linkedin.com/in/pradosh-chand-4b209027a",
    image : linkedin,
  },
  {
    title : "G-mail",
    link : "https://mail.google.com/mail/?view=cm&fs=1&to=chandpradosh7@gmail.com",
    image : gmail,
  },
  {
    title : "Resume",
    link : resumepdf,
    image : resume,
  },
]