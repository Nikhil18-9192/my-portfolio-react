import React from "react";
import "./Home.scss";
import profile from "../../Static/Images/profile_deepak.jpeg";

function Home() {
  return (
    <div className="page-container">
      <div className="profile-img">
        <img src={profile} alt="profile" />
      </div>
      <div className="profile-info">
        <h3>Who am i, and what i do?</h3>
        <p>
          &#x1F44B; Greetings, fellow tech enthusiasts! I'm Deepak, your
          friendly neighborhood Frontend Developer from Kolhapur, India!
          &#x1F4BB;
        </p>
        <p>
          With expertise in React, Python, Django, and NuxtJs, I create
          exceptional web solutions. &#x26A1;
        </p>
        <p>
          Off the screen, you'll find me on the cricket field or conquering
          breathtaking treks. &#x1F3CF;&#x1F3D4;
        </p>
        <p>
          As a dedicated fan of Virat Kohli and a computer science engineer by
          education, I bring a winning mindset to every project. &#x1F393;
        </p>
        <p>
          Let's collaborate on web and frontend development to create something
          extraordinary! &#x1F91D;
        </p>
        <p>
          Explore my portfolio and let's make your digital dreams a reality.
          &#x1F31F;
        </p>
      </div>
    </div>
  );
}

export default Home;
