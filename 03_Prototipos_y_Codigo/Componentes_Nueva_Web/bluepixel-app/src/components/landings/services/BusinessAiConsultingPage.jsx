import React from 'react';
import ServiceLandingTemplate from './ServiceLandingTemplate';
import { servicesData } from '../../../data/servicesData';

const BusinessAiConsultingPage = () => {
  return <ServiceLandingTemplate data={servicesData['business-ai']} />;
};

export default BusinessAiConsultingPage;
