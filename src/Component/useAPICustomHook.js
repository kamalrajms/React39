import { useState, useEffect, cache } from "react";
import axios from "axios";
function useAPICustomHook(url) {
  const [data, setData] = useState([]);
  const [error, seterror] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAPi = async () => {
      try {
        const resopnse = await axios.get(url);
        setData(resopnse.data);
      } catch (error) {
        seterror(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchAPi();
  }, []);
  return { data, error, loading };
}
export default useAPICustomHook;
