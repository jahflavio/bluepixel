import React from 'react';
import ServiceLandingTemplate from './ServiceLandingTemplate';
import { servicesData } from '../../../data/servicesData';

const DataAnalyticsServicePage = () => {
  return <ServiceLandingTemplate data={servicesData['data-analytics']} />;
};

export default DataAnalyticsServicePage;
