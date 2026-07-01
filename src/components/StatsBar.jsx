import { motion } from "framer-motion";

/* TODO: confirm exact numbers + labels with Figma copy */
const stats = [
  { value: "9,348", label: "Students Engaged" },
  { value: "2,006", label: "Students Experiences" },
  { value: "922", label: "Employer Partnerships" },
  { value: "5081", label: "Students in Workforce Readiness Training" },
];

const StatsBar = () => {
  return (
    <section className="relative w-full mb-16 h-[110px] bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700">
      {/* Diagonal Lines */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, transparent, transparent 14px, rgba(255,255,255,0.7) 14px, rgba(255,255,255,0.7) 15px)",
        }}
      />
      <div className="mx-auto h-full grid grid-cols-2 gap-8 lg:grid-cols-4 px-4 md:px-40">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="border-r border-white/30 flex flex-col items-start justify-center"
          >
            <div className="text-[40px] font-medium text-white md:text-5xl">
              {s.value}
            </div>
            <div className="mt-2 text-[16px] font-medium text-blue-100 md:text-base">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsBar;
