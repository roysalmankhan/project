import React, { useState } from 'react';

const Career = () => {
  const [search, setSearch] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [selectedType, setSelectedType] = useState('All');

  const jobs = [
    {
      title: "Frontend Developer",
      location: "Remote",
      jobType: "Full-Time",
      description: "We are looking for a skilled frontend developer with experience in React.js and Tailwind CSS.",
      posted: "2 days ago",
    },
    {
      title: "Backend Developer",
      location: "San Francisco, CA",
      jobType: "Full-Time",
      description: "Join our backend team! We need someone with experience in Node.js and REST APIs.",
      posted: "1 week ago",
    },
    {
      title: "UX/UI Designer",
      location: "New York, NY",
      jobType: "Part-Time",
      description: "Seeking a creative UX/UI designer to enhance our product's user experience.",
      posted: "3 weeks ago",
    },
    {
      title: "Product Manager",
      location: "Los Angeles, CA",
      jobType: "Contract",
      description: "Looking for an experienced product manager to lead our development team.",
      posted: "5 days ago",
    },
  ];

  // Filter jobs based on search and selected filters
  const filteredJobs = jobs.filter(job => {
    return (
      job.title.toLowerCase().includes(search.toLowerCase()) &&
      (selectedLocation === 'All' || job.location === selectedLocation) &&
      (selectedType === 'All' || job.jobType === selectedType)
    );
  });

  return (
    <div className=" bg-slate-400 max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1></h1>
      <h2 className="text-3xl font-extrabold text-gray-900">Current Job Openings</h2>

      {/* Filter Section */}
      <div className="mt-8 flex items-center gap-4">
        <input
          type="text"
          placeholder="Search by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-80 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
          className="border border-gray-300 rounded-md p-2"
        >
          <option value="All">All Locations</option>
          <option value="Remote">Remote</option>
          <option value="San Francisco, CA">San Francisco, CA</option>
          <option value="New York, NY">New York, NY</option>
          <option value="Los Angeles, CA">Los Angeles, CA</option>
        </select>

        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="border border-gray-300 rounded-md p-2"
        >
          <option value="All">All Job Types</option>
          <option value="Full-Time">Full-Time</option>
          <option value="Part-Time">Part-Time</option>
          <option value="Contract">Contract</option>
        </select>
      </div>

      {/* Job Listings */}
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredJobs.length === 0 ? (
          <p className="col-span-full text-center text-gray-500">No job listings match your criteria.</p>
        ) : (
          filteredJobs.map((job, index) => (
            <div key={index} className="bg-slate-300 rounded-lg shadow-lg overflow-hidden border border-gray-200">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                <p className="mt-2 text-gray-600">{job.description}</p>
                <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                  <span>{job.location}</span>
                  <span>{job.posted}</span>
                </div>
                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                  Apply Now
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Career;
