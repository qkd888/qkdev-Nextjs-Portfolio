import Navbar from "./Navbar"; // importing the navbar component

export default function Layout(props) {
  return (
    <div>
      <Navbar />
      {props.children}
      {/*Google-fonts link for the poppins font*/}
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap"
        rel="stylesheet"
      />
      <style jsx global>{`
        body {
<<<<<<< HEAD
          box-sizing: border-box;
          background-color: #151518;
=======
          background-color: darkgrey;
>>>>>>> refs/remotes/origin/main
          font-family: "Poppins", sans-serif;
          color:#5073b8;       
        }
      `}</style>
    </div>
  );
}
