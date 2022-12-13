import { ReactNode } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { SxProps, Theme } from '@mui/material';

type ListItemProps = {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
};

type ListBoxProps = {
  items: ListItemProps[];
  sx: SxProps<Theme>;
};

function ListBox({ items, sx }: ListBoxProps) {
  return (
    <List sx={sx}>
      {items.map((item) => (
        <ListItem key={item.title}>
          <ListItemAvatar>
            <Avatar>{item.icon}</Avatar>
          </ListItemAvatar>
          <ListItemText primary={item.title} secondary={item.subtitle} />
        </ListItem>
      ))}
    </List>
  );
}

export default ListBox;
