import React, { useContext, useEffect, useState } from 'react';

import ModelViewer from '../../../ModelViewer';

const BrandMainSection = ({ model }) => {
  return (
    <div>
      <h1>Main</h1>
      <ModelViewer model={model} />
    </div>
  );
};

export default BrandMainSection;
