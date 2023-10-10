const DashBoard = () => {
  return (
    <section className="p-10 overflow-y-scroll h-screen flex-1">
      <CourseList />
      <LearningOverView />
    </section>
  );
};

const CourseList = () => {
  // Replace this with an array of course data, each containing a title and description
  const courses = [
    { title: "Course 1", description: "Description for Course 1" },
    { title: "Course 2", description: "Description for Course 2" },
    { title: "Course 1", description: "Description for Course 1" },
    { title: "Course 2", description: "Description for Course 2" },
    { title: "Course 1", description: "Description for Course 1" },
    { title: "Course 2", description: "Description for Course 2" },
    { title: "Course 1", description: "Description for Course 1" },
    { title: "Course 2", description: "Description for Course 2" },
    { title: "Course 1", description: "Description for Course 1" },
    { title: "Course 2", description: "Description for Course 2" },
    // Add more courses here...
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold">My Courses</h2>
      <div className="grid max-h-[220px] overflow-y-auto mt-2 grid-cols-4 gap-4">
        {courses.map((course, index) => (
          <article
            key={index}
            className="h-[100px] relative rounded-lg w-[220px] p-5 text-black bg-white"
          >
            <h3 className="text-lg font-semibold">{course.title}</h3>
            <p className="text-xs">{course.description}</p>
            <div className="absolute bottom-0 w-full bg-slate-200 h-4 left-0 rounded-b-lg">
              <div className="w-[40%] rounded-b-lg h-full bg-indigo-600">
                <p className="text-xs px-4 text-white">40%</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

const LearningOverView = () => {
  return (
    <div className="space-y-4 mt-4">
      <p>Learning OverView</p>
      <div className="grid grid-cols-8 grid-rows-3 gap-5">
        <div className="p-10 bg-white"></div>
        <div className="p-10 bg-white"></div>
        <div className="p-10 bg-white"></div>
        <div className="p-10 bg-white"></div>

        <div className="col-span-4  row-span-3 p-10 bg-white"></div>
      </div>
    </div>
  );
};

export default DashBoard;
