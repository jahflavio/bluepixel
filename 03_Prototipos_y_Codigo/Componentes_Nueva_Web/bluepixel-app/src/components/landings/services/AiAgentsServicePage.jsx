import React from 'react';
import ServiceLandingTemplate from './ServiceLandingTemplate';
import { servicesData } from '../../../data/servicesData';

const AiAgentsServicePage = () => {
  return <ServiceLandingTemplate data={servicesData['ai-agents']} />;
};

export default AiAgentsServicePage;
