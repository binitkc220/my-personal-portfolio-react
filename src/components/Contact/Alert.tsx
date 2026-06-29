import React from 'react';
import './Contact.css';

interface AlertData {
  msg: string;
  type: string;
}

interface AlertProps {
  alert: AlertData | null;
}

export default function Alert({ alert }: AlertProps) {
  if (!alert) return null;
  return (
    <div
      className={`alert alert-${alert.type} alert-dismissible fade show alert-mssg m-3 p-3`}
      role="alert"
    >
      {alert.msg}
    </div>
  );
}
