import React, { useEffect, useState } from "react";
import Tiltle from "../Title";
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
    <div className="flex-col  justify-center items-center">
      <Tiltle title={title} font="30" margin="45" />
      <div className="flex flex-wrap justify-center items-center w-full ">
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
