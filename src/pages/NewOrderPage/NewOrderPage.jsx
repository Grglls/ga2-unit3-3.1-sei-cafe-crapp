import { useState, useEffect, useRef } from "react";
import * as itemsAPI from "../../utilities/items-api";

export default function NewOrderPage() {
  const [ menuItems, setMenuItems ] = useState([]);
  const categoriesRef = useRef([]);

  // Empty dependency array causes the effect to run only after the first render:
  useEffect(function() {
    async function getItems() {
      const items = await itemsAPI.getAll();
      // Get the categories, remove duplicates by converting to a set, then save as an array:
      categoriesRef.current = [...new Set(items.map(item => item.category.name))];
      setMenuItems(items);
    }
    getItems();
  }, []);

  return (
    <h1>NewOrderPage</h1>
  );
}