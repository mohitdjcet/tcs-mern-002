function Student({ name, course }) {
  console.log(name, course);
  return (
    <div>
      <h2>Name: {name}</h2>
      <h2>Course: {course}</h2>
    </div>
  );
}
export default Student;
