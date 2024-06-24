/* eslint-disable react/prop-types */
import MenuItem from "./MenuItem";

function MenuList({ listmenu }) {
  //   console.log(listmenu);
  return (
    <>
      {listmenu.map((item) => (
        <MenuItem key={item.itemName} item={item} />
      ))}
    </>
  );
}

export default MenuList;
