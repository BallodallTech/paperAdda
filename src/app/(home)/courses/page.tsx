import CourseData from "@/components/Home/CourseData";
import SearchBox from "@/components/Home/SearchBox";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import { Suspense } from "react";

const Courses = async () => {
  return (
    <section className="w-[85%] min-h-[60vh] mx-auto">
      <SearchBox />
    </section>
  );
};

export default Courses;
