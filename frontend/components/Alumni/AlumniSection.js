import React, { useEffect, useState } from "react";
import Tiltle from "../Title";
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
  }, [year]);

  if (isLoading) return <p> </p>;
  if (!data) return <p>No profile data</p>;
  return (
    <div className="flex-col  justify-center items-center ">
      <Tiltle title={`${year} BATCH`} font="30" margin="45" />
      <div className="flex flex-wrap justify-center items-center w-full ">
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
