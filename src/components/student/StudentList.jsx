import React, { useState } from "react";
import "../../style/StudentList.css";
import avatar from "../../images/male_avatar.png";
function StudentList(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <>
      <div className="student-container">
        <div className="search-bar">
          <form className="search-form" action="">
            <input
              className="search-box"
              type="text"
              placeholder="type name..."
              onChange={handleChange}
            />
            <input className="search-btn" type="submit" value="search" />
          </form>
        </div>

        <div className="cards-wrapper">
          <h1 className="header">STUDENTS - {props.prop.length}</h1>
          <div className="stu-cards">
            {props.prop
              .filter((val) => {
                if (searchTerm === "") return val;
                else if (
                  val.name.toLowerCase().includes(searchTerm.toLowerCase())
                )
                  return val;
              })
              .map((stu) => (
                <div className="stu-card">
                  <div className="top-card">
                    <p>{stu.year}</p>
                    <p>{stu.room}</p>
                  </div>
                  <div className="middle-card">
                    <div className="img-container">
                      <img className="avatar-png" src={stu.picture} alt={"no image"} />
                    </div>
                    <h2 className="nick-name">
                      {stu.nickName === "" ? "no name" : stu.nickName}
                    </h2>
                    <p className="full-name">{stu.name}</p>
                    <p className="major">{stu.major}</p>
                    <p className="school-icon">
                      <span>
                        <i class="fas fa-university"></i>
                      </span>
                      DH kinh te luat
                    </p>
                    <p className="dob">DOB: 12/01/1996</p>
                    <div className="view-profile">
                      <p>VIEW PROFILE</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
// function StudentList({
//   key,
//   nickName,
//   name,
//   dob,
//   sex,
//   // passport,
//   major,
//   // degree,
//   university,
//   year,
//   // scholarship,
//   // comment,
//   room,
//   // phone,
// }) {
//   return (
//     <>
//       <div className="student-container">
//         <h1>Hello</h1>
//       </div>
//     </>
//   );
// }

export default StudentList;
