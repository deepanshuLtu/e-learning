import { useEffect, useState } from "react";
import CourseCard from "../components/CourseCard";
import { getCourses } from "../services/courseApi";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await getCourses();

      setCourses(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Courses</h1>

      {courses.map((course) => (
        <CourseCard key={course._id} course={course} />
      ))}
    </div>
  );
};

export default Courses;
