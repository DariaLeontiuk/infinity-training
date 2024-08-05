import React, { useState, useEffect } from 'react';

const LoadingSpinner = () => (
  <div className="spinner">
    <svg viewBox="0 0 50 50">
      <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5" />
    </svg>
  </div>
);

const withDataLoader = (WrappedComponent, fetchData) => {
  return (props) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetchData().then((result) => {
        setData(result);
        setLoading(false);
      });
    }, []);

    if (loading) {
      return <LoadingSpinner />;
    }

    return <WrappedComponent data={data} {...props} />;
  };
};

const fetchData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return data;
};

const DataDisplayComponent = ({ data }) => {
  return (
    <div>
      <h1>Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

const DataDisplayWithLoader = withDataLoader(DataDisplayComponent, fetchData);

export default DataDisplayWithLoader;