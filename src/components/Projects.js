import React from "react";
import { projects } from "../data";
import { GitFork, GitMerge, GitPullRequestIcon } from "lucide-react";

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col  p-1 justify-center items-center scroll-mt-10"
    >
      <div className="flex flex-col p-2 m-2 justify-center items-center">
        <div className="flex justify-around items-center p-2 m-2 mb-0 w-full sm:w-2/4 text-blue-900">
          <GitPullRequestIcon size={38} />
          <GitMerge size={38} />
          <GitFork size={38} />
        </div>
        {/* <i className="fa-sharp fa-solid fa-code text-4xl m-2 mb-0 text-blue-900" /> */}
        <div className="text-blue-300 text-2xl p-2 m-2">Apps i've built</div>
        <div className="flex flex-col text-sm text-center text-gray-500">
          <span className="text-blue-500">
            Get a better understanding of my skills through these projects i
            have developed.
          </span>
          Since i have been doing it for past few months there might not be much
          but thank you for checking them out!
        </div>
      </div>
      <div className="grid grid-cols-1 w-full sm:w-2/3 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-6 sm:m-2 sm:p-6">
        {projects.map((project) => {
          return (
            <div key={project.title} className="flex flex-col p-4 gap-2">
              <div className="flex w-full justify-start items-center text-2xl font-semibold text-blue-400 sm:hidden">
                {project.title}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="flex relative"
              >
                <img
                  src={project.image}
                  alt="project"
                  className="rounded-xl "
                />
                <div className="hidden sm:flex flex-col justify-center items-center absolute rounded-xl bg-black/70 opacity-0 hover:opacity-100 w-full h-full duration-300">
                  <div className="text-2xl font-semibold text-blue-400 p-2 m-1">
                    {project.title}
                  </div>
                  <img
                    src={project.techImage}
                    alt="project"
                    className="rounded-2xl w-1/4 bg-blue-50 p-2"
                  />
                  <div className="flex text-xs sm:hidden">click to view</div>
                  <div className="text-sm p-2 w-3/4 text-center text-slate-400 font-semibold">
                    {project.description}
                  </div>
                </div>
              </a>
              {project.test && (
                <div className="flex w-full text-sm text-center gap-2 text-gray-400">
                  Use
                  <div className="text-gray-500"> id : {project.test.id},</div>
                  <div className="text-gray-500">
                    {" "}
                    password : {project.test.password}
                  </div>
                </div>
              )}
              <div className="flex sm:hidden">
                {project.description}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
