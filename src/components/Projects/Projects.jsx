import React from "react";

const Projects = () => {
  return (
    <div>
      <div className="title text-3xl">Projects</div>
      <div className="projects text-lg tracking-wide leading-relaxed mt-3">
        <div className="project">
          <a
            className="no-underline hover:underline"
            href="https://github.com/vijay-guttula/microservices.architecture"
          >
            <span className="font-bold">Microservices.exe</span>: Microservices
            + Events + Docker = A perfect Trio
          </a>
        </div>
        <div className="project">
          <a
            className="no-underline hover:underline"
            href="https://github.com/vijay-guttula/spotify-music-controller"
          >
            <span className="font-bold">Spotify-Music-Controller</span>: Create
            a local room and play music to listen together (kinda like Spotify's
            Group Session, before it hit my area's official release.).
          </a>
        </div>
        <div className="project">
          <a
            className="no-underline hover:underline"
            href="https://github.com/vijay-guttula/mern-todo"
          >
            <span className="font-bold">To-Do</span>: Create your profile and
            save notes on the go.
          </a>
        </div>
        <div className="project">
          <a
            className="no-underline hover:underline"
            href="https://github.com/vijay-guttula/PERN-STACK-YELP-Clone"
          >
            <span className="font-bold">Yelp</span>
            <span className="text-xs font-thin"> Clone</span>: Look out for best
            places to dine based on reviews and prices.
          </a>
        </div>
        <div className="project">
          <a
            className="no-underline hover:underline"
            href="https://github.com/vijay-guttula/Am-I-Visible"
          >
            <span className="font-bold">Am-I-Visible</span>: Check your computer
            camera visibility 😜 .
          </a>
        </div>
        <div className="project">
          <a
            className="no-underline hover:underline"
            href="https://github.com/vijay-guttula/Medical-Reasoning-System"
          >
            <span className="font-bold">Medical-Resoning-System</span>: Common
            cold or flu diagnosing chat bot.
          </a>
        </div>
        <div className="project">
          <a
            className="no-underline hover:underline"
            href="https://github.com/vijay-guttula/Tensy"
          >
            <span className="font-bold">Tensy</span>: Trouble differentiating
            between a dog or a cat, use this 😶‍🌫️.
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
