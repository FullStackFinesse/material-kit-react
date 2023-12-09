import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

export const SimpleList = ({ items, navigateTo }) => (
  <List>
    {items.map((item, index) => (
      <ListItem key={index} button onClick={() => navigateTo(item.route)}>
        <ListItemText primary={item.name} />
      </ListItem>
    ))}
  </List>
);

export const CollapsibleList = ({ items, navigateTo }) => {
  const [openCollapse, setOpenCollapse] = useState([]);

  const handleCollapseToggle = (index) => {
    const newOpenCollapse = [...openCollapse];
    newOpenCollapse[index] = !newOpenCollapse[index];
    setOpenCollapse(newOpenCollapse);
  };

  return (
    <List>
      {items.map((item, index) => (
        <div key={index}>
          <ListItem button onClick={() => handleCollapseToggle(index)}>
            <ListItemText primary={item.name} />
            {item.collapse && (openCollapse[index] ? <ExpandLess /> : <ExpandMore />)}
          </ListItem>
          {item.collapse && (
            <Collapse in={openCollapse[index]} timeout="auto" unmountOnExit>
              <SimpleList items={item.collapse} navigateTo={navigateTo} />
            </Collapse>
          )}
        </div>
      ))}
    </List>
  );
};

export const DropdownList = ({ items, navigateTo }) => (
  <List>
    {items.map((item, index) => (
      <ListItem key={index} button onClick={() => navigateTo(item.route)}>
        <ListItemText primary={item.name} />
      </ListItem>
    ))}
  </List>
);
