import { motion } from "framer-motion";

const FinalCTA = () => {
  return (
    <section className="w-full bg-white px-40 py-20 lg:py-28">
        
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto h-[374px] flex justify-center items-center overflow-hidden rounded-[12px] px-8 py-20 text-center lg:px-16 lg:py-28"
      >
        {/* Background — swap this gradient for the Figma photo export when available */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-600 via-blue-700 to-indigo-800" />
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative">
          <h2 className="mx-auto text-[48px] font-medium leading-tight text-white md:text-4xl lg:text-5xl">
            Ready to bring real work
          </h2>
          <h2 className="mx-auto text-[48px] font-medium leading-tight text-white md:text-4xl lg:text-5xl">
            Experiences to every student?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-blue-100 md:text-lg">
            {/* TODO: exact copy */}
           Join the districts already running Starteryou. Get a personalized demo in under 30 minutes.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              type="button"
              className="rounded-full bg-emerald-400 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-colors hover:bg-emerald-500"
            >
              Get a Demo
            </button>
            <button
              type="button"
              className="rounded-full border border-white/40 bg-white/10 px-8 py-3.5 text-base font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              See How It Works
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FinalCTA;
