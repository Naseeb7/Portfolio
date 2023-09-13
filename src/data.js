import JustSocial from "./assets/JustSocial.png"
import CloudNote from "./assets/CloudNote.png"
import TextAndTools from "./assets/TextAndTools.png"
import iSee from "./assets/iSee.png"
import MERN from "./assets/MERN-logo.png"
import HTMLCSSJS from "./assets/HTML,CSS,JS.png"
import ReactLogo from "./assets/ReactLogo.png"

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
        title: "iSee",
        subtitle: "React",
        description:
          "iSee is a one-time one-on-one video call web app designed with Tailwind CSS, built using React, WebRTC, Socket.io, and more. It offers instant video calls with live chat, privacy controls, and a responsive user interface, all without the need for accounts or installations.",
        image: iSee,
        techImage: ReactLogo,
        link: "https://fabulous-sundae-c611c5.netlify.app/"
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
]

export const skills = [
  "React", "TailwindCSS", "MaterialUI", "WebSockets", "WebRTC", "JavaScript", "Python", "Node", "MongoDB", "HTML", "CSS"
]