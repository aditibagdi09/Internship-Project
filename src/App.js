import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Form from "./components/Form";
import { Row, Col } from "react-bootstrap";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Row>
        <Col sm="5">
          <About />
        </Col>
        <Col col="5">
          <Form />
        </Col>
      </Row>
      <Footer />
    </div>
  );
}

export default App;
