import React, { useEffect, useState } from 'react';
import DelegateCard from '../components/DelegateCard';
import fetchDelegates from '../utils/fetchDelegates';

const Home: React.FC = () => {
  const [delegates, setDelegates] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const delegatesPerPage = 9; // 3 rows of 3 cards

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchDelegates();
      setDelegates(result);
    };

    fetchData();
  }, []);

  const indexOfLastDelegate = currentPage * delegatesPerPage;
  const indexOfFirstDelegate = indexOfLastDelegate - delegatesPerPage;
  const currentDelegates = delegates.slice(indexOfFirstDelegate, indexOfLastDelegate);

  const renderDelegateCards = () => {
    return currentDelegates.map((delegate, index) => (
      <DelegateCard key={index} delegate={delegate} />
    ));
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(delegates.length / delegatesPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map(number => {
    return (
      <li
        key={number}
        id={number.toString()}
        onClick={() => setCurrentPage(number)}
      >
        {number}
      </li>
    );
  });

  return (
    <div id="delegate-list">
      {renderDelegateCards()}
      <ul id="page-numbers">
        {renderPageNumbers}
      </ul>
    </div>
  );
};

export default Home;