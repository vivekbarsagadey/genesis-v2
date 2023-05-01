import React from 'react';
import {
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Collapse,
} from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { Grid } from '@mui/material';
import MenuItem, { Item } from './menu.item';

type CategoryProps = {
  id: string;
  name: string;
  label: string;
  title: string;
  icon: JSX.Element;
  items: Item[];
  handleClick: (id: string) => void;
  open: { [key: string]: boolean };
  classes: Record<string, string>;
};

function Category(props: CategoryProps) {
	const {
		id, name, icon, items, handleClick, open, classes,
	} = props;

	return (
  <Grid key={id}>
  <ListItem button onClick={() => handleClick(id)}>
  {icon && <ListItemIcon>{icon}</ListItemIcon>}
  <ListItemText primary={name} />
  {items && (open[id] ? <ExpandLess /> : <ExpandMore />)}
			</ListItem>
  {items && (
				<Collapse in={open[id]} timeout="auto" unmountOnExit>
    <List component="div" disablePadding>
  {items.map((item: Item) => (
  <MenuItem
  key={item.id}
  item={item}
  handleClick={handleClick}
  open={open}
  classes={classes}
							/>
						))}
					</List>
  </Collapse>
			)}
		</Grid>
	);
}

export default Category;
