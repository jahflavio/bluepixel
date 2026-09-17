import React from 'react';
import ServiceLandingTemplate from './ServiceLandingTemplate';
import { servicesData } from '../../../data/servicesData';

const SecurityReliabilityServicePage = () => {
  return <ServiceLandingTemplate data={servicesData['security']} />;
};

export default SecurityReliabilityServicePage;
