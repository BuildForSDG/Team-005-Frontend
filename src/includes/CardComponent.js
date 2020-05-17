import React from "react";
import { Card, Image } from "react-bootstrap";

export default function CardComponent({ data }) {
  // console.log(data.image)
  return (
    <Card className="card">
      <Card.Img
       variant="top"
       alt="course Image"
      src={data.image}
       height="200px" />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>{data.description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">{data.updated}</small>
      </Card.Footer>
    </Card>
  );
}
