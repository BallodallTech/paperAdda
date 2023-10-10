import {
  AllIndiaExamOptions,
  BiharExamData,
  HariyanaExamData,
  JUDICIALSERVICEDATA,
  MPExamData,
  NURSINGOFFICERDATA,
  RajstandGovernmentExamData,
  StaffNurseData,
  UttarPradeshExamData,
} from "@/Data/CourseData";

const RenderAllExamSubOptions: React.FC<{ name: string }> = ({ name }) => {
  switch (name) {
    case "All India Exams":
      return AllIndiaExamOptions.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ));

    case "Rajasthan Exams":
      return RajstandGovernmentExamData.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ));

    case "Uttar Pradesh Exams":
      return UttarPradeshExamData.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ));

    case "Madhya Pradesh Exam":
      return MPExamData.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ));

    case "Bihar Exam":
      return BiharExamData.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ));

    case "Haryana Exams":
      return HariyanaExamData.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ));

    case "Nursing Officer":
      return NURSINGOFFICERDATA.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ));

    case "GNM & NHM":
      return <option value={"GNM"}>GNM</option>;

    case "Staff Nurse":
      return StaffNurseData.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ));

    case "CHO":
      return <option value={"CHO"}>CHO</option>;

    case "ANM":
      return <option value={"ANM"}>ANM</option>;

    case "AIR Force":
      return (
        <>
          <option value="AIR Force - X Group">AIR Force - X Group </option>
          <option value="AIR Force - Y Group ">AIR Force - Y Group </option>
        </>
      );

    case "Indian Army":
      return (
        <>
          <option value="Army GD">Army GD </option>
          <option value="Army Clerk">Army Clerk</option>
        </>
      );

    case "NDA":
      return (
        <>
          <option value="NDA (ENGLISH MEDIUM)">NDA (ENGLISH MEDIUM)</option>
          <option value="NDA (HINDI MEDIUM)">NDA (HINDI MEDIUM)</option>
        </>
      );

    case "NAVY":
      return (
        <>
          <option value="NAVY AA-SSR">NAVY AA-SSR </option>
          <option value="NAVY MR">NAVY MR</option>
        </>
      );

    case "CDS":
      return <option value="CDS">CDS</option>;

    case "AFCAT":
      return <option value="AFCAT">AFCAT</option>;

    case "Coast Guard":
      return (
        <>
          <option value="Coast Gurad GD">Coast Gurad GD</option>
          <option value="Coast Gurad DB">Coast Gurad DB</option>
        </>
      );

    case "CLAT":
      return (
        <>
          <option value="CLAT">CLAT</option>
          <option value="OLET">OLET</option>
          <option value="3 Year LLB">3 Year LLB</option>
        </>
      );

    case "Judicial Services":
      return JUDICIALSERVICEDATA.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ));

    case "Arts":
      return (
        <>
          <option value="हिन्दी माध्यम">हिन्दी माध्यम</option>
          <option value="English Medium">English Medium</option>
        </>
      );

    case "Commerce":
      return (
        <>
          <option value="हिन्दी माध्यम">हिन्दी माध्यम</option>
          <option value="English Medium">English Medium</option>
        </>
      );
    case "Science":
      return (
        <>
          <option value="हिन्दी माध्यम">हिन्दी माध्यम</option>
          <option value="English Medium">English Medium</option>
        </>
      );

    case "Agriculture":
      return <option value="हिन्दी माध्यम">हिन्दी माध्यम</option>;
    default:
      return null;
  }
};

export default RenderAllExamSubOptions;
