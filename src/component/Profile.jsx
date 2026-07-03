import React, { useState } from 'react'

const Profile = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  return (
    <div className="container mt-5 pt-5">

      {
        !login ?

          <div className="card p-4 mx-auto" style={{ maxWidth: "600px" }}>

            <h2 className="text-center mb-4">
              Profile Login
            </h2>

            <input type="text" placeholder="Enter Name" className="form-control mb-3" onChange={(e) => setName(e.target.value)} />

            <input type="email" placeholder="Enter Email" className="form-control mb-3" onChange={(e) => setEmail(e.target.value)} />

            <input type="text" placeholder="Enter Mobile" className="form-control mb-3" onChange={(e) => setMobile(e.target.value)} />

            <input type="password" placeholder="Enter Password" className="form-control mb-3" onChange={(e) => setPassword(e.target.value)} />

            <button className="btn btn-dark" onClick={() => setLogin(true)} >
              Login
            </button>

          </div>

          :

          <div className="card p-4 mx-auto" style={{ maxWidth: "600px" }}>

            <h2 className="mb-4">
              My Profile
            </h2>

            <h5>Name : {name}</h5>
            <h5>Email : {email}</h5>
            <h5>Mobile : {mobile}</h5>
            <h5>Password : {password}</h5>

            <button className="btn btn-danger mt-3" onClick={() => setLogin(false)} >
              Logout
            </button>

          </div>
      }

    </div>
  )
}

export default Profile