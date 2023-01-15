import { Card } from "react-bootstrap";
import "./App.css";

function CardRepo(props) {
  return (
    <Card style={{ width: "18rem", background: "#125", color: "#FFF" }}>
      <Card.Body>
        <Card.Title>{props.repo.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {props.repo.owner.login}
        </Card.Subtitle>
        <Card.Text>{props.repo.description}</Card.Text>
        <Card.Link href={props.repo.html_url}>Link do repositório</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default CardRepo;
