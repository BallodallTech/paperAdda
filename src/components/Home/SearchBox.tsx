"use client";

import { categoryOptions, classOptions } from "@/Data/CourseData";
import { Suspense, useEffect, useState } from "react";
import RenderAllExamSubOptions from "./RenderAllExamSubOption";
import RenderSubOptions from "./RenderSubOptions";
import { supabase } from "@/lib/supabse";
import LoadingSpinner from "../common/LoadingSpinner";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import slugify from "slugify";

const SearchBox = () => {
  const [formData, setFormData] = useState({
    category: null,
    subCategory1: null,
    subCategory2: null,
  });

  const handleFieldChange = (fieldName: string, value: string) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

  const [courses, setCourses] = useState<any>([]);

  useEffect(() => {
    if (formData.category === null) {
      const fetchCategories = async () => {
        const { data } = await supabase.from("courses").select();
        setCourses(data);
      };
      fetchCategories();
    } else if (formData.subCategory2 === null) {
      const fetchCategoriesWithFilter = async () => {
        const { data } = await supabase
          .from("courses")
          .select()
          .filter("category", "eq", formData.category)
          .filter("subCategory1", "eq", formData.subCategory1);

        setCourses(data);
      };
      fetchCategoriesWithFilter();
    } else if (
      formData.category &&
      formData.subCategory1 &&
      formData.subCategory2
    ) {
      const fetchCategoriesWithFilter = async () => {
        const { data } = await supabase
          .from("courses")
          .select()
          .filter("category", "eq", formData.category)
          .filter("subCategory1", "eq", formData.subCategory1)
          .filter("subcategory2", "eq", formData.subCategory2);

        setCourses(data);
      };
      fetchCategoriesWithFilter();
    } else {
      const fetchCategoriesWithFilter = async () => {
        const { data } = await supabase
          .from("courses")
          .select()
          .filter("category", "eq", formData.category);

        setCourses(data);
      };
      fetchCategoriesWithFilter();
    }
  }, [formData.category, formData.subCategory1, formData.subCategory2]);

  return (
    <>
      <div className="flex justify-end">
        <button
          onClick={() => {
            setFormData({
              category: null,
              subCategory1: null,
              subCategory2: null,
            });
          }}
          className="mb-4 ring-2 px-4  hover:bg-white hover:text-black flex items-center space-x-2 py-2 ring-slate-300 rounded-lg"
        >
          <X />
          <span>Clear Filter</span>
        </button>
      </div>
      <article className="w-full grid py-4 text-black px-6 items-center lg:grid-cols-4 gap-5 lg:h-20 border border-white rounded-md">
        <input
          type="text"
          placeholder="Search Course"
          className="block w-full p-4  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
        />

        <select
          value={formData.category || ""}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-blue-500 block w-full p-2.5"
          onChange={(e) => handleFieldChange("category", e.target.value)}
        >
          {categoryOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <select
          value={formData.subCategory1 || ""}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-blue-500 block w-full p-2.5"
          onChange={(e) => handleFieldChange("subCategory1", e.target.value)}
        >
          <RenderSubOptions name={formData.category || ""} />
        </select>

        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-blue-500 block w-full p-2.5"
          value={formData.subCategory2 || ""}
          onChange={(e) => handleFieldChange("subCategory2", e.target.value)}
        >
          <RenderAllExamSubOptions name={formData.subCategory1 || ""} />
        </select>
      </article>
      <div className="flex mt-6 space-y-4 flex-col items-center">
        <Suspense fallback={<LoadingSpinner />}>
          {courses.map((item: any) => (
            <CourseCard key={item.id} item={item} />
          ))}
        </Suspense>
      </div>
    </>
  );
};

const CourseCard: React.FC<{ item: any }> = ({ item }) => {
  const router = useRouter();

  return (
    <article
      onClick={() => router.push(`/courses/${item.id}`)}
      className="max-w-[250px] bg-gray-950 mx-auto w-full  rounded-md"
    >
      <img src={item.image} className="h-[50%] w-full object-cover" />
      <div className="p-4">
        <h2>{item.title}</h2>
        <p className="text-xs text-slate-400">{item.description}</p>
      </div>
    </article>
  );
};

export default SearchBox;
