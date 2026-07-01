import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, ClipboardCheck, Briefcase } from "lucide-react";

const tabs = [
  {
    key: "cte",
    icon: Building2,
    label: "CTE Director",
    role: "District-level oversight",
    headline: "Your whole district, one view.",
    subtitle:
      "Real-time visibility across every school, every student, and every Perkins V requirement — no spreadsheet archaeology.",
    features: [
      {
        title: "District dashboard",
        body: "Placement rates, hours logged, and compliance gaps across your schools at a glance.",
      },
      {
        title: "Perkins V reporting",
        body: "Every data point already collected and organized. Pull a compliant report in minutes.",
      },
      {
        title: "Compliance alerts",
        body: "Get notified when students fall behind on hours or forms — before it becomes a problem.",
      },
    ],
  },
  {
    key: "wbl",
    icon: ClipboardCheck,
    label: "WBL Coordinator",
    role: "Day-to-day program management",
    headline: "Less chasing. More supporting.",
    subtitle:
      "Starteryou handles the tracking, the forms, and the follow-ups so you can spend more time where it counts.",
    features: [
      {
        title: "Placement Tracking",
        body: "Every student's status in one view: placed, applying, or needs attention.",
      },
      {
        title: "Hours verification",
        body: "Students log hours, employers confirm, you approve — no timesheets to chase.",
      },
      {
        title: "Employer CRM",
        body: "All your contacts, placements, and site-visit notes in one place. Nothing falls through.",
      },
    ],
  },
  {
    key: "employer",
    icon: Briefcase,
    label: "Employer",
    role: "Hiring and mentoring students",
    headline: "Great local talent, zero recruiting overhead.",
    subtitle:
      "Post a role, get matched with school-vetted students, and stay connected to their progress — all in one place.",
    features: [
      {
        title: "Post For Free",
        body: "List your opportunity in minutes. Every applicant is already approved by their district.",
      },
      {
        title: "Weekly Evaluations",
        body: "Rate students on professionalism, reliability, and more. Takes two minutes per week.",
      },
      {
        title: "Early Talent Pipelines",
        body: "Strengthen relationships with local districts to build direct early-talent pipelines.",
      },
    ],
  },
];

const AudienceTabs = () => {
  const [active, setActive] = useState(0);
  const current = tabs[active];

  return (
    <section className="bg-[#ffffff] pb-12">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="relative bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-700 pt-24 pb-20">
          {/* Diagonal pattern */}
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(-45deg, transparent, transparent 12px, rgba(255,255,255,0.5) 12px, rgba(255,255,255,0.5) 13px)",
            }}
          />

          {/* White diagonal cut */}
          <div
            className="
              absolute
              bottom-0
              right-0
              h-[110px]
              w-[180px]
              bg-white
              [clip-path:polygon(100%_0,100%_100%,0_100%)]
            "
          />

          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center space-y-3">
            <div className="flex items-center justify-center gap-3">
              <span className="text-[#8ec5ff]">|</span>
              <p className="text-[16px] text-white">
                Built For Everyone In The Program
              </p>
              <span className="text-[#8ec5ff]">|</span>
            </div>

            <h2 className="text-[34px] font-semibold leading-tight text-white md:text-[48px]">
              Which best describes you?
            </h2>

            <p className="text-[18px] text-blue-100">
              Pick your role to see what Starteryou does for you.
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="relative z-20 mx-auto -mt-8 px-40">
          <div className="grid overflow-hidden rounded-[20px] bg-white sm:grid-cols-3">
            {tabs.map((tab, index) => {
              const Icon = tab.icon;
              const isActive = active === index;

              return (
                <button
                  key={tab.key}
                  onClick={() => setActive(index)}
                  className={`
                    flex p-[32px] flex-col items-center justify-center
                    transition-all duration-300
                    ${
                      isActive
                        ? "bg-gradient-to-r from-sky-500 to-indigo-700 text-white"
                        : "bg-[#F5F7FA] text-gray-700 hover:bg-gray-100"
                    }
                    ${index > 0 ? "border-t sm:border-l sm:border-t-0 border-gray-200" : ""}
                  `}
                >
                  <span
                    className={`
                      flex h-6 w-6 items-center justify-center rounded-md
                      ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-white text-blue-600"
                      }
                    `}
                  >
                    <Icon size={18} />
                  </span>

                  <p className="mt-2 text-[18px] font-semibold">{tab.label}</p>

                  <p
                    className={`text-[14px] ${
                      isActive ? "text-blue-100" : "text-gray-400"
                    }`}
                  >
                    {tab.role}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto px-40 pt-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.key}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-[30px] font-semibold text-gray-800 md:text-[32px]">
              {current.headline}
            </h3>

            <p className="max-w-4xl text-[16px] leading-7 text-gray-500">
              {current.subtitle}
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {current.features.map((feature) => (
                <div
                  key={feature.title}
                  className="
                    rounded-xl
                    border
                    border-gray-50
                    bg-[#F5F7FA]
                    p-[24px]
                    transition-all
                    duration-300
                    hover:bg-gray-100
                  "
                >
                  <h4 className="text-[20px] font-semibold text-gray-800">
                    {feature.title}
                  </h4>

                  <p className="mt-2 text-[16px] leading-6 text-gray-500">
                    {feature.body}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AudienceTabs;
