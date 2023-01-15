import "./App.css";
import { Form, InputGroup, Button, Row, Col } from "react-bootstrap";
import api from "../services/api";
import { useEffect, useState } from "react";
import CardUsuario from "./CardUsuario";
import CardRepo from "./CardRepo";

function App() {
  const [repos, setRepos] = useState([]);
  const [usuarioPesquisa, setUsuarioPesquisa] = useState("");
  const [usuario, setUsuario] = useState("");

  function pesquisar() {
    api.get(`/users/${usuarioPesquisa}/repos`).then((response) => {
      setRepos(response.data);
    });
  }

  useEffect(() => {
    api.get(`/users/${usuarioPesquisa}`).then((response) => {
      setUsuario(response.data);
    });
  }, [repos, usuarioPesquisa]);

  return (
    <div className="container">
      <h1 className="mt-2 mb-3">Explore repositórios no github</h1>
      <div className="flex">
        <div className="form mb-4 w-50">
          <InputGroup>
            <Form.Control
              placeholder="Digite o nome do usuário"
              aria-label="Username"
              value={usuarioPesquisa}
              onChange={(e) => {
                setUsuarioPesquisa(e.target.value);
              }}
            />
          </InputGroup>
        </div>
        <Button className="button" onClick={pesquisar} variant="primary">
          Pesquisar
        </Button>
      </div>

      {usuario && <CardUsuario usuario={usuario} />}

      <Row className="justify-content-md-center">
        {repos.map((repo) => {
          return (
            <Col md="auto">
              <CardRepo repo={repo} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default App;
