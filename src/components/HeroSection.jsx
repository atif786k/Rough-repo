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
    <section className="relative mb-16 min-h-screen w-full overflow-hidden bg-white">
      {/* =========================
        BLUE DIAGONAL BACKGROUND
    ========================== */}
      <div
        className="
        absolute
        left-0
        top-0
        h-full
        w-[58%]
        bg-gradient-to-br
        from-sky-500
        via-blue-600
        to-indigo-700
      "
        style={{
          clipPath: "polygon(0 0, 75% 0, 100% 100%, 0 100%)",
        }}
      />

      {/* =========================
        MAIN CONTENT
    ========================== */}
      <div className="relative z-10 flex min-h-screen">
        {/* =========================
          LEFT CONTENT
      ========================== */}
        <div className="flex w-1/2 items-center pl-40 pr-10">
          <div className="text-white space-y-4">
            <div className="flex items-center justify-start gap-3">
              <span className="text-[#8ec5ff]">|</span>
              <p className="text-[16px] text-white">Work-Based Learning K-12</p>
              <span className="text-[#8ec5ff]">|</span>
            </div>

            <h1 className="text-[48px] font-medium leading-tight">
              Your partner in running workforce learning for all your students.
            </h1>

            <p className="text-[18px] text-blue-100">
              Starteryou works alongside your coordinators to manage placements,
              track compliance and keep employer relationships strong so your
              program actually scales.
            </p>

            <button className=" rounded-full bg-gradient-to-r from-green-400 to-green-500 px-8 py-4 font-semibold text-white shadow-lg transition duration-300 hover:scale-105">
              See How It Works
            </button>
          </div>
        </div>

        {/* =========================
          RIGHT CONTENT
      ========================== */}
        <div className="flex flex-col w-1/2 items-center justify-end space-y-6">
          {/* Student mapping */}
          <div className="flex justify-center gap-6">
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

                <span className="mt-1 rounded-full bg-green-50 px-3 py-1 text-xs text-green-600">
                  {student.role}
                </span>
              </div>
            ))}
          </div>

          {/* Program Overview */}
          <div
            className="w-full rounded-tl-[18px] bg-gray-50 p-4"
            style={{
              boxShadow: "-2px -5px 20px rgba(185, 185, 185, 0.81)",
            }}
          >
            <div>
              <div className="flex items-center justify-between">
                <h2 className="text-[20px] font-medium text-gray-800">
                  Program Overview - Fall 2026
                </h2>

                <span className="rounded-2xl bg-green-100 px-4 py-2 text-[16px] font-medium text-green-600">
                  Live
                </span>
              </div>

              <hr className="my-4" />

              {/* Numbers */}
              <div className="flex gap-4">
                {[
                  ["24", "Placed"],
                  ["18", "Employers"],
                  ["0%", "Compliance Gap"],
                ].map(([number, label]) => (
                  <div
                    key={label}
                    className="flex-1 rounded-[12px] bg-gray-100 p-[12px]"
                  >
                    <h3 className="text-[24px] font-medium text-gray-800">
                      {number}
                    </h3>

                    <p className="text-sm text-gray-500">{label}</p>
                  </div>
                ))}
              </div>

              {/* Placement Rows */}
              <div className="">
                {placements.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-5 rounded-2xl border border-gray-100 p-3 shadow-sm"
                  >
                    <img
                      src={`https://i.pravatar.cc/60?u=${item.name}`}
                      alt={item.name}
                      className="h-12 w-12 rounded-full"
                    />

                    <div className="w-[180px]">
                      <h4 className="text-[16px] font-medium text-gray-700">
                        {item.name}
                      </h4>

                      <p className="text-[12px] text-gray-400">
                        {item.company}
                      </p>
                    </div>

                    <div className="w-[160px]">
                      <p className="mb-2 text-sm text-gray-500">Hours</p>

                      <div className="h-2 overflow-hidden rounded-full bg-gray-200">
                        <div
                          className="h-full rounded-full bg-blue-500"
                          style={{
                            width: `${item.progress}%`,
                          }}
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
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
