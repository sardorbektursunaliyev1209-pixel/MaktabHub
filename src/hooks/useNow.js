import { useState, useEffect } from "react";

 const useNow = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setNow(new Date());
    }, 60000);

    return () => clearInterval(id);
  }, []);

  return now;
};

export default useNow;