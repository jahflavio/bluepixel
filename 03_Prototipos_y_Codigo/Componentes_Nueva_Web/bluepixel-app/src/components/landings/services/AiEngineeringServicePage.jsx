import React from 'react';
import ServiceLandingTemplate from './ServiceLandingTemplate';
import { servicesData } from '../../../data/servicesData';

const AiEngineeringServicePage = () => {
  return <ServiceLandingTemplate data={servicesData['ai-engineering']} />;
};

export default AiEngineeringServicePage;
