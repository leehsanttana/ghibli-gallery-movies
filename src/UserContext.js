import React from 'react';

export const UserContext = React.createContext();

export const GlobalContext = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    async function getData() {
      setLoading(true);
      const response = await fetch('https://ghibliapi.herokuapp.com/films/');
      const json = await response.json();
      setData(json);
      setLoading(null);
    }
    getData();
  }, []);

  console.log(data);

  const values = {
    data,
    setData,
    loading,
    setLoading,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};
