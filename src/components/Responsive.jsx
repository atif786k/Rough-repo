import React, { useState } from "react";

const Responsive = () => {
  const [job, setJob] = useState({
    _id: "123456",
    title: "Frontend Developer",
    companyName: "TechNova Inc.",
    location: "Remote",
    description: `We are looking for a skilled Frontend Developer to join our team.
      You'll be responsible for building modern UI components using React.js.`,
    experienceLevel: "Mid-Level",
    industry: "Information Technology",
    jobType: "Full-Time",
    salaryRange: {
      min: 60000,
      max: 90000,
    },
    frequency: "Yearly",
    startDate: "2025-05-15T00:00:00.000Z",
    workplaceType: "Remote",
  });
  const formatSalaryRange = (salaryRange) => {
    if (!salaryRange || !salaryRange.min || !salaryRange.max) return "N/A";
    const { min, max } = salaryRange;
    return `$${min.toLocaleString()} - $${max.toLocaleString()}`;
  };
  const formatDate = (dateString) => {
    if (!dateString) return "";
    return format(new Date(dateString), "dd MMMM yyyy");
  };
  return (
    <div className="w-full max-w-[95%] md:w-[1200px] mx-auto bg-white p-4 md:p-6 rounded-lg overflow-auto max-h-[100vh]">
      <div className="p-4 flex flex-col md:flex-row justify-between items-start md:items-center rounded-md border-2 space-y-4 md:space-y-0">
        <div className="flex items-start md:items-center space-x-4">
          <figure className="h-14 w-14 bg-[#e1fcff] rounded-lg flex items-center justify-center">
            {/* <FaBuilding className="text-4xl text-gray-700" /> */}
          </figure>

          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-semibold">{job.title}</h2>
            <div className="flex flex-wrap items-center text-gray-500 gap-1">
              <span className="font-medium">{job.companyName}</span>
              <span>-</span>
              <span>{job.location}</span>
              <span className="bg-gray-200 text-gray-700 px-2 py-1 text-sm rounded-md ml-2">
                Active
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setIsApplicantsModalOpen(true)}
            className="border px-4 py-2 rounded-md"
          >
            Applicants
          </button>
          <button
            onClick={() => setOpenEditJobCard(true)}
            className="border px-4 py-2 rounded-md"
          >
            Edit Job
          </button>
          <button
            onClick={() => deleteJobFunction(job._id)}
            className="bg-red-500 text-white px-4 py-2 rounded-md"
          >
            Close Job
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
        {/* Total Applicants */}
        <div className="p-4 rounded-md border-2">
          <div className="flex items-center space-x-4">
            <span className="bg-[#e1fcff] text-[#0da2e7] h-8 w-8 flex items-center justify-center rounded-lg">
              {/* <GoPeople className="text-xl" /> */}
            </span>
            <div>
              <p className="text-gray-600">Total Applicants</p>
              <p className="text-lg font-semibold">N/A</p>
            </div>
          </div>
          <div className="w-full mt-2 bg-gray-300 h-2 rounded overflow-hidden">
            <div className="bg-blue-500 h-2" style={{ width: "45%" }}></div>
          </div>
        </div>

        {/* Job Views */}
        <div className="p-4 rounded-md border-2">
          <div className="flex items-center space-x-2">
            <span className="bg-[#e1fcff] text-[#0da2e7] h-8 w-8 flex items-center justify-center rounded-lg">
              {/* <MdOutlineRemoveRedEye className="text-xl" /> */}
            </span>
            <div>
              <p className="text-gray-600">Job Views</p>
              <p className="text-lg font-semibold">N/A</p>
            </div>
          </div>
          <div className="w-full mt-2 bg-gray-300 h-2 rounded overflow-hidden">
            <div className="bg-blue-500 h-2" style={{ width: "70%" }}></div>
          </div>
        </div>

        {/* Engagement Rate */}
        <div className="p-4 rounded-md border-2">
          <div className="flex items-center space-x-2">
            <span className="bg-[#e1fcff] text-[#0da2e7] h-8 w-8 flex items-center justify-center rounded-lg">
              {/* <IoAnalyticsOutline className="text-xl" /> */}
            </span>
            <div>
              <p className="text-gray-600">Engagement Rate</p>
              <p className="text-lg font-semibold">N/A</p>
            </div>
          </div>
          <div className="w-full mt-2 bg-gray-300 h-2 rounded overflow-hidden">
            <div className="bg-blue-500 h-2" style={{ width: "20%" }}></div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-start justify-between gap-4">
        <div className="left-section w-full">
          {/* About the Role */}
          <div className="mb-4 p-4 border-2 rounded-md">
            <h3 className="font-semibold text-lg">About the Role</h3>
            <p className="text-gray-600 whitespace-pre-line">
              {job.description}
            </p>
          </div>

          {/* Requirements */}
          <div className="md:my-4 p-4 border-2 rounded-md">
            <h3 className="font-semibold text-lg">Requirements</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>
                {job.experienceLevel} is the experience level required for the
                job.
              </li>
              {job.workplaceType && (
                <li>{job.workplaceType} will be the workplace type.</li>
              )}
              {job.startDate && (
                <li>Starting date: (job.startDate)</li>
              )}
            </ul>
          </div>
        </div>

        {/* Right section */}
        <div className="right-section md:space-y-4 w-full md:w-[450px]">
          {/* Promote Job Card - hidden on small screens */}
          <div className="hidden md:block">
            <div className="p-4 bg-[#f7e4d7] rounded-md space-y-4">
              <h3 className="flex items-center font-semibold text-lg">
                {/* <HiSpeakerphone className="text-orange-500 mr-2" /> */}
                Promote this Job
              </h3>
              <p className="text-[#a0a2a9]">
                Boost your job post visibility and reach 3x more qualified
                candidates.
              </p>
              <button
                className="mt-2 w-full bg-orange-500 text-[#f7e4d7] px-4 py-2 rounded"
                disabled
              >
                Boost Now
              </button>
            </div>
          </div>

          {/* Key Details */}
          <div className="p-4 rounded-md border-2 text-gray-600 space-y-4">
            <h3 className="font-semibold text-lg">Key Details</h3>
            <div className="flex items-start gap-2">
              {/* <LuBuilding className="text-2xl text-[#aaadb4]" /> */}
              <div>
                <p className="text-[#aaadb4]">Industry</p>
                <strong>{job.industry}</strong>
              </div>
            </div>
            <div className="flex items-start gap-2">
              {/* <CiCalendar className="text-2xl text-[#aaadb4]" /> */}
              <div>
                <p className="text-[#aaadb4]">Job Type</p>
                <strong>{job.jobType}</strong>
              </div>
            </div>
            <div className="flex items-start gap-2">
              {/* <BsCurrencyDollar className="text-2xl text-[#aaadb4]" /> */}
              <div>
                <p className="text-[#aaadb4]">Salary Range</p>
                <strong>
                  {formatSalaryRange(job.salaryRange)} / {job.frequency}
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Job Modal */}
      {/* {openEditJobCard && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-md">
        <div className="w-full h-full">
          <EditJobCard
            editJob={job}
            getPostedJobs={getPostedJobs}
            closeEditJobCard={() => setOpenEditJobCard(false)}
            closeDetailedCard2={closeDetailedCard2}
          />
        </div>
      </div>
    )} */}

      {/* Applicants Modal */}
      {/* {isApplicantsModalOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-md">
        <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-3xl p-6 relative">
          <button
            onClick={() => setIsApplicantsModalOpen(false)}
            className="absolute top-3 right-3 text-gray-600 hover:text-black"
          >
            X
          </button>
          <div className="space-y-4 max-h-[70vh] overflow-y-auto">
            <ApplicantModalLayout
              onClose={() => setIsApplicantsModalOpen(false)}
              jobId={job._id}
            />
          </div>
        </div>
      </div>
    )} */}
    </div>
  );
};

export default Responsive;
