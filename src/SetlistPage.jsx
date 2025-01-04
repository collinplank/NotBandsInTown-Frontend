import axios from "axios";
import { useState, useEffect } from "react";
import { SetlistIndex } from "./SetlistIndex";

export function SetlistPage() {
  const [setlists, setSetlists] = useState([]);
  const handleIndex = () => {
    console.log("handleIndex");
    axios.get("/setlists.json").then((response) => {
      console.log(response.data);
      setSetlists(response.data);
    });
  };

  useEffect(handleIndex, []);

  return (
    <main>
      <SetlistIndex setlists={setlists} />
    </main>
  );
}
