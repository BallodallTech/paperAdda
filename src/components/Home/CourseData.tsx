type Exam = {
  name: string;
  description: string;
};

const famousExams: Exam[] = [
  {
    name: "SAT (Scholastic Assessment Test)",
    description:
      "The SAT is a standardized test widely used for college admissions in the United States. It assesses a student's readiness for college and is typically taken by high school students.",
  },
  {
    name: "IELTS (International English Language Testing System)",
    description:
      "IELTS is a globally recognized test of English language proficiency. It is used for immigration purposes and admission to educational institutions in English-speaking countries.",
  },
  {
    name: "TOEFL (Test of English as a Foreign Language)",
    description:
      "TOEFL is an English language proficiency test primarily used for admissions into American universities and colleges. It is taken by non-native English speakers.",
  },
  {
    name: "GMAT (Graduate Management Admission Test)",
    description:
      "GMAT is a standardized test used for admission to graduate business programs (MBA) worldwide. It assesses analytical, writing, quantitative, verbal, and reading skills.",
  },
  {
    name: "GRE (Graduate Record Examination)",
    description:
      "GRE is a standardized test used for admissions to graduate programs, including master's and doctoral degrees. It assesses skills in verbal reasoning, quantitative reasoning, and analytical writing.",
  },
  {
    name: "MCAT (Medical College Admission Test)",
    description:
      "MCAT is a standardized test used for medical school admissions in the United States and Canada. It assesses problem solving, critical thinking, and knowledge of natural, behavioral, and social science concepts.",
  },
  {
    name: "LSAT (Law School Admission Test)",
    description:
      "LSAT is a standardized test used for admissions to law schools in the United States and Canada. It assesses reading comprehension, logical reasoning, and critical thinking skills.",
  },
  {
    name: "CCNA (Cisco Certified Network Associate)",
    description:
      "CCNA is a certification exam offered by Cisco for networking professionals. It validates knowledge and skills related to networking and routing.",
  },
  {
    name: "CFA (Chartered Financial Analyst)",
    description:
      "CFA is a globally recognized certification for professionals in the finance and investment management industry. It covers areas such as ethics, economics, and portfolio management.",
  },
  {
    name: "PMP (Project Management Professional)",
    description:
      "PMP is a certification for project managers. It is recognized internationally and demonstrates a professional's knowledge and skills in project management.",
  },
];

const fakeData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(famousExams);
    }, 10000);
  });
};

const CourseData = async () => {
  const data = (await fakeData()) as Exam[];
  return (
    <div className="grid mt-5 pb-4 grid-cols-4 gap-6">
      {data.map((item) => (
        <article
          className="bg-zinc-950  group cursor-pointer  relative ring-2 ring-zinc-900 rounded-lg h-[200px]"
          key={item?.name}
        >
          <div className="absolute group-hover:scale-105 -z-10 w-full h-full bg-gradient-to-br from-red-500 via-orange-600 to-indigo-600 rounded-lg"></div>
          <div className="absolute bottom-5 left-4">
            <h3>{item.name}</h3>
            <p className="text-xs text-gray-300">{item.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default CourseData;
