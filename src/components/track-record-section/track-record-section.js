import React from 'react';
import PropTypes from 'prop-types';

import styles from './track-record-section.module.scss';

const TrackRecordSection = (
    {
      icon,
      title,
      paragraph,
      previousClientText,
      previousClientLink,
      valueDelivered,
    },
) => {
  return (
    <div className={styles.container}>
      <span>{icon}</span>
      <h2>{title}</h2>
      <p>{paragraph}</p>
      <span>Previous client: {previousClientText}; {previousClientLink}</span>
      <span>Value delivered: {valueDelivered}</span>
    </div>
  );
};

export default TrackRecordSection;

TrackRecordSection.propTypes = {
  icon: PropTypes.String,
  title: PropTypes.String,
  paragraph: PropTypes.String,
  previousClientText: PropTypes.String,
  previousClientLink: PropTypes.String,
  valueDelivered: PropTypes.String,
};
