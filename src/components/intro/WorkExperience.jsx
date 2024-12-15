import React from "react";
import { FaBuilding, FaMapMarkerAlt } from "react-icons/fa";

const workDetails = [
  {
    Position: "Desktop Support Staff",
    Company: "Phil-Data Business Systems, Inc.",
    Location: " Quezon City, Metro Manila",
    Type: "Full Time",
    Duration: "August 2024 - August 2025",
  },
  {
    Position: "Technical Support Engineer",
    Company: "Equitable Computer Services, Inc.",
    Location: "Binondo, Manila",
    Type: "Internship",
    Duration: "Sep 2021 - Dec 2021",
  },
];

const WorkExperience = () => {
  return (
    <div className="work-experience-container">
      {workDetails.map((work, index) => (
        <div key={index} className="work-card">
          <div className="work-details">
            <h3>{work.Position}</h3>
            <p>
              <FaBuilding className="icon" /> {work.Company} &nbsp;&nbsp;
              <FaMapMarkerAlt className="icon" /> {work.Location}
            </p>
          </div>
          <div className="work-meta">
            <span className={`work-type ${work.Type === 'Full Time' ? 'full-time' : 'internship'}`}>
              {work.Type}
            </span>
            <p>{work.Duration}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;
