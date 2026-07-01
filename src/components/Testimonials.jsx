const testimonials = [
  {
    quote:
      "Before Starteryou, I was tracking 80 students across three spreadsheets and a shared Google Drive folder. Every placement season felt like controlled chaos. Now everything lives in one place, my hours are logged, my employers are organized, and I actually feel in control of my program for the first time in years.",
    role: "WBL Coordinator",
    district: "New York School District",
  },
  {
    quote:
      "Our Perkins V report used to take me two weeks to pull together at the end of the year. I was chasing down paper timesheets, emailing employers for verification, and manually building spreadsheets at midnight. Last cycle I had everything I needed in under an hour. That alone made it worth it.",
    role: "CTE Director",
    district: "New Jersey School District",
  },
  {
    quote:
      "The employers we work with keep coming back because they feel like real partners now, not just volunteers. They can see their students, track progress, and stay connected to the program throughout the year. These communication tools make all the difference and employer retention has never been stronger.",
    role: "WBL Coordinator",
    district: "New York School District",
  },
];

const Testimonials = () => {
  return (
    <section className="overflow-hidden bg-[#f7f7f8] py-28">
      <div className="mx-auto px-4 md:px-40">
        {/* Header */}
        <div className="px-6 text-center space-y-3">
          <div className="flex items-center justify-center gap-3">
            <span className="text-[#8ec5ff]">|</span>
            <p className="text-[16px] text-gray-400">Voices From Educators</p>
            <span className="text-[#8ec5ff]">|</span>
          </div>

          <h2 className="mx-auto text-[48px] font-medium leading-[1.1] tracking-[-2px] text-[#2f2f34]">
            From the People Running These Programs Every Day
          </h2>

          <p className="text-[18px] text-[#8d8d96]">
            We asked the coordinators using Starteryou what actually changed.
            Here's what they said.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-20 flex gap-6 overflow-hidden">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="
                h-[385px]
                min-w-[560px]
                rounded-[16px]
                bg-gray-200
                p-12
              "
            >
              {/* Quote Icon */}
              <div className="text-[32px] font-bold leading-none text-[#0B8CFF]">
                ❝
              </div>

              {/* Quote */}
              <p className="text-[18px] text-[#6e6e76]">
                {item.quote}
              </p>

              {/* Footer */}
              <div className="mt-14">
                <h4 className="text-[18px] font-medium text-[#34343a]">
                  {item.role}
                </h4>

                <p className="text-[14px] text-[#9b9ba3]">
                  {item.district}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
