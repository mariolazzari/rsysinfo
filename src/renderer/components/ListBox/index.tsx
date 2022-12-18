import { useState, useEffect, ReactNode, ChangeEventHandler } from "react";
// Mui
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { ListItemIcon, SxProps, Theme } from "@mui/material";
// components
import { SearchBox } from "renderer/components/TextBox";

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
  // State
  const [filter, setFilter] = useState("");
  const [filtered, setFiltered] = useState<ListItemProps[]>(
    [] as ListItemProps[]
  );

  // on filter change event handler
  const onFilterChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setFilter(e.target.value);
  };

  // filter items
  useEffect(() => {
    // reset filter
    if (filter === "") {
      return setFiltered(items);
    }

    // filter items
    const filtered = items.filter((item) =>
      item.title.toLowerCase().includes(filter.toLowerCase())
    );
    setFiltered(filtered);
  }, [items, filter]);

  return (
    <>
      <SearchBox
        value={filter}
        onChange={onFilterChange}
        onClear={() => setFilter("")}
        size="small"
      />

      <List sx={sx} dense disablePadding>
        {filtered.map((item) => (
          <ListItem key={item.title}>
            <ListItemAvatar>{item.icon}</ListItemAvatar>
            <ListItemText primary={item.title} secondary={item.subtitle} />
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListBox;
