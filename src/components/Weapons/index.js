import "./weapons.css";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import AssaultRifles from "./Assault_Rifles";
import SniperRifles from "./Sniper_Rifles";
import Sub_Machine_Guns from "./Sub_Machine_Guns";
import Machine_Guns from "./Machine_Guns";
import Shotguns from "./Shotguns";
import Pistols from "./Pistols";
import Melee from "./Melee";
import Grenades from "./Grenades";

export default function WeaponsData() {
  return (
    <div className="bg-Ranking">
      <h1 className="what-is fw-bold text-center">WEAPONS</h1>
      <Container className="bg-container-weapons">
        <Tab.Container id="left-tabs-example" defaultActiveKey="AssaultRifles">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link className="link fs-5 fw-bold" eventKey="AssaultRifles">
                    Assault Rifles
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="link fs-5 fw-bold" eventKey="SniperRifles">
                    Sniper Rifles
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="link fs-5 fw-bold" eventKey="Sub_Machine_Guns">
                  Sub Machine Guns
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="link fs-5 fw-bold" eventKey="Machine_Guns">
                  Machine Guns
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="link fs-5 fw-bold" eventKey="Shotguns">
                  Shotguns
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="link fs-5 fw-bold" eventKey="Pistols">
                  Pistols
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="link fs-5 fw-bold" eventKey="Melee">
                  Melee
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="link fs-5 fw-bold" eventKey="Grenades">
                  Grenades
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>

            <Col className="container-img-text-weapon mt-2">
              <Tab.Content>
                <Tab.Pane eventKey="AssaultRifles">
                  <Container>
                    <Row>
                      <Col>
                        <AssaultRifles />
                      </Col>
                    </Row>
                  </Container>
                </Tab.Pane>
                <Tab.Pane eventKey="SniperRifles">
                  <SniperRifles />
                </Tab.Pane>
                <Tab.Pane eventKey="Sub_Machine_Guns">
                  <Sub_Machine_Guns/>
                </Tab.Pane>
                <Tab.Pane eventKey="Machine_Guns">
                  <Machine_Guns/>
                </Tab.Pane>
                <Tab.Pane eventKey="Shotguns">
                  <Shotguns/>
                </Tab.Pane>
                <Tab.Pane eventKey="Pistols">
                  <Pistols/>
                </Tab.Pane>
                <Tab.Pane eventKey="Melee">
                  <Melee/>
                </Tab.Pane>
                <Tab.Pane eventKey="Grenades">
                  <Grenades/>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </div>
  );
}
