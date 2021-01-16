import Layout from "../Components/Layout"; // importing the layout component
import Head from "next/head";


export default function about() {
    return (
        <Layout>
            {/*About Container */}
            <div className="about">
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
                <h1>About</h1>
                <p>My name is Quintin Kelly Dekker.</p>
                <p>
                    I am fueled by high energy levels and boundless enthusiasm, I’m easily
                    inspired and more then willing to follow my fascinations wherever they
                    take me. I’m passionate, expressive, multi-talented spirit with a
                    natural ability to entertain and inspire.

                    Currently I am part of CodilationZA Development team, working on various
                    Web Applications.
        </p>
                <style jsx>{`
          .about {
            width: 600px;
            margin: 80px auto;
            text-align: center;
          }
          h1 {
            border-bottom: 2px solid #0b66c3;
            width: 200px;
            margin: auto;
          }
        `}</style>
            </div>
        </Layout>
    );
}
