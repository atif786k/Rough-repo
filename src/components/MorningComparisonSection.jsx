import { useState } from "react";
import { FileSpreadsheet, Monitor, Clock3 } from "lucide-react";
import { HiArrowRight } from "react-icons/hi2";

const steps = [
  {
    time: "8:05 AM",
    beforeStress: 80,
    afterStress: 10,
    before: [
      {
        title: "Who still needs a placement?",
        description:
          "Three spreadsheets. Two conflicting tabs. 25 minutes to figure out where you left off.",
      },
    ],
    after: [
      {
        title: "Open the dashboard",
        description:
          "Every student's status, live. Placed, applying, or needs placement — in 10 seconds.",
      },
    ],
  },
  {
    time: "8:40 AM",
    beforeStress: 88,
    afterStress: 8,
    before: [
      {
        title: "Who still needs a placement?",
        description:
          "Three spreadsheets. Two conflicting tabs. 25 minutes to figure out where you left off.",
      },
      {
        title: "Chase missing timesheets",
        description:
          "Email five employers. CC the students. Follow up Wednesday. Manually enter whatever arrives.",
      },
    ],
    after: [
      {
        title: "Open the dashboard",
        description:
          "Every student's status, live. Placed, applying, or needs placement — in 10 seconds.",
      },
      {
        title: "Verify logged hours",
        description:
          "Students log their own hours. Employers confirm with one click. You approve. Done.",
      },
    ],
  },
  {
    time: "9:30 AM",
    beforeStress: 85,
    afterStress: 8,
    before: [
      {
        title: "Who still needs a placement?",
        description:
          "Three spreadsheets. Two conflicting tabs. 25 minutes to figure out where you left off.",
      },
      {
        title: "Chase missing timesheets",
        description:
          "Email five employers. CC the students. Follow up Wednesday. Manually enter whatever arrives.",
      },
      {
        title: "Find unsigned liability forms",
        description:
          "Dig through Google Drive. Email parents, students, employers. Hope someone replies.",
      },
    ],
    after: [
      {
        title: "Open the dashboard",
        description:
          "Every student's status, live. Placed, applying, or needs placement — in 10 seconds.",
      },
      {
        title: "Verify logged hours",
        description:
          "Students log their own hours. Employers confirm with one click. You approve. Done.",
      },
      {
        title: "Check paperwork status",
        description:
          "One screen shows every document status. Automated reminders already went out Friday.",
      },
    ],
  },
  {
    time: "10:15 AM",
    beforeStress: 72,
    afterStress: 5,
    before: [
      {
        title: "Who still needs a placement?",
        description:
          "Three spreadsheets. Two conflicting tabs. 25 minutes to figure out where you left off.",
      },
      {
        title: "Chase missing timesheets",
        description:
          "Email five employers. CC the students. Follow up Wednesday. Manually enter whatever arrives.",
      },
      {
        title: "Find unsigned liability forms",
        description:
          "Dig through Google Drive. Email parents, students, employers. Hope someone replies.",
      },
      {
        title: "Prep for an employer call",
        description:
          "Search email history. Find old notes. Can't find direct number. Reschedule.",
      },
    ],
    after: [
      {
        title: "Open the dashboard",
        description:
          "Every student's status, live. Placed, applying, or needs placement — in 10 seconds.",
      },
      {
        title: "Verify logged hours",
        description:
          "Students log their own hours. Employers confirm with one click. You approve. Done.",
      },
      {
        title: "Check paperwork status",
        description:
          "One screen shows every document status. Automated reminders already went out Friday.",
      },
      {
        title: "Pull up the employer profile",
        description:
          "Every interaction, student, and contact detail in one record. Ready in 30 seconds.",
      },
    ],
  },
  {
    time: "11:00 AM",
    beforeStress: 94,
    afterStress: 6,
    before: [
      {
        title: "Who still needs a placement?",
        description:
          "Three spreadsheets. Two conflicting tabs. 25 minutes to figure out where you left off.",
      },
      {
        title: "Chase missing timesheets",
        description:
          "Email five employers. CC the students. Follow up Wednesday. Manually enter whatever arrives.",
      },
      {
        title: "Find unsigned liability forms",
        description:
          "Dig through Google Drive. Email parents, students, employers. Hope someone replies.",
      },
      {
        title: "Prep for an employer call",
        description:
          "Search email history. Find old notes. Can't find direct number. Reschedule.",
      },
      {
        title: "Build a director update",
        description:
          "Four sources. One slide. Data is two weeks old. An hour to make it presentable.",
      },
    ],
    after: [
      {
        title: "Open the dashboard",
        description:
          "Every student's status, live. Placed, applying, or needs placement — in 10 seconds.",
      },
      {
        title: "Verify logged hours",
        description:
          "Students log their own hours. Employers confirm with one click. You approve. Done.",
      },
      {
        title: "Check paperwork status",
        description:
          "One screen shows every document status. Automated reminders already went out Friday.",
      },
      {
        title: "Pull up the employer profile",
        description:
          "Every interaction, student, and contact detail in one record. Ready in 30 seconds.",
      },
      {
        title: "Share a live report",
        description:
          "Always current. Export in two clicks or share a link. Your director sees live data.",
      },
    ],
  },
];

export default function MorningTimelineComparison() {
  const [step, setStep] = useState(0);

  const current = steps[step];

  return (
    <section className="bg-[#f7f7f8] py-24">
      <div className="mx-auto px-4 md:px-40">
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-3">
            <span className="text-[#8ec5ff]">|</span>
            <p className="text-[16px] text-gray-400">Monday Morning, 8:00 AM</p>
            <span className="text-[#8ec5ff]">|</span>
          </div>

          <h2 className="text-[48px] font-semibold text-slate-900">
            Same job. Different morning.
          </h2>

          <p className="text-[18px] text-slate-500">
            Step through a coordinator's day — task by task.
          </p>
        </div>

        {/* Timeline */}
        <div className="mt-10 flex items-center justify-center md:gap-6 -gap-1">
          <button
            disabled={step === 0}
            onClick={() => setStep((s) => s - 1)}
            className="rounded-full border border-gray-400 px-6 py-2 text-sm disabled:opacity-40"
          >
            Back
          </button>

          {steps.map((item, index) => (
            <>
              <button
                key={item.time}
                onClick={() => setStep(index)}
                className={`rounded-full px-4 py-2 text-xs font-medium transition ${
                  index <= step
                    ? "bg-blue-100 text-blue-700"
                    : "border border-slate-300 text-slate-400"
                }`}
              >
                {item.time}
              </button>
              <HiArrowRight />
            </>
          ))}

          <button
            disabled={step === steps.length - 1}
            onClick={() => setStep((s) => s + 1)}
            className="rounded-full bg-blue-600 px-6 py-2 text-sm text-white shadow-lg disabled:opacity-40"
          >
            Next
          </button>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <TaskCard
            title="Before Starteryou"
            tasks={current.before}
            stress={current.beforeStress}
            danger
          />

          <TaskCard
            title="With Starteryou"
            tasks={current.after}
            stress={current.afterStress}
          />
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="relative mt-[-200px] overflow-hidden bg-gradient-to-r from-indigo-700 via-blue-600 to-sky-500 px-4 md:px-40 pb-32 pt-64">
        {/* Diagonal Lines */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, transparent, transparent 14px, rgba(255,255,255,0.7) 14px, rgba(255,255,255,0.7) 15px)",
          }}
        />
        <div className="text-white md:flex md:justify-between">
          <div>
            <h3 className="text-[40px] font-medium leading-none">
              That's the
              <br />
              whole morning.
            </h3>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <Stat value="3.5 hrs" label="saved every Monday" />
            <Stat value="87%" label="Less Admin Time" />
            <Stat value="0" label="Spreadsheets Needed" />
          </div>
        </div>
      </div>
    </section>
  );
}

function TaskCard({ title, tasks, stress, danger = false }) {
  return (
    <div className="relative z-10 rounded-[16px] bg-[#f5f7fa] p-8 shadow-sm">
      <h3 className="mb-8 text-2xl font-semibold text-slate-900">• {title}</h3>

      <div className="space-y-6">
        {tasks.map((task) => (
          <div key={task.title} className="flex gap-4">
            <div
              className="
                flex h-10 w-10 shrink-0 items-center justify-center
                rounded-lg bg-blue-600 text-white
              "
            >
              <Monitor size={18} />
            </div>

            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-slate-900">{task.title}</h4>

                <span
                  className={`rounded-full px-3 py-1 text-xs ${
                    danger
                      ? "bg-red-100 text-red-600"
                      : "bg-green-100 text-green-600"
                  }`}
                >
                  {danger ? "+30 Min" : "+1 Min"}
                </span>
              </div>

              <p className="mt-1 text-sm text-slate-500">{task.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <div className="mb-2 flex justify-between text-xs text-slate-500">
          <span>Stress</span>
          <span>{stress}%</span>
        </div>

        <div className="h-2 rounded-full bg-slate-200">
          <div
            style={{ width: `${stress}%` }}
            className={`h-2 rounded-full ${
              danger ? "bg-red-500" : "bg-blue-600"
            }`}
          />
        </div>
      </div>
    </div>
  );
}

function Stat({ value, label }) {
  return (
    <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
      <h4 className="text-[40px] font-light">{value}</h4>
      <p className="text-[16px] text-blue-100">{label}</p>
    </div>
  );
}
