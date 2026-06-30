import React from "react";
import { Briefcase, Star, Users, CheckCircle } from "lucide-react";

const HeroSection = () => {
  const students = [
    {
      name: "Marcus",
      role: "Placed - Finance",
      img: "https://i.pravatar.cc/80?img=11",
    },
    {
      name: "Sofia",
      role: "Placed - Healthcare",
      img: "https://i.pravatar.cc/80?img=32",
    },
    {
      name: "Devon",
      role: "Applying",
      img: "https://i.pravatar.cc/80?img=15",
    },
    {
      name: "Aaliyah",
      role: "Placed Engineering",
      img: "https://i.pravatar.cc/80?img=18",
    },
  ];

  const placements = [
    {
      name: "Ralph Edwards",
      company: "Acme Engineering",
      progress: 84,
      status: "Placed",
    },
    {
      name: "Ryan Kimura",
      company: "Forgewell",
      progress: 55,
      status: "Placed",
    },
    {
      name: "Darrell Steward",
      company: "Nexora Systems",
      progress: 0,
      status: "Applying",
    },
    {
      name: "Leslie Alexander",
      company: "Cloud Harbor",
      progress: 0,
      status: "Applying",
    },
  ];
  return (
    <section className="hero-section w-[100vw] h-[100vh] flex items-center relative overflow-hidden">
      {/* Left blue panel */}
      <div className="left-blue-panel  absolute inset-0 bg-blue-500" style={{clipPath: "polygon(0 0, 60% 0, 45% 100%, 0% 100%)"}}>
        <div className="titles-headings">
          <h4>| Work-Based Learning K-12 |</h4>
          <h1>
            Your partner in running workforce learning for all your students.
          </h1>
          <h2>
            Starteryou works alongside your coordinators to manage placements,
            track compliance and keep employer relationships strong so your
            program actually scales.
          </h2>
          <button>See How It Works</button>
        </div>
      </div>
      {/* Right white panel */}
      <div className="right-white-panel  absolute inset-0 bg-red-500" style={{clipPath: "polygon(60% 0, 100% 0, 100% 100%, 45% 100%)"}}>
        {/* Student mapping */}
        <div className="student-display flex gap-6">
          {students.map((student) => (
            <div key={student.name} className="flex flex-col items-center">
              <img
                src={student.img}
                alt={student.name}
                className="h-16 w-16 rounded-full object-cover shadow-md"
              />

              <h3 className="mt-3 text-sm font-semibold text-gray-700">
                {student.name}
              </h3>

              <span
                className="
                  mt-1 rounded-full
                  bg-green-50
                  px-3 py-1
                  text-xs
                  text-green-500
                "
              >
                {student.role}
              </span>
            </div>
          ))}
        </div>
        {/* Program overview card */}
        <div className="program-overview-card">
          <div className="card-title">
            <h2>Program Overview -Fall 2026</h2>
            <h2>Live</h2>
          </div>
          <hr />
          {/* Card Numbers */}
          <div className="card-numbers flex justify-between gap-6">
            {[
              ["24", "Placed"],
              ["18", "Employers"],
              ["0%", "Compliance Gap"],
            ].map(([number, label]) => (
              <div key={label} className="rounded-2xl w-full bg-gray-100 p-4">
                <div className="text-3xl font-bold text-gray-700">{number}</div>

                <div className="mt-2 text-sm text-gray-500">{label}</div>
              </div>
            ))}
          </div>

          {/* Placement Rows */}
          <div className="placement-rows">
            {placements.map((item) => (
              <div
                key={item.name}
                className="flex items-center gap-5 rounded-2xl border border-gray-100 p-4"
              >
                <img
                  src={`https://i.pravatar.cc/60?u=${item.name}`}
                  alt={item.name}
                  className="h-12 w-12 rounded-full"
                />

                <div className="w-[180px]">
                  <h4 className="font-semibold text-gray-700">{item.name}</h4>

                  <p className="text-sm text-gray-400">{item.company}</p>
                </div>

                <div className="w-[160px]">
                  <p className="mb-2 text-sm text-gray-500">Hours</p>

                  <div className="h-2 overflow-hidden rounded-full bg-gray-200">
                    <div
                      style={{
                        width: `${item.progress}%`,
                      }}
                      className="h-full rounded-full bg-blue-500"
                    />
                  </div>
                </div>

                <div className="flex flex-1 justify-center gap-1 text-green-500">
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                </div>

                <div>
                  {item.status === "Placed" ? (
                    <div className="flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-sm text-green-600">
                      <CheckCircle size={16} />
                      Placed
                    </div>
                  ) : (
                    <div className="rounded-full bg-orange-50 px-4 py-2 text-sm text-orange-500">
                      Applying
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
