// import React from 'react'
// import {Link} from 'react-router-dom'
// const Register = () => {
//   return (
//     <div>
//         Register
//         <Link to="/login">Already a user</Link>
//     </div>
//   )
// }

// export default Register

// import React, { useState } from "react";
// import Add from "../images/97147833-icône-de-l-utilisateur-avec-le-signe-de-l-icône-de-l-utilisateur-et-de.webp";

// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import { auth, db, storage } from "../firbase";
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import { doc, setDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
// import './style.css'
// import './style.sass'


const Register = () => {
  // const [err, setErr] = useState(false);
  // const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();

  // const handleSubmit = async (e) => {
  //   setLoading(true);
  //   e.preventDefault();
  //   const displayName = e.target[0].value;
  //   const email = e.target[1].value;
  //   const password = e.target[2].value;
  //   const file = e.target[3].files[0];

  //   try {
  //     //Create user
  //     const res = await createUserWithEmailAndPassword(auth, email, password);

  //     //Create a unique image name
  //     const date = new Date().getTime();
  //     const storageRef = ref(storage, `${displayName + date}`);

  //     await uploadBytesResumable(storageRef, file).then(() => {
  //       getDownloadURL(storageRef).then(async (downloadURL) => {
  //         try {
  //           //Update profile
  //           await updateProfile(res.user, {
  //             displayName,
  //             photoURL: downloadURL,
  //           });
  //           //create user on firestore
  //           await setDoc(doc(db, "users", res.user.uid), {
  //             uid: res.user.uid,
  //             displayName,
  //             email,
  //             photoURL: downloadURL,
  //           });

  //           //create empty user chats on firestore
  //           await setDoc(doc(db, "userChats", res.user.uid), {});
  //           navigate("/");
  //         } catch (err) {
  //           console.log(err);
  //           setErr(true);
  //           setLoading(false);
  //         }
  //       });
  //     });
  //   } catch (err) {
  //     setErr(true);
  //     setLoading(false);
  //   }
  // };

  return (
    <div className="form-wrapper">
      <div className="form-container">
        <span className="logo">Register</span>
        <form autoComplete="on" >
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="file" id="file" style={{ display: "none" }} />
          <label htmlFor="file">
            {/* <img src={Add} alt="user" /> */}
            <span>Add an Avatar</span>
          </label>
          <button>Sign Up</button>
        </form>
        <p>
          You don't have account ? <Link to="/">Login</Link>
        </p>
        {/* {loading && "Uploading and compressing the image please wait..."} */}
        {/* {err && <span style={{ color: "red" }}>Somthing went wrong</span>} */}
      </div>
    </div>
  );
};

export default Register;
