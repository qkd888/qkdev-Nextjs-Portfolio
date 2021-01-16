import Layout from "../Components/Layout"; // importing the layout component
import Head from "next/head";

function Welcome(props) {
  return (
    <Layout>
      {/*Home page container */}
      <div className="homePage">
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
        {/*QK.Dekker image */}
        <img
          src="/Quintin.jpg"
          alt="quintin's Memoji"
          className="img"

          width={750}
          height={1200}


        />
        {/*Main heading */}
        <h1>
          Hello, My name is Quintin Kelly Dekker<span>!</span>
        </h1>
        {/*Subheading */}
        <h2>Junior Full Stack Web Developer</h2>

        <style jsx>{`
       
          .homePage {
            width: 750px;
            margin: 80px auto; /
            text-align: center;
          }
          h1 {
            font-size: 40px;
          }
          h2 {
            border-bottom: 2px solid #0b66c3;
            width: 400px;
            margin: auto;
            text-align: center;
          }
          span {
            color: #5073b8;
          }
        `}</style>
      </div>
    </Layout>
  );
}
export default Welcome;
