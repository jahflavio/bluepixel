import React from 'react';
import PillarLandingTemplate from './PillarLandingTemplate';
import { pillarsData } from '../../../data/pillarsData';

const ConsultoriaPilarPage = ({ onNavigateCluster }) => {
  return (
    <PillarLandingTemplate 
      data={pillarsData['consultoria-digital']} 
      onNavigateCluster={onNavigateCluster} 
    />
  );
};

export default ConsultoriaPilarPage;
