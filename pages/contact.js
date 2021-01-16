import Layout from "../Components/Layout"; // importing the layout component
import Head from "next/head";



export default function contact() {
  return (
    <Layout>
      {/*Contact information container */}
      <div className="contact">
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
        <h1> Contact</h1>
        {/*Phone */}
        <div className className="contactItem">
          {" "}
          <i class="fa fa-phone" aria-hidden="true"></i>
          <p>Phone: 0723495629</p>
        </div>
        {/*Email */}
        <div className="contactItem">
          {" "}
          <i class="fa fa-envelope" aria-hidden="true"></i>
          <p>Email: quintinkellydekker888@gmail.com</p>
        </div>
        {/*LinkedIn */}
        <div className="contactItem">
          {" "}
          <i class="fa fa-users" aria-hidden="true"></i>
          <p>LinkedIn: </p>
          <a href=" https://www.linkedin.com/in/quintin-kelly-dekker-a36b961b0/">
            {" "}
            Quintin Kelly Dekker
          </a>{" "}
        </div>
        {/*Font awesome cdn */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
          integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog=="
          crossorigin="anonymous"
        />
        <style jsx>{`
          .contact {
            width: 600px;
            margin: 80px auto;
            text-align: center;
            padding: 10px;
          }
          .contactItem {
            display: flex;
            align-items: baseline;
            padding-left: 8px;
            margin-top: 10px;
            margin: auto;
            border-bottom: 2px solid #0b66c3;
            width: 400px;
          }

          p {
            margin: 20px;
          }
          a {
            margin-left: 0px;
            color:#6fba82;
          }
          a:hover {
            color:#6fba82;
           
          } 
        `}</style>
      </div>
    </Layout>
  );
}
