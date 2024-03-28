import React, { useState, useEffect } from 'react';
import styles from '../components/textEditor/TextEditor.module.scss';

const AutosaveStatus = () => {
  const [letterSpacing, setLetterSpacing] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newLetterSpacing = letterSpacing === 0 ? 20 : 0;
      setLetterSpacing(newLetterSpacing);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [letterSpacing]);

  return (
    <div className={styles.status} >
      Autosave<span className={styles.statusDots} style={{ letterSpacing: `${letterSpacing}px` }}>...</span>
    </div>
  );
};

export default AutosaveStatus;