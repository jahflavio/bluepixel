import React from 'react';
import PillarLandingTemplate from './PillarLandingTemplate';
import { pillarsData } from '../../../data/pillarsData';

const EvolucionPilarPage = ({ onNavigateCluster }) => {
  return (
    <PillarLandingTemplate 
      data={pillarsData['evolucion-digital']} 
      onNavigateCluster={onNavigateCluster} 
    />
  );
};

export default EvolucionPilarPage;
