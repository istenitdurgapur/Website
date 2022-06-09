import React, { useEffect, useState } from "react";
import AlumniCard from "./AlumniCard";


function AlumniSection({ year }) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("http://127.0.0.1:8000/api/alumni/")
      .then((res) => res.json())
      .then((data) => {
        function filterByYear(person) {
          if (person.passyear === year && person.name) {
            setLoading(false);
            return true;
          }
          return false;
        }

        let FilteredArray = data.filter(filterByYear);
       
      
        setData(FilteredArray);

        
      });
  }, []);

  if (isLoading) return <p> </p>;
  if (!data) return <p>No profile data</p>;
  return (
    <div className="flex-col  justify-center items-center mt-24 mb-10">
      <p className="flex justify-center items-center  text-gray-600  text-2xl lg:text-3xl underline underline-offset-4 decoration-1 ">
        {year} BATCH
      </p>
      <div className="flex flex-wrap   justify-center items-center mt-8 w-full md:p-20">
        {data.map(function (d, i) {
          return (
            <AlumniCard d = {d} key={i} />
          );
        })}
      </div>
    </div>
  );
}

export default AlumniSection;
