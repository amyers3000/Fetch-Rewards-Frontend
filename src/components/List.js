import { Select, MenuItem } from "@mui/material"

const List = ({
  list,
  listId,
  handleChange,
  value,
  format = (item) => item,
  secondFormat = (item) => item
}) => {
  return (
    <Select
      id={listId}
      labelId={listId}
      label={listId}
      fullWidth
      value={value}
      onChange={(e) =>handleChange(e)}
      required>
      {!!list && list.map((item) => (
        <MenuItem value={format(item)} key={format(item)}>
          {secondFormat(item)}
        </MenuItem>
      ))}
    </Select>
  );
};

export default List;