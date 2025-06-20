import React, { useState } from 'react';

function ItemForm() {
  const [itemName, setItemName] = useState('');
  const [itemType, setItemType] = useState('');
  const [description, setDescription] = useState('');
  const [coverImage, setCoverImage] = useState(null);
  const [additionalImages, setAdditionalImages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: Date.now(),
      name: itemName,
      type: itemType,
      description: description,
      coverImage: URL.createObjectURL(coverImage),
      images: Array.from(additionalImages).map(img => URL.createObjectURL(img))
    };

    // Get existing items from localStorage
    const existingItems = JSON.parse(localStorage.getItem("items")) || [];

    // Add new item
    existingItems.push(newItem);

    // Save back to localStorage
    localStorage.setItem("items", JSON.stringify(existingItems));

    // Show success message
    alert("Item successfully added");

    // Clear form
    setItemName('');
    setItemType('');
    setDescription('');
    setCoverImage(null);
    setAdditionalImages([]);
    e.target.reset(); // Reset file inputs
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto" }}>
      <h2>Add New Item</h2>
      <form onSubmit={handleSubmit}>
        
        <label>Item Name:</label><br />
        <input type="text" value={itemName} onChange={e => setItemName(e.target.value)} required /><br /><br />

                <select
        className="form-select"
        value={itemType}
        onChange={(e) => setItemType(e.target.value)}
        required
        >
        <option value="">Select Type</option>
        <option value="Shirt">Shirt</option>
        <option value="Pant">Pant</option>
        <option value="Shoes">Shoes</option>
        <option value="Sports Gear">Sports Gear</option>
        </select><br />

        <label>Item Description:</label><br />
        <textarea value={description} onChange={e => setDescription(e.target.value)} required></textarea><br /><br />

        <label>Cover Image:</label><br />
        <input type="file" accept="image/*" onChange={e => setCoverImage(e.target.files[0])} required /><br /><br />

        <label>Additional Images:</label><br />
        <input type="file" accept="image/*" multiple onChange={e => setAdditionalImages(e.target.files)} /><br /><br />

        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default ItemForm;
