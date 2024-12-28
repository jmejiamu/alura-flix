import { useDataContext } from "../../context/DataContext";
import Card from "../Card/Card";
import EditModal from "../EditModal/EditModal";
import "./SectionList.css";

export const SectionList = () => {
  const { state, selectedItem } = useDataContext();

  const groupedItems = state.items.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});
  return (
    <div className="section-list">
      {Object.keys(groupedItems).map((category) => (
        <div key={category} className="section-category">
          <h2 className="category-title">{category}</h2>
          <div className="category-row">
            {groupedItems[category].map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </div>
      ))}
      {selectedItem && <EditModal />}
    </div>
  );
};
