import React, { useState, useEffect } from "react";
import Student from "../components/student/StudentList";
import Tabletop from "tabletop";

function StudentPage() {
  const [students, setStudent] = useState([]);
  const getStudent = () => {
    Tabletop.init({
      key: "1aGST4ZIGJlKA-_b6XqtAlgWxrFy-7EL3I0TNlY9YiPc",
      callback: (googleData) => {
        setStudent(googleData);
      },
      simpleSheet: true,
    });
  };

  useEffect(() => {
    getStudent();
  }, []);

  return (
    <>
      {/* {students.map((stu) => (
        <Student
          key={stu.id}
          nickName={stu.nickName}
          name={stu.name}
          dob={stu.dob}
          sex={stu.sex}
          passport={stu.passport}
          major={stu.major}
          degree={stu.degree}
          university={stu.university}
          year={stu.year}
          scholarship={stu.scholarship}
          comment={stu.comment}
          room={stu.room}
          phone={stu.phone}
        />
      ))} */}
      <Student prop={students}/>
    </>
  );
}

export default StudentPage;
