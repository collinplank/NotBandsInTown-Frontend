import { useEffect, useState } from "react";
import axios from "axios";
import { ConcertsIndex } from "./ConcertsIndex";

export function ConcertsPage() {
  const [concerts, setConcerts] = useState([]);

  useEffect(() => {
    axios.get("/concerts.json").then((response) => {
      setConcerts(response.data);
    });
  }, []);

  return <ConcertsIndex concerts={concerts} />;
}
