import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './DealsTable.module.css';
import { format, isToday, isTomorrow } from 'date-fns';
import {fetchDealById, fetchDeals} from "../redux/deals-reducer";
import {AppDispatch, RootState} from "../utils/types";

export const DealsTable = () => {
  const dispatch: AppDispatch = useDispatch();
  const { deals, selectedDeal, loading, error } = useSelector((state: RootState) => state.deals);
  const [expandedDealId, setExpandedDealId] = useState<number | null>(null);

  useEffect(() => {
    dispatch(fetchDeals());
  }, [dispatch]);

  const handleClick = (id: number) => {
    if (expandedDealId === id) {
      setExpandedDealId(null);
      return;
    }

    setExpandedDealId(id);
    dispatch(fetchDealById(id));
  };

  const renderStatus = (dueDate: string | null) => {
    if (!dueDate) return null;

    const today = new Date();
    const due = new Date(dueDate);
    let color = 'grey'; // Default color

    if (isToday(due)) color = 'green';
    else if (isTomorrow(due)) color = 'yellow';
    else if (due < today) color = 'red';

    return (
      <svg width="20" height="20">
        <circle cx="10" cy="10" r="8" fill={color} />
      </svg>
    );
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <table className={styles.dealsTable}>
        <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Budget</th>
        </tr>
        </thead>
        <tbody>
        {deals.map((deal) => (
          <React.Fragment key={deal.id}>
            <tr className={styles.dealRow} onClick={() => handleClick(deal.id)}>
              <td>{deal.id}</td>
              <td>{deal.name}</td>
              <td>{deal.budget}</td>
            </tr>
            {expandedDealId === deal.id && (
              <tr>
                <td colSpan={3} className={styles.expandedRow}>
                  {loading && <p>Loading details...</p>}
                  {selectedDeal && selectedDeal.id === deal.id && (
                    <>
                      <p>Name: {selectedDeal.name}</p>
                      <p>ID: {selectedDeal.id}</p>
                      <p>Date: {format(new Date(selectedDeal.taskDate || ''), 'dd.MM.yyyy')}</p>
                      <div>{renderStatus(selectedDeal.taskDate)}</div>
                    </>
                  )}
                </td>
              </tr>
            )}
          </React.Fragment>
        ))}
        </tbody>
      </table>
    </div>
  );
};
