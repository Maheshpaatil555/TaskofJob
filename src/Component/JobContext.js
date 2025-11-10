import React, { createContext, useState, useEffect } from "react";

export const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [job, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(job)

  useEffect(() => {
    fetch("https://mocki.io/v1/a42aec7e-5c03-4598-8cc9-b4b934c314f6")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setLoading(false); 
      })
      .catch((error) => {
        console.error("Failed to fetch jobs:", error);
        setLoading(false); 
      });
  }, []); 

 return (
    <JobContext.Provider value={{ job, setJobs , loading }}>
      {children}
    </JobContext.Provider>
  );
};
