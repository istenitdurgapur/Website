import React, { useEffect, useState } from "react";
import TeamCard from "./TeamCard";


function TeamSection({ title, year }) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("http://127.0.0.1:8000/api/student/")
      .then((res) => res.json())
      .then((data) => {
        function filterByYear(person) {
          if (person.year === year) {
            return true;
          }
          return false;
        }

        let FilteredArray = data.filter(filterByYear);
        FilteredArray.sort((a, b) => {
          return a.order - b.order;
      });
      
        setData(FilteredArray);

        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;
  return (
    <div className="flex-col  justify-center items-center mt-24 mb-10">
      <p className="flex justify-center items-center font-serif  text-gray-600  text-2xl lg:text-3xl underline underline-offset-4 decoration-1 ">
        {title}
      </p>
      <div className="flex flex-wrap   justify-center items-center mt-8 w-full md:p-20">
        {data.map(function (d, i) {
          return (
            <TeamCard d = {d} key={i} />
          );
        })}
      </div>
    </div>
  );
}

export default TeamSection;
