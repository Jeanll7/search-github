import { Card } from "react-bootstrap";
import "./App.css";

function CardUsuario(props) {
  return (
    <Card className="card-img">
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Id: {props.usuario.id}
        </Card.Subtitle>
        <img
          className="img"
          href={props.usuario.avatar_url}
          alt="Usuário"
        ></img>
      </Card.Body>
    </Card>
  );
}

export default CardUsuario;
