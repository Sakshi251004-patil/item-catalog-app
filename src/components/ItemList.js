import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ItemModal from "./ItemModal";
import "bootstrap/dist/css/bootstrap.min.css";

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("items")) || [];
    setItems(stored);
  }, []);

  const openModal = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  // ✅ Delete item by ID
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      const updatedItems = items.filter(item => item.id !== id);
      localStorage.setItem("items", JSON.stringify(updatedItems));
      setItems(updatedItems);
    }
  };

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>View Items</h2>
        <Link to="/add" className="btn btn-success">+ Add Item</Link>
      </div>

      <div className="row g-3">
        {items.length === 0 && <p>No items yet. Click “Add Item”.</p>}

        {items.map((item) => (
          <div
            className="col-6 col-md-4 col-lg-3"
            key={item.id}
            style={{ position: "relative" }}
          >
            <div className="card h-100">
              <img
                src={item.coverImage}
                className="card-img-top"
                alt={item.name}
                style={{ objectFit: "cover", height: "150px", cursor: "pointer" }}
                onClick={() => openModal(item)}
              />
              <div
                className="card-body p-2 text-center"
                onClick={() => openModal(item)}
                style={{ cursor: "pointer" }}
              >
                <h6 className="card-title mb-0">{item.name}</h6>
              </div>

              {/* ❌ Delete button */}
              <button
                className="btn btn-sm btn-danger"
                style={{ position: "absolute", top: "10px", right: "10px", zIndex: 10 }}
                onClick={() => handleDelete(item.id)}
              >
                &times;
              </button>
            </div>
          </div>
        ))}
      </div>

      <ItemModal item={selectedItem} show={showModal} onHide={closeModal} />
    </div>
  );
};

export default ItemList;
