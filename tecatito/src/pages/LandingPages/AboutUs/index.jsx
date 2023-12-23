import React from 'react';
import Tooltip from '../../../components/Tooltip';
import CustomTooltip from '../../../components/Tooltip';

const AboutUs = () => {
  const solutionsData = [
    {
      name: 'Insights',
      description: 'Measure actions your users take',
      href: '##',
    },
    {
      name: 'Automations',
      description: 'Create your own targeted content',
      href: '##',
    },
    {
      name: 'Reports',
      description: 'Keep track of your growth',
      href: '##',
    },
  ];
  return (
    <div>
      <CustomTooltip />
    </div>
  );
};

export default AboutUs;
