import React from 'react';
import { Delegate } from '../types/Delegate';
import styles from '../styles/DelegateCard.module.css';

interface DelegateCardProps {
  delegate: Delegate;
}

const DelegateCard: React.FC<DelegateCardProps> = ({ delegate }) => {
  return (
    <div className={styles.delegateCard}>
      <img src={`/images/${delegate.image}`} alt={delegate.name} className={styles.delegateImage} />
      <h2 className={styles.delegateName}>{delegate.name || delegate.walletAddress}</h2>
      <p className={styles.delegateStatement}>{delegate.statement}</p>
      <p className={styles.delegateVotingPower}>Voting Power: {delegate.votingPower}</p>
      <button className={styles.delegateButton}>Delegate</button>
    </div>
  );
};

export default DelegateCard;