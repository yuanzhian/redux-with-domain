import React, { FC } from 'react';
import './index.css';

interface Props {}

const FieldIcon: FC<Props> = () => {
  return (
    <span className="icon-field">
      <svg viewBox="64 64 896 896" width="14px" height="14px">
        <path d="M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494z"></path>
      </svg>
    </span>
  );
};

export default FieldIcon;
