'use client';
import { useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

const faculties = ['Science Faculty', 'Commerce Faculty', 'Arts Faculty'];
const programs = ['UG Program', 'PG Program'];

const sampleData = {
  // ✅ All your sample data goes here (keeping it intact as you pasted) …
  'Science Faculty': {
    'UG Program': [
      /* Your UG Science Faculty Programs here */
       { sr: 1, Program: 'Chemistry	',syllabus: '/Syllabus/4-B.Sc_.-I-Chemistry-Syllabus.pdf' },
       { sr: 2, Program: 'Physics	',syllabus: '/Syllabus/8-B.Sc_.-I-Physics-24-25-NEP-2.0.pdf' },
       { sr: 3, Program: 'Botony',syllabus: '/Syllabus/Botany_UG.pdf' },
       { sr: 4, Program: 'Microbiology',syllabus: '/Syllabus/11-B.Sc_.I-Micro-syllabus.pdf' },
       { sr: 5, Program: 'Zoology',syllabus: '/Syllabus/Zoology-PG.pdf' },
       { sr: 6, Program: 'Mathematics	',syllabus: '/Syllabus/Mathematics_UG.pdf' },
       { sr: 7, Program: 'Statistics	',syllabus: '/Syllabus/9-B.Sc_.-I-Statistics-Syllabus-2024-25.pdf' },
       { sr: 8, Program: 'Electronics	',syllabus: '/Syllabus/Electronics_UG.pdf' },
       { sr: 9, Program: 'Animation Science	',syllabus: '/Syllabus/10-B.Sc_.I-Animation-Science-24-25.pdf' },
       { sr: 10, Program: 'Artificial Intelligence	',syllabus: '/Syllabus/Artificial-Intelligence-UG.pdf' },
       { sr: 11, Program: 'B.Voc (Software Development)	',syllabus: '/Syllabus/' },
       { sr: 12, Program: 'Biotechnology',syllabus: '/Syllabus/Biotechnology_UG.pdf' },
       { sr: 13, Program: 'Computer Application	',syllabus: '/Syllabus/Computer-Application_UG.pdf' },
       { sr: 14, Program: 'Computer Science (Entire)',syllabus: '/Syllabus/Comp-Sci-entire-UG.pdf' },
       { sr: 15, Program: 'Computer Science (Optional)	',syllabus: '/Syllabus/Computer-Science-Opt._UG.pdf' },
       { sr: 16, Program: 'Data Science	',syllabus: '/Syllabus/Data-Science_UG (1).pdf' },
       { sr: 17, Program: 'Drug Chemistry	',syllabus: '/Syllabus/Drug-Chemistry-UG.pdf' },
       { sr: 18, Program: 'Food Technolgy	',syllabus: '/Syllabus/Food-Technology-UG.pdf' },
       { sr: 19, Program: 'Forensic Science	',syllabus: '/Syllabus/5-B.Sc_.-I-Forensic-Science-NEP-2.0-Syllabus.pdf' },
       { sr: 20, Program: 'Nanoscience and Technolgy',syllabus: '/Syllabus/Nanoscience-NEP.pdf' },
       { sr: 21, Program: 'Material Science	',syllabus: '/Syllabus/7-B.Sc_.-I-Material-Sci-24-25-NEP-2.0.pdf' },
       { sr: 22, Program: 'Instrumentation Science',syllabus: '/Syllabus/6-B.Sc_.-I-Instrumentation-Science-24-25-syllabus-NEP-2.0.pdf' },
       { sr: 23, Program: 'Music Science	',syllabus: '/Syllabus/2-B.Sc-I-Music-Science-syllabus-NEP-2.0.pdf' },
       { sr: 24, Program: 'Astro Physics	',syllabus: '/Syllabus/3-B.Sc_.-I-Astrophysics-24-25-NEP-2.0.pdf' },
       { sr: 25, Program: 'Bioinformatics	',syllabus: '/Syllabus/' },
       { sr: 26, Program: 'Biochemistry	',syllabus: '/Syllabus/1-B.-Sc.-I-Biochem-Syllabus.pdf' },
       { sr: 27, Program: 'Military Science and NCC	',syllabus: '/Syllabus/Military-Science-and-NCC_UG.pdf' },
       { sr: 28, Program: 'Plant Protection	',syllabus: '/Syllabus/Plant-Protection_UG.pdf' },
       { sr: 29, Program: 'Seed Technology',syllabus: '/Syllabus/Seed-Technology_UG.pdf' },
       { sr: 30, Program: 'Fisheries',syllabus: '/Syllabus/Fisheries_UG.pdf' },


    ],
    'PG Program': [
      /* Your PG Science Faculty Programs here */
      { sr: 1, Program: 'Chemistry	',syllabus: '/Syllabus/pgScience/MSc-I-Chemistry.pdf' },
      { sr: 2, Program: 'Physics	',syllabus: '/Syllabus/pgScience/M.-Sc.-I-Physics-24-25-NEP-2.0.pdf' },
      { sr: 3, Program: 'Electronics	',syllabus: '/Syllabus/pgScience/Electronics_PG.pdf'},
      { sr: 4, Program: 'M.Sc(Mathematics)',syllabus: '/Syllabus/pgScience/Mathematics-_PG.pdf' },
      { sr: 5, Program: 'M.Sc(Statistics)',syllabus: '/Syllabus/pgScience/M.Sc_.-I-Statistics-Syallbus-2024-25.pdf' },
      { sr: 6, Program: 'M.Sc(Applied Microbiology)',syllabus: '/Syllabus/pgScience/MSc-I-Applied-Microbiology.pdf' },
      { sr: 7, Program: 'M.Sc(Zoology)',syllabus: '/Syllabus/pgScience/Zoology-PG-1.pdf' },
      { sr: 8, Program: 'M.Sc(Fisheries)',syllabus: '/Syllabus/pgScience/Fisheries-PG.pdf' },
      { sr: 9, Program: 'M.Sc(Botany)',syllabus: '/Syllabus/pgScience/M.Sc-Botany-Course-Strucuture.pdf' },
      { sr: 10, Program: 'M.Sc (Biotechnology)	',syllabus: '/Syllabus/pgScience/M.Sc-Biotechnology.pdf' },
      { sr: 11, Program: 'M.Sc (Computer Science))	',syllabus: '/Syllabus/pgScience/Computer-Science-PG.pdf' },
      { sr: 12, Program: 'M.Sc (Animation Science)	',syllabus: '/Syllabus/pgScience/M.Sc_.-I-Animation-Science-24-25.pdf' },
      { sr: 13, Program: 'M.Sc (Food Processing and Packaging)	',syllabus: '/Syllabus/pgScience/Food-Technlogy-PG.pdf' },
      { sr: 14, Program: 'M.Sc (Forensic Science)	',syllabus: '/Syllabus/pgScience/M.Sc_.-I-Forensic-Science-2024-25-NEP-2.0-Syllabus.pdf' },
      { sr: 15, Program: 'M.Sc (Data Science)	',syllabus: '/Syllabus/pgScience/Data-Science-M.Sc-Course-Structure.pdf'},
      { sr: 16, Program: 'M.Sc(Drug Chemistry)',syllabus: '/Syllabus/pgScience/Drug-Chemistry-PG-1.pdf' },
]
  },
  'Commerce Faculty': {
    'UG Program': [
      /* Your UG Commerce Faculty Programs here */
      { sr: 1, Program: 'Bank Management		',syllabus: '/Syllabus/pdf' },
      { sr: 2, Program: 'Banking and Finance		',syllabus: '/Syllabus/Science/Chemistry-UG.pdf' },
      { sr: 3, Program: 'Business Studies		',syllabus: '/ug programs/Science/Chemistry-UG.pdf' },
      { sr: 4, Program: 'Information Technology		',syllabus: '/ug programs/Science/Chemistry-UG.pdf' },
      { sr: 5, Program: '-',syllabus: '/ug programs/Science/Chemistry-UG.pdf' },
      { sr: 6, Program: '-',syllabus: '/ug programs/Science/Chemistry-UG.pdf' },
      { sr: 7, Program: '-',syllabus: '/ug programs/Science/Chemistry-UG.pdf' },
      { sr: 8, Program: '-',syllabus: '/ug programs/Science/Chemistry-UG.pdf' },
      { sr: 9, Program: '-',syllabus: '/ug programs/Science/Chemistry-UG.pdf' },
      { sr: 10, Program: '-	',syllabus: '/ug programs/Science/Chemistry-UG.pdf' },
      { sr: 11, Program: '-	',syllabus: '/ug programs/Science/Chemistry-UG.pdf' },
      { sr: 12, Program: '-	',syllabus: '/ug programs/Science/Chemistry-UG.pdf' },
      { sr: 13, Program: '-	',syllabus: '/ug programs/Science/Chemistry-UG.pdf' },
      { sr: 14, Program: '-	',syllabus: '/ug programs/Science/Chemistry-UG.pdf' },
      { sr: 15, Program: '-	',syllabus: '/ug programs/Science/Chemistry-UG.pdf' },
      
    ],
    'PG Program': [
      /* Your PG Commerce Faculty Programs here */
      { sr: 1, Program: 'Bank Management',syllabus: '/ug programs/Science/Chemistry-UG.pdf' },
      { sr: 2, Program: 'Business Studies	',syllabus: '/ug programs/Science/Chemistry-UG.pdf' },
      { sr: 3, Program: 'Information Technolgy',syllabus: '/ug programs/Science/Chemistry-UG.pdf' },
      { sr: 4, Program: 'Advanced Accountancy	',syllabus: '/ug programs/Science/Chemistry-UG.pdf' },
]
  },
  'Arts Faculty': {
    'UG Program': [
      /* Your UG Arts Faculty Programs here */
      { sr: 1, Program: 'Marathi',syllabus: '/Syllabus/SyllabusArts/Marathi.pdf'},
      { sr: 2, Program: 'Hindi',syllabus: '/Syllabus/SyllabusArts/Hindi.pdf' },
      { sr: 3, Program: 'English',syllabus: '/Syllabus/SyllabusArts/English.pdf' },
      { sr: 4, Program: 'Sanskrit	',syllabus: '/Syllabus/SyllabusArts/Sanskrit.pdf' },
      { sr: 5, Program: 'Political Science		',syllabus: '/Syllabus/SyllabusArts/politicalscience.pdf' },
      { sr: 6, Program: 'Economics',syllabus: '/Syllabus/SyllabusArts/Economics.pdf' },
      { sr: 7, Program: 'History',syllabus: '/Syllabus/SyllabusArts/History.pdf' },
      { sr: 8, Program: 'Sociology',syllabus: '/Syllabus/SyllabusArts/Sociology.pdf' },
      { sr: 9, Program: 'Psychology	',syllabus: '/Syllabus/SyllabusArts/Psychology.pdf' },
      { sr: 10, Program: 'B.Voc	',syllabus: '/Syllabus/SyllabusArts/bvoc.pdf' },
      { sr: 11, Program: 'Indian Knowledge System (IKS)	',syllabus: '/Syllabus/SyllabusArts/iks.pdf' },
],
    'PG Program': [
      /* Your PG Arts Faculty Programs here */
      { sr: 1, Program: 'Advanced History	',syllabus: '/ug programs/Science/Chemistry-UG.pdf' },
      { sr: 2, Program: 'Social Theory	',syllabus: '/ug programs/Science/Chemistry-UG.pdf' },
     
    ]
  }
};

export default function ProgramTabs() {
  const [activeFaculty, setActiveFaculty] = useState('Commerce Faculty');
  const [activeProgram, setActiveProgram] = useState('UG Program');

  const tableData = sampleData?.[activeFaculty]?.[activeProgram] || [];

  return (
    <div>
      {/* Background Image Section */}
      <div
        className="h-[250px] bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/images/tback.png')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-45" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-xl md:text-4xl font-bold font-['Times_New_Roman']">
            Syllabus pre NEP 2020
          </h1>
          <div className="border-t-2 border-white w-[70%] max-w-[500px] my-4" />
          <div className="text-white py-3 px-6 flex flex-wrap items-center space-x-2 text-sm md:text-base">
            <Image src="/images/breadcrumb.png" alt="breadcrumb" width={20} height={20} />
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span className="hover:underline">NEP-2020</span>
            <span>/</span>
            <span className="text-yellow-400 font-semibold">Syllabus as per NEP 2020</span>
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-6 max-w-screen-xl mx-auto">
        {/* Faculty Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {faculties.map(faculty => (
            <button
              key={faculty}
              className={clsx(
                'px-4 py-2 rounded font-semibold transition duration-200',
                faculty === activeFaculty ? 'bg-black text-white' : 'bg-yellow-400 text-black'
              )}
              onClick={() => setActiveFaculty(faculty)}
            >
              {faculty}
            </button>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:items-start">
          {/* Program Buttons */}
          <div className="flex justify-center md:flex-col gap-3 mx-10 my-20 md:justify-start">
            {programs.map(program => (
              <button
                key={program}
                className={clsx(
                  'px-4 py-2 font-semibold transition duration-200',
                  program === activeProgram
                    ? 'bg-black text-white'
                    : 'bg-yellow-400 text-black'
                )}
                onClick={() => setActiveProgram(program)}
              >
                {program}
              </button>
            ))}
          </div>

          {/* Table */}
          <div className="w-full bg-white rounded md:w-full p-4 my-5 max-h-[400px] overflow-y-auto">
            <table className="min-w-[600px] w-full text-sm border-[2]">
              <thead className="bg-gray-400 text-left">
                <tr>
                  <th className="border px-4 py-2">Sr</th>
                  <th className="border px-4 py-2">Program</th>
                  <th className="border px-4 py-2">Syllabus</th>
                </tr>
              </thead>
              <tbody>
                {tableData.length === 0 ? (
                  <tr>
                    <td colSpan={3} className="text-center py-4">
                      No data available
                    </td>
                  </tr>
                ) : (
                  tableData.map(item => (
                    <tr key={item.sr}>
                      <td className="border px-4 py-2">{item.sr}</td>
                      <td className="border px-4 py-2">{item.Program}</td>
                      <td className="border px-4 py-2">
                        {item.syllabus && item.syllabus !== '#' ? (
                          <a
                            href={item.syllabus}
                            className="text-blue-600 underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View
                          </a>
                        ) : (
                          <span className="text-gray-400">N/A</span>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
