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

export type Item = {
  id: string;
  name: string;
  label: string;
  title: string;
  icon: JSX.Element;
  componentId: string;
  items?: Item[];
};

type MenuItemProps = {
  item: Item;
  handleClick: (id: string) => void;
  open: { [key: string]: boolean };
  classes: Record<string, string>;
};

function MenuItem(props: MenuItemProps) {
	const {
		id, name, icon, componentId, items,
	} = props.item;
	const { handleClick, open, classes } = props;

	const handleClickItem = (id: string) => {
		handleClick(id);
	};

	return (
  <Grid key={id}>
  <ListItem
  button
  className={classes.nested}
  onClick={() => handleClickItem(componentId)}
			>
  {icon && <ListItemIcon>{icon}</ListItemIcon>}
  <ListItemText primary={name} />
  {items && (open[id] ? <ExpandLess /> : <ExpandMore />)}
			</ListItem>
  {items && (
				<Collapse in={open[id]} timeout="auto" unmountOnExit>
    <List component="p" disablePadding>
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

export default MenuItem;
