import { useMemo } from "react";

export const categoryOptions = [
  "Government Exam",
  "Nursing",
  "School",
  "Defence",
  "CLAT & Law Exams",
  "CUET",
];

export const schoolOptions = [
  "RBSE (हिंदी माध्यम)",
  "RBSE (English Medium)",
  "CBSE (English Medium)",
  "CBSE (हिंदी माध्यम)",
  "Bihar Board (English Medium)",
  "Bihar Board (हिन्दी माध्यम)",
  "Haryana Board (English Medium)",
  "Haryana Board (हिन्दी माध्यम)",
  "HP Board (English Medium)",
  "HP Board (हिन्दी माध्यम)",
  "Jharkhand Board (English Medium)",
  "Jharkhand Board (हिन्दी माध्यम)",
  "MP Board (English Medium)",
  "MP Board (हिन्दी माध्यम)",
  "NTSE",
  "Olympiad",
  "UP Board (English Medium)",
  "UP Board (हिन्दी माध्यम)",
  "Uttarakhand Board (English Medium)",
  "Uttarakhand Board (हिन्दी माध्यम)",
];

export const classOptions = [
  "6",
  "7",
  "8",
  "9",
  "10",
  "11 ARTS",
  "11 COMMERCE",
  "11 SCIENCE",
  "11 AGRICULTURE",
  "12 ARTS",
  "12 COMMERCE",
  "12 SCIENCE",
  "12 AGRICULTURE",
];

export const AllIndiaExamOptions = [
  "IAS",
  "Delhi Police",
  "SSC Foundation (Live Batch)",
  "Railway ALP & Technician",
  "Bank Exams",
  "NCERT",
  "Test Guruji",
  "Railway NTPC",
  "SSC CGL & CHSL",
  "SSC MTS",
  "SSC CPO",
  "SSC GD (Constable)",
  "Current Affairs",
  "UGC NET 1st Paper",
  "KVS PRT",
  "KVS TGT",
  "KVS PGT",
  "Intelligence Bureau",
  "DSSSB",
  "CTET",
  "Motivation",
];

export const MPExamData = [
  "MPPSC(Hindi Medium)",
  "MPPSC(English Medium)",
  "Sub Inspector",
  "Constable",
  "SSC",
  "TET वर्ग-3",
  "TET वर्ग-2",
  "TET वर्ग-1",
  "Patwari",
  "RAEO",
  "मध्यप्रदेश वन रक्षक",
  "Forest Guard & Jail Prahari",
  "State Cooperative Bank",
  "Current affairs",
];

export const governmentExams = [
  "All India Exams",
  "Rajasthan Exams",
  "Uttar Pradesh Exams",
  "Madhya Pradesh Exam",
  "Bihar Exam",
  "Haryana Exams",
];

export const RajstandGovernmentExamData = [
  "RAS",
  "Constable",
  "Junior Accountant",
  "1st Grade (स्कूल व्याख्याता)",
  "2nd Grade (शिक्षक)",
  "3rd Grade (शिक्षक) - REET Mains",
  "PTI (शारीरिक शिक्षक)",
  "REET (Pre Exams)",
  "CET (संयुक्त योग्यता परीक्षा)",
  "Sub Inspector",
  "Mahila ASI",
  "EO & RO",
  "PTET",
  "BSTC",
  "Information Assistant (IA​)",
  "FSO (Food Safety Officer)",
  "Patwar",
  "LDC",
  "Gram Sevak (VDO)",
  "High Court",
  "Current Affairs",
  "Computer Instructor(कम्प्यूटर अनुदेशक)",
  "ASO (सहायक सांख्यिकी अधिकारी)",
  "Block Program Supervisor",
  "Cooperative Bank",
  "Forester and Forest Guard",
  "College Assistant Professor (सहायक आचार्य)",
  "Computor (संगणक)",
  "Investigator",
  "JVVNL And AVVNL",
  "Livestock Assistant",
  "Technical Helper",
  "Stenographer",
  "Lab Assistant",
  "Librarian",
  "ACF",
  "RRVUNL and RRVPNL",
  "KVS PRT",
  "KVS TGT",
  "KVS PGT",
  "Motivation",
];

export const UttarPradeshExamData = [
  "Live From Classroom",
  "PCS",
  "UP PCS Mains",
  "RO and ARO",
  "Constable",
  "Lekhpal",
  "Sub Inspector",
  "VDO (ग्राम विकास अधिकारी)",
  "Current Affairs",
  "PGT",
  "TGT",
  "LT Grade",
  "PET",
  "TET",
  "Super TET",
  "Super TET Junior",
  "Cane Supervisor (गन्ना पर्यवेक्षक)",
  "Junior Assistant (कनिष्ठ सहायक)",
  "Tubewell Operator (नलकूप चालक)",
  "Police Radio Operator (पुलिस रेडियो संवर्ग)",
  "High Court Group C & D",
  "UPPCL (तकनीशियन)",
  "Forest Guard",
  "High Court RO and ARO",
  "Jail Warder",
  "Motivation",
];

export const BiharExamData = [
  "Constable",
  "BSSC",
  "Head Teacher (प्रधान शिक्षक)",
  "Police Fireman (पुलिस फायरमैन)",
  "Sub Inspector",
  "Current Affairs",
  "BPSC",
  "Assistant Multipurpose (राज्य सहकारी बैंक)",
];

export const HariyanaExamData = [
  "CET (संयुक्त योग्यता परीक्षा)",
  "A.L.M (Assistant Lineman)",
  "Current Affairs",
  "HSSC",
  "PGT",
  "Patwari Gram Sachiv",
  "Constable",
];

export const NursingData = [
  "Nursing Officer",
  "GNM & NHM",
  "Staff Nurse",
  "CHO",
  "ANM",
];

export const DefenceData = [
  "AIR Force",
  "Indian Army",
  "NDA",
  "NAVY",
  "CDS",
  "AFCAT",
  "Coast Guard",
];

export const LawExamData = ["CLAT", "Judicial Services"];

export const CUETDATA = ["Arts", "Commerce", "Science", "Agriculture"];

export const NURSINGOFFICERDATA = ["NORCET(AIIMS)", "JIPMER"];

export const StaffNurseData = [
  "UP-PSC",
  "HSSC",
  "CRPF(SI)",
  "SGPGI Staff Nurse",
  "DMER",
  "NHM",
  "DSSSB",
  "Sister Grade-II",
];

export const JUDICIALSERVICEDATA = [
  "RJS",
  "JLO",
  "APO",
  "UP Judicial Services",
  "State Judicial Services",
  "Odisha Judicial Services",
  "Gujarat Judicial Services",
];
