import { useState } from "react";
import { useDataContext } from "../../context/DataContext";
import "./EditModal.css";

const EditModal = () => {
  const { dispatch, closeModal, selectedItem: item } = useDataContext();

  const categoryColors = {
    "Front End": "#6BD1FF",
    "Back End": "#00C86F",
    "Full Stack": "#ffc107",
    "Data Science": "#17a2b8",
  };

  const [formData, setFormData] = useState({
    title: item.title,
    category: item.category,
    description: item.description,
    image: item.image,
    video: item.video,
    color: categoryColors[item.category],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "category") {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
        color: categoryColors[value] || prev.color,
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "EDIT_ITEM", payload: { id: item.id, ...formData } });
    closeModal();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={() => closeModal()}>
          &times;
        </button>
        <h2>EDIT CARD:</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              required
              style={{
                backgroundColor: categoryColors[formData.category] || "#1a1a1a",
                color: "#fff",
              }}
            >
              <option value="" disabled>
                Select a category
              </option>
              {Object.keys(categoryColors).map((category) => (
                <option
                  key={category}
                  value={category}
                  style={{
                    backgroundColor: categoryColors[category],
                    color: "#fff",
                  }}
                >
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="image">Image URL</label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="video">Video URL</label>
            <input
              type="text"
              name="video"
              value={formData.video}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className="modal-submit">
            UPDATE
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
