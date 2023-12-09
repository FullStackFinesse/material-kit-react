import React from "react";

// Función recursiva para renderizar elementos colapsables
const renderCollapse = (collapse) => {
  return (
    <ul>
      {collapse.map((item, index) => (
        <li key={index}>
          {item.route ? <a href={item.route}>{item.name}</a> : <div>{item.name}</div>}
          {item.collapse && renderCollapse(item.collapse)}
        </li>
      ))}
    </ul>
  );
};

// Hook personalizado para renderizar la estructura de navegación
const useNavigationRenderer = (navigationData) => {
  const renderNavigation = () => {
    return (
      <div>
        {navigationData.map((item, index) => (
          <div key={index}>
            <div>{item.name}</div>
            {item.icon && <div>{item.icon}</div>}
            {item.collapse && renderCollapse(item.collapse)}
          </div>
        ))}
      </div>
    );
  };

  return { renderNavigation };
};

export default useNavigationRenderer;
