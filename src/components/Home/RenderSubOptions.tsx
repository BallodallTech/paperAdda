import {
  CUETDATA,
  DefenceData,
  LawExamData,
  NursingData,
  governmentExams,
  schoolOptions,
} from "@/Data/CourseData";

const RenderSubOptions: React.FC<{ name: string }> = ({ name }) => {
  switch (name) {
    case "Government Exam":
      return governmentExams.map((item) => <option key={item}>{item}</option>);

    case "School":
      return schoolOptions.map((item) => <option key={item}>{item}</option>);

    case "Nursing":
      return NursingData.map((item) => <option key={item}>{item}</option>);

    case "Defence":
      return DefenceData.map((item) => <option key={item}>{item}</option>);

    case "CLAT & Law Exams":
      return LawExamData.map((item) => <option key={item}>{item}</option>);

    case "CUET":
      return CUETDATA.map((item) => <option key={item}>{item}</option>);

    default:
      return governmentExams.map((item) => <option key={item}>{item}</option>);
  }
};

export default RenderSubOptions;
