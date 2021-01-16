import Layout from "../Components/Layout"; // importing the layout component
import Head from "next/head";

export default function projects() {
  return (
    <Layout>
      {/*Projects Container */}
      <div className="projects">
        <Head>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-174188248-1"
          ></script>


          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />




        </Head>
        <h1>Projects</h1>
        {/*First project */}
        {/*ProjectItem Container */}
        <div className="projectItem">
          {/*Project name */}
          <p className="name"> Name: Klank Records Webshop</p>
          {/*Projects description */}
          <p>
            Description: An online electronic music store that is dedicated to providing
            EXCLUSIVE techno tracks with a few clicks.
          </p>
          {/*Project github repo link */}
          <a href="  https://github.com/qkd888/Capstone-project-2-Klank-Records-Webshop">
            {" "}
            Github Repo
          </a>
        </div>
        {/*Second project */}
        <div className="projectItem">
          <p className="name">Name: General knowledge Quiz Game</p>
          <p>
            Description: A quiz game that is suitable for anyone who wants to
            test their general knowledge.
          </p>
          <a href="https://guarded-mesa-35280.herokuapp.com/">
            {" "}
            Heroku App
          </a>
        </div>
        {/*Third project */}
        <div className="projectItem">
          <p className="name">Name: Itunes Search Api Application</p>
          <p>
            Description: This application allows a user to search for their
            favourite media content on Itunes and store that content to their
            list of favourites.
          </p>
          <p>
            {" "}
            <a href="https://evening-badlands-44327.herokuapp.com/">
              {" "}
              Heroku App
            </a>
          </p>

        </div>

        <style jsx>{`
        
          .projects {
            width: 600px;
            margin: 80px auto;
            text-align: center;
          }

          .projectItem {
            text-align: left;
            margin: 10px;
            padding: 5px 5px 15px 5px;
            border-bottom: 1px solid #0b66c3;
            
          }
          a {
            color:white;
            
          }
          a:hover {
            color:#6fba82;
            
          }

          h1 {
            border-bottom: 2px solid #0b66c3;
            width: 200px;
            margin: auto;
          }

          .name {
            font-weight: 600;
          }
        `}</style>
      </div>
    </Layout>
  );
}
