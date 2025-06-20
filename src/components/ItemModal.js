import React from 'react';
import { Modal, Button, Carousel } from 'react-bootstrap';

const ItemModal = ({ item, show, onHide }) => {
  if (!item) return null;
  return (
    <Modal show={show} onHide={onHide} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{item.name}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p><strong>Type:</strong> {item.type}</p>
        <p>{item.description}</p>
        <Carousel>
          {[item.coverImage, ...item.images].map((img, idx) => (
            <Carousel.Item key={idx}>
              <img className="d-block w-100" src={img} alt={`slide-${idx}`} />
            </Carousel.Item>
          ))}
        </Carousel>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={() => alert("Thanks! We’ll contact you shortly.")}>
          Enquire
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ItemModal;
