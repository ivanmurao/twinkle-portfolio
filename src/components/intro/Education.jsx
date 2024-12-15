import React from "react";
import { FaBuilding, FaMapMarkerAlt } from "react-icons/fa";

const eduDetails = [
  {
    Position: "Bachelor of Science in Computer Engineering",
    Company: "Technological Institute of the Philippines",
    Location: "Quezon City, Philippines",
    Duration: "2019 - 2023",
  },
];

const Education = () => {
  return (
    <div className="education-container">
      {eduDetails.map((edu, index) => (
        <div key={index} className="edu-card">
          <div className="edu-details">
            <h3>{edu.Position}</h3>
            <p>
              <FaBuilding className="icon" /> {edu.Company} &nbsp;&nbsp;
              <FaMapMarkerAlt className="icon" /> {edu.Location}
            </p>
          </div>
          <div className="edu-meta">
            <p>{edu.Duration}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
