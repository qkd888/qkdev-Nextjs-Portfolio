import Link from "next/link"; // importing Link for routing
import { useRouter } from "next/router"; // importing useRouter for adding an active class to the current route



export default function Navbar() {
  const router = useRouter();
  return (
    // Header element

    <div className="header">
      {/*Logo */}
      <p className="logo" >qkdev</p>
      {/*Menu items*/}
      <ul>
        <li>
          <Link href="/">
            {/*If the current path is equal to the path that is stated, an active class is added to the element */}
            <a className={router.pathname == "/" ? "active" : ""}>Home</a>
          </Link>{" "}
        </li>
        <li>
          <Link href="/about">
            <a className={router.pathname == "/about" ? "active" : ""}>About</a>
          </Link>{" "}
        </li>

        <li>
          <Link href="/projects">
            <a className={router.pathname == "/projects" ? "active" : ""}>Projects</a>
          </Link>{" "}
        </li>

        <li>
          <Link href="/contact">
            <a className={router.pathname == "/contact" ? "active" : ""}>
              Contact
            </a>
          </Link>{" "}
        </li>
      </ul>
      {/*Google-fonts link for the orbitron font*/}
      <link
        href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600&display=swap"
        rel="stylesheet"
      />
      {/*Google-fonts link for the poppins font*/}
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap"
        rel="stylesheet"
      />

      <style jsx>{`
        ul {
          list-style: none;
          display: flex;
        }

        li {
          margin: 5px;
          padding: 15px;
          font-weight: bold;
          font-size: 16px;
          font-family: "Poppins", sans-serif;
        }

        a:hover {
          color: #1063c4;
          transition: all 0.500ms ease-in-out;
        }

        a {
          text-decoration: none;
          color: #5073b8;
        }

        .header {
          box-sizing: border-box;
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          width: 90%;
          margin: auto;
          box-sizing: border-box;
          padding: 10px 200px;
          box-shadow: 3px 4px 2px -2px #0b66c3;
        }

        .logo {
          border-bottom: 1px solid #0b66c3;
          border-right: 1px solid #0b66c3;
          
          font-size: 35px;
          font-family: "Orbitron", sans-serif;
          color:#0b66c3;
        }

        .active {
          color: #6fba82;
        }
      `}</style>
    </div>
  );
}

