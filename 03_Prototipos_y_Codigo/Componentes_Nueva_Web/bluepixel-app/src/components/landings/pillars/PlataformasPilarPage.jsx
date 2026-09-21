import React from 'react';
import PillarLandingTemplate from './PillarLandingTemplate';
import { pillarsData } from '../../../data/pillarsData';

const PlataformasPilarPage = ({ onNavigateCluster }) => {
  return (
    <PillarLandingTemplate 
      data={pillarsData['plataformas-digitales']} 
      onNavigateCluster={onNavigateCluster} 
    />
  );
};

export default PlataformasPilarPage;
