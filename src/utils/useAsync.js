import { useEffect, useState } from 'react';

import fetchData from './fetchData';

const useAsync = (initialState) => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    try {
      fetchData(setState);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return [state, setState];
};

export default useAsync;
