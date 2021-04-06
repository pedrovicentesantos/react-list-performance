import { useEffect, useState } from 'react';

import fetchData from './fetchData';

const useAsync = (initialState) => {
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      fetchData(setState);
      // Tempo para mostrar tela de carregamento
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    } catch (err) {
      setState([]);
      setLoading(false);
    }
  }, []);

  return [state, setState, loading];
};

export default useAsync;
