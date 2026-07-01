import { motion } from "framer-motion";
import { Check, Building2, GraduationCap } from "lucide-react";

const cards = [
  {
    title: "For Employers And Businesses",
    body: "Post internships or jobs and connect with motivated local students vetted by your district partners. Free to post.",
    cta: "Post a Job",
  },
  {
    title: "For Students",
    body: "Browse real local opportunities, track your hours, and submit paperwork all in one place your school already uses.",
    cta: "Student Login",
  },
];

const EmployersStudents = () => {
  return (
    <section className="overflow-hidden bg-[#f7f7f8] py-28 px-40">
      <div className="text-center space-y-3">
        <div className="flex items-center justify-center gap-3">
          <span className="text-[#8ec5ff]">|</span>
          <p className="text-[16px] text-gray-400">
            Built For Everyone In The Program
          </p>
          <span className="text-[#8ec5ff]">|</span>
        </div>

        <h2 className="mx-auto text-[48px] font-medium leading-[1.1] tracking-[-2px] text-[#2f2f34]">
          From the People Running These Programs Every Day
        </h2>
      </div>

      <div className="mx-auto mt-14 grid gap-6 md:grid-cols-2">
        {cards.map((card, i) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-[16px] bg-[#F5F7FA] p-[32px]"
            >
              <h3 className="text-[36px] font-medium text-gray-800">
                {card.title}
              </h3>
              <p className="mt-3 text-[18px] text-gray-500">{card.body}</p>

              <button
                type="button"
                className={`mt-12 rounded-full px-7 py-3 text-base font-semibold text-white bg-blue-600 transition-colors`}
              >
                {card.cta}
              </button>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default EmployersStudents;
