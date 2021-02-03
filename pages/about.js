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
                    I live in the beautiful Garden-Route in the Western Cape. My hobbies include
                    Music Production, Live Music, Web Development and Graphic Designing.


                    I own a small indie records label called Klank Records.
                    Our main focus genres are, Techno, Tech House, Deep tech and Minimal Tech.
                    Klank Records was established in November 2016 and our catalogue has grown
                    to over 300 releases.


                    I also play a few instruments like the Guitar, Bass Guitar, Keyboard. I also
                    produce electronic music using digital audio workstations and vst synthesizers.

                    I have always been tinkering around on computers and electronic equipment
                    and have recently completed a Full Stack Web Development course from Cambridge
                    University, through Hyperiondev who are endorsed by Google, Facebook and Python.

                    I speak HTML, CSS, Javascript, jQuary, jsx, React.js, Express
                    Next.js, Node.js, MongoDB -MERN-STACK-
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
