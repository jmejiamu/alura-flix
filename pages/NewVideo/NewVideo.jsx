import { useState } from "react";
import { useDataContext } from "../../src/context/DataContext";
import "./NewVideo.css";
import { useNavigate } from "react-router";

export const NewVideo = () => {
  const categoryColors = {
    "Front End": "#6BD1FF",
    "Back End": "#00C86F",
    "Full Stack": "#ffc107",
    "Data Science": "#17a2b8",
  };

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    image: "",
    video: "",
    description: "",
    color: "",
    id: Date.now(),
  });

  const { dispatch } = useDataContext();

  const [errors, setErrors] = useState({});

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

    // Validate form fields
    const newErrors = {};
    if (!formData.title) newErrors.title = "El título es obligatorio";
    if (!formData.category) newErrors.category = "Seleccione una categoría";
    if (!formData.image) newErrors.image = "El enlace es obligatorio";
    if (!formData.video) newErrors.video = "El enlace es obligatorio";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      dispatch({ type: "ADD_ITEM", payload: formData });
      // Reset the form
      setFormData({
        title: "",
        category: "",
        image: "",
        video: "",
        description: "",
      });
      setErrors({});
      navigate("/");
    }
  };

  const handleReset = () => {
    setFormData({
      title: "",
      category: "",
      image: "",
      video: "",
      description: "",
    });
    setErrors({});
  };

  return (
    <section className="nuevo-video">
      <header className="form-header">
        <h1>NUEVO VIDEO</h1>
        <p>Complete el formulario para crear una nueva tarjeta de video</p>
      </header>
      <form className="form" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Crear Tarjeta</legend>

          <div className="form-group">
            <label htmlFor="title">Título</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Ingrese el título"
            />
            {errors.title && <span className="error">{errors.title}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="category">Categoría</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
            >
              <option value="" disabled>
                Seleccione una categoría
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
            {errors.category && (
              <span className="error">{errors.category}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="image">Imagen</label>
            <input
              type="text"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleInputChange}
              placeholder="Ingrese el enlace de la imagen"
            />
            {errors.image && <span className="error">{errors.image}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="video">Video</label>
            <input
              type="text"
              id="video"
              name="video"
              value={formData.video}
              onChange={handleInputChange}
              placeholder="Ingrese el enlace del video"
            />
            {errors.video && <span className="error">{errors.video}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="description">Descripción</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="¿De qué se trata este video?"
            ></textarea>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn-primary">
              Save
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="btn btn-secondary"
            >
              Clear
            </button>
          </div>
        </fieldset>
      </form>
    </section>
  );
};
