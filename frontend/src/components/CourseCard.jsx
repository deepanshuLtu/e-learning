import { enrollCourse } from "../services/enrollmentApi";

const CourseCard = ({ course }) => {
    const handleEnroll = async () => {
      try {
        await enrollCourse(course._id);

        alert("Enrolled Successfully");
      } catch (error) {
        alert(error.response?.data?.message || "Enrollment Failed");
      }
    };
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "1rem",
        marginBottom: "1rem",
      }}
    >
      <h3>{course.title}</h3>

      <p>{course.description}</p>

      <p>Category: {course.category}</p>

      <p>Difficulty: {course.difficulty}</p>

      <p>₹{course.price}</p>

      <button onClick={handleEnroll}>Enroll</button>
    </div>
  );
};
export default CourseCard;
