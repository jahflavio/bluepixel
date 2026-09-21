import React from 'react';
import PillarLandingTemplate from './PillarLandingTemplate';
import { pillarsData } from '../../../data/pillarsData';

const AutomatizacionPilarPage = ({ onNavigateCluster }) => {
  return (
    <PillarLandingTemplate 
      data={pillarsData['agentes-automatizacion']} 
      onNavigateCluster={onNavigateCluster} 
    />
  );
};

export default AutomatizacionPilarPage;
