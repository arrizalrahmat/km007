import './App.css';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

const ButtonContainer = styled.div`
  background-color: #40407a;
  padding: 12px;
  border-radius: 7px;
  width: 150px;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

function App() {
  return (
    <div className="App">
      <h1
        style={{
          color: '#f7f1e3',
          backgroundColor: '#40407a',
          padding: 12,
          borderRadius: 7,
          width: 150,
          textAlign: 'center',
        }}
      >
        Hello world
      </h1>
      <div style={styles.container}>
        <p style={styles.text}>Halo hacktiv8</p>
      </div>
      <ButtonContainer>
        <Title>button 1</Title>
      </ButtonContainer>
      <Title>Hello</Title>

      <Card style={{ width: '18rem' }}>
        <Card.Img
          variant="top"
          src="https://static.independent.co.uk/2021/09/22/12/newFile.jpg"
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card
            title and make up the bulk of the card's
            content.
          </Card.Text>
          <Button variant="success">Success</Button>{' '}
        </Card.Body>
      </Card>

      <Card>
        <Card.Header>
          <Nav variant="pills" defaultActiveKey="#first">
            <Nav.Item>
              <Nav.Link href="#first">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#item3">Item3</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#item4" disabled>
                Item4
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#disabled" disabled>
                Disabled
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in
            to additional content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      {/* <div class="card" style={{ width: '18rem' }}>
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card
            title and make up the bulk of the card's
            content.
          </p>
          <a href="www.google.com" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div> */}
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: 'orange',
    padding: 16,
  },
  text: {
    color: 'white',
  },
};

export default App;
