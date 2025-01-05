import React, { ReactNode } from 'react';

const ServiceContainer = ({children, className}: {children:ReactNode, className: string}) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

export default ServiceContainer;