import React from 'react';
import ServiceLandingTemplate from './ServiceLandingTemplate';
import { servicesData } from '../../../data/servicesData';

const UxUiServicePage = () => {
  return <ServiceLandingTemplate data={servicesData['ux-ui']} />;
};

export default UxUiServicePage;
