import dashboardImg from "../../public/image.png";
import profileImg from "../../public/image.png";
import jobsImg from "../../public/image.png";
import employersImg from "../../public/image.png";

const sections = [
  {
    tag: "School Administrator Dashboard",
    title: "Your Entire Program, Running From One Place",
    image: dashboardImg,
    reverse: false,
    bullets: [
      "See every student's status at a glance, who's placed, who's applying, and who still needs a placement",
      "Track work logs, hours, and evaluations without hunting anyone down",
      "Log site visits, manage digital forms, and keep compliance documents organized automatically",
      "Get alerts before things fall through the cracks, not after",
      "Everything your superintendent or Perkins V auditor might ask for is already documented and ready to pull",
    ],
  },
  {
    tag: "Verified Student Profiles",
    title:
      "Every Student Graduates With Verified Proof Of What They've Actually Done, Not Just A Blank Resume.",
    image: profileImg,
    reverse: true,
    bullets: [
      "Verified work history gives them a head start on college applications, not just job apps",
      "Builds professional identity early, kids who have never had a resume now have one by junior year",
      "Creates accountability, students who see their record being tracked show up and perform better",
      "Portable proof of soft skills, punctuality, reliability, communication, things a transcript doesn't show",
    ],
  },
  {
    tag: "Job Portal",
    title:
      "Students Shouldn't Have To Hunt For Work Experience. Starteryou Brings Vetted, Real Opportunities Directly To Them.",
    image: jobsImg,
    reverse: false,
    bullets: [
      "Students browse and apply to jobs and internships matched to their skills, goals, and location",
      "Employers post opportunities directly to the platform, no back-and-forth emails or spreadsheets",
      "Stay in constant communication with employers directly from the platform, no more chasing down contacts",
      "Every listing runs through the district before students ever see it, so quality and safety are always guaranteed",
      "From browsing to applying, the entire experience lives in one place for students, employers, and coordinators",
    ],
    label: "Student Job Portal",
  },
  {
    tag: "Employer Directory",
    title:
      "Build A Thriving Network Of Local Employers Who Keep Coming Back To Hire Your Students, Year After Year",
    image: employersImg,
    reverse: true,
    bullets: [
      "Keep all your partner employers organized in one place with contact info, active placements, and site visit history at a glance",
      "Track evaluation scores and verification rates so you always know which partnerships are performing",
      "Stay in constant communication with employers directly from the platform, no more chasing down contacts",
      "Reduce employer churn by maintaining real, ongoing relationships, not one-time transactions",
      "Grow a loyal local employer community that returns each year because your program delivers",
    ],
  },
];

const PlatformShowcase = () => {
  return (
    <section className="bg-[#fafafa] py-20 px-40">
      <div className="main-heading">
        <div className="mb-6 flex items-center gap-3">
          <span className="text-[#8ec5ff]">|</span>
          <p className="text-[16px] text-gray-400">What We Do Together</p>
          <span className="text-[#8ec5ff]">|</span>
        </div>
        <div className="flex justify-between items-end">
          <div className="text-[48px] font-semibold leading-tight">
            <h2>We handle the infrastructure.</h2>
            <h2>You focus on the students.</h2>
          </div>
          <div className="text-[18px] text-gray-500">
            <h4>Your coordinators are already doing the hardwork.</h4>
            <h4>We give them the tools to do it without the chaos.</h4>
          </div>
        </div>
      </div>
      <div className="mx-auto">
        {sections.map((item, index) => (
          <div
            key={index}
            className={`grid items-start gap-16 py-12 lg:grid-cols-2 ${
              item.reverse ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            {/* Image */}
            <div>
              <div className="overflow-hidden rounded-2xl border border-[#d7e7f8] bg-[#f7fbff] p-4 shadow-sm">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full rounded-xl"
                />
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="text-[#8ec5ff]">|</span>
                <p className="text-[16px] text-gray-400">{item.tag}</p>
                <span className="text-[#8ec5ff]">|</span>
              </div>

              {index === 0 && (
                <>
                  <h2 className="max-w-3xl text-[36px] font-medium leading-[1.2] text-[#1e293b]">
                    {item.title}
                  </h2>
                </>
              )}

              {index !== 0 && (
                <h2 className="max-w-3xl text-[36px] font-medium leading-[1.2] text-[#1e293b]">
                  {item.title}
                </h2>
              )}

              <ul className="mt-8 space-y-3">
                {item.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="flex gap-4 text-[18px] leading-7 text-gray-500"
                  >
                    <span className="mt-[12px] h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlatformShowcase;
