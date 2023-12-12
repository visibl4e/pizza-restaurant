import React, { useEffect, useState } from "react";

export const ArchivePage = () => {
  const [filteredArchives, setFiletedArchives] = useState(null);
  useEffect(() => {
    const fetchData = () => {
      fetch("http://localhost:3000/blogs")
        .then((res) => res.json())
        .then((data) => {
          setFiletedArchives(data);
        });
    };
    fetchData();
  }, []);

  const SwitchFilter = (filteredArchives) => {
    switch (filteredArchives) {
      case "2019": {
        if (filteredArchives.filter((item) => item.archive === 2019))
          return <h1>case 1</h1>;
        break;
      }
      case "2020": {
        if (filteredArchives.filter((item) => item.archive === 2020))
          return <h1>case 2</h1>;
        break;
      }
    }
  };
  SwitchFilter();

  return (
    <>
      <button onClick={() => SwitchFilter(filteredArchives)}>dsadadsad</button>
    </>
  );
};
