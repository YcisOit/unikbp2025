import Image from 'next/image';
import Link from 'next/link';

export default function RoleResponsibilitiesPage() {
  return (
    <div className="relative">
      {/* Banner Section */}
      <div
        className="h-[250px] bg-cover bg-center relative"
        style={{ backgroundImage: "url('/images/tback.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-45" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-lg md:text-4xl font-bold font-['Times_New_Roman']">
            Role Responsibilities Of Key Element
          </h1>
          <div className="border-t-2 border-white w-full max-w-md my-4" />
          <div className="text-white py-3 px-4 flex flex-wrap items-center justify-center space-x-2 text-sm">
            <Image
              src="/images/breadcrumb.png"
              alt="breadcrumb"
              width={20}
              height={20}
              className="w-5 h-5"
            />
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span className="text-[#fbbf24] font-semibold">Role Responsibilities Of Key Element</span>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="p-6 max-w-5xl mx-auto text-black space-y-10">
        {/* Chancellor */}
        <div>
          <h2 className="text-2xl font-bold text-black">Hon. Chancellor of the University</h2>
          <p className="mt-2">
            The Chancellor, when present, shall preside over the Convocation of the university and may issue directions
            to the Vice-Chancellor to convene the meeting of any authority of the university for specific purposes,
            whenever necessary, and the Vice-Chancellor shall submit the minutes of such meeting to the Chancellor for
            his perusal.
          </p>
        </div>

        {/* Vice Chancellor */}
        <div>
          <h2 className="text-2xl font-bold text-[#8a0c56]">Hon. Vice Chancellor of the University</h2>
          <p className="mt-2">
            Vice-Chancellor is the principal academic and executive officer of the university and ex-officio Chairperson
            of the Management Council, Academic Council, Board of Examinations and Evaluation, Board of Lifelong Learning
            and Extension, Finance and Accounts Committee, Board of National and International Linkages and the Board for
            Innovation, Incubation and Enterprise, Board of Information Technology, Board of Students’ Development, Board
            of Sports and Physical Education and Board of Research and shall preside in the absence of the Chancellor at
            any convocation for conferring degrees and also at any meeting of Senate.
          </p>
        </div>

        {/* Registrar */}
        <div>
          <h2 className="text-2xl font-bold text-[#8a0c56]">Registrar of the University</h2>
          <p className="mt-2">
            The Registrar shall, be the Chief Administrative Officer of the university. He shall be a full-time salaried
            officer and shall work directly under the superintendence, direction and control of the Vice-Chancellor.
          </p>
        </div>

        {/* Director: Examinations */}
        <div>
          <h2 className="text-2xl font-bold text-[#8a0c56]">Director, Board of Examinations & Evaluation</h2>
          <p className="mt-2">
            The Director, Board of Examinations and Evaluation shall be a full time salaried officer and shall work
            directly under the directions and control of the Vice Chancellor. He shall discharge his functions under the
            superintendence, direction and guidance of the Board of Examinations and Evaluation, and shall be concerned
            with the implementation of the policies and directives given by the Board of Examinations and Evaluation.
          </p>
        </div>

        {/* Director: Innovation */}
        <div>
          <h2 className="text-2xl font-bold text-[#8a0c56]">Director, Innovation, Incubation & Linkages</h2>
          <p className="mt-2">
            The Director of Innovation, Incubation and Linkages shall be a full time salaried officer who shall be
            responsible for creation and cultivation of an enabling environment for innovation, entrepreneurship and
            collaboration with national and international institutions and industry.
          </p>
        </div>

      

        {/* Director: Innovation */}
        <div>
          <h2 className="text-2xl font-bold text-[#8a0c56]">Finance and Accounts Officer</h2>
          <p className="mt-2">
            The Finance and Accounts Officer shall be the principal finance, 
            accounts and audit officer of the university. 
            He shall be a full-time salaried officer and shall work directly under the
           superintendence, direction and control of the Vice-Chancellor.
          </p>
        </div>

        {/* Director: Innovation */}
        <div>
          <h2 className="text-2xl font-bold text-[#8a0c56]">Dean, Faculty of Science and Technology</h2>
          <p className="mt-2">
            The Dean be responsible for academic planning and academic audit of the programmes and implementation 
            of academic policies   approved by the Academic Council in respect of academic development,
            maintenance of quality of education including standards of teaching and research and training of teachers 
            within his faculty. He shall work directly under the superintendence, direction and control of the Vice Chancellor.
            
             
          </p>
        </div>

        {/* Director: Innovation */}
        <div>
          <h2 className="text-2xl font-bold text-[#8a0c56]">Dean, Faculty of Commerce and Management</h2>
          <p className="mt-2">
            The Dean be responsible for academic planning and academic audit of the programmes and implementation of academic 
            policies approved by the Academic Council in respect of academic development, maintenance of quality of education including standards
             of teaching and research and training of teachers within his faculty. 
            He shall work directly under the superintendence, direction and control of the Vice Chancellor.
          </p>
        </div>


        {/* Director: Innovation */}
        <div>
          <h2 className="text-2xl font-bold text-[#8a0c56]">Dean, Faculty of Humanities</h2>
          <p className="mt-2">
            The Dean be responsible for academic planning and academic audit of the programmes and implementation of academic policies approved
             by the Academic Council in respect of academic development, 
            maintenance of quality of education including standards of teaching and research and training of teachers within his faculty. 
            He shall work directly under the superintendence, direction and control of the Vice Chancellor;
          </p>
        </div>

        {/* Director: Innovation */}
        <div>
          <h2 className="text-2xl font-bold text-[#8a0c56]"> Dean, Faculty of Interdisciplinary Studies</h2>
          <p className="mt-2">
            The Dean be responsible for academic planning and academic audit of the programmes and implementation of 
            academic policies approved by the Academic Council in respect of academic development, maintenance of quality of education including
             standards of teaching and research and training of teachers within his faculty. He shall work directly under the superintendence, direction
              and control of the Vice Chancellor.
          </p>
        </div>


        {/* Director: Innovation */}
        <div>
          <h2 className="text-2xl font-bold text-[#8a0c56]"> Director, Student Development</h2>
          <p className="mt-2">
            The Director of Students’ Development shall be nominated by the Vice-Chancellor, from amongst the teachers having minimum aggregate teaching 
            experience of ten years and desired exposure in the field of extracurricular and extension activities.
             He shall work directly under the superintendence, directions and control of the Vice-Chancellor.
          </p>
        </div>

        {/* Director: Innovation */}
        <div>
          <h2 className="text-2xl font-bold text-[#8a0c56]"> Director, Lifelong learning and Extension</h2>
          <p className="mt-2">
          The Director of Lifelong Learning and Extension shall be a full-time salaried officer of the university and shall be responsible to carry out the 
          activities of the Board of Lifelong Learning and Extension. He shall work directly under the superintendence, direction and control of the 
          Vice-Chancellor.  
            
          </p>
        </div>

        {/* Director: Innovation */}
        <div>
          <h2 className="text-2xl font-bold text-[#8a0c56]">Director, Sports and Physical Education </h2>
          <p className="mt-2">
            The Director of Sports and Physical Education shall be a full time Director, and Physical Education salaried officer responsible for promoting the 
            culture of sports and supervising sports related activities in the university, colleges and recognized institutions. He shall work under the 
            superintendence, direction and control of the Vice-Chancellor. 
            
          </p>
        </div>

        {/* Director: Innovation */}
        <div>
          <h2 className="text-2xl font-bold text-[#8a0c56]"> Director, National Service Scheme (NSS)</h2>
          <p className="mt-2">
            The Director of National Service Scheme shall be nominated by the Vice- Chancellor from amongst the teachers having minimum aggregate 
            teaching experience of years, experience of at least three years as NSS Programme Officer and desired exposure in the field of National 
            Service Scheme activities 
            
          </p>
        </div>

        {/* Director: Innovation */}
        <div>
          <h2 className="text-2xl font-bold text-[#8a0c56]"> Librarian/Director Knowledge Resource Centre, UNIKBP</h2>
          <p className="mt-2">
            Director, Knowledge Resource Center shall be a full-time salaried officer of the university and shall be in-charge of the Knowledge 
            Resource Centre in the university. He shall work directly under the superintendence, direction 
            and control of the Vice-Chancellor.
          </p>
        </div>

      </div>
    </div>
  );
}
