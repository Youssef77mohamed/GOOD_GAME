import React, { useEffect, useState } from "react";
import "./mode.css";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchModes } from "../../rtk/slices/modesSlice ";

export default function Modes() {
  const [mode, setMode] = useState(null);
  const dispatch = useDispatch();
  const modes = useSelector((state) => state.mode);

  useEffect(() => {
    dispatch(fetchModes());
  }, []);

  return (
    <div className="bg-Ranking">
      <h1 className="text-center what-is py-5  fw-bold">MODES</h1>

      <Container className="mode-container">
        <h2 className="fw-bold">TEAM DEATHMATCH</h2>
        <p>
          It's an old-school showdown between two sides; Black List versus
          Global Risk. The goal of this game mode is simple; your team must rack
          up more kills than the opposing team.
        </p>
        <p className="p-win-conditions">
          <span className="fw-bold">Win Conditions :</span>
          <br></br>
          First team to the kill limit or with the most kills at the end of the
          time limit wins.
        </p>
        <Row>
          {modes.map((mode, key) => {
            return (
              <Col className="img-mode" key={key} onClick={() => setMode(mode)}>
                <div className="text-center">
                <img src={mode.img_mode} alt={mode.city} />
                </div>
                <h6 className="text-center">{mode.City}</h6>
              </Col>
            );
          })}
        </Row>
        <div className="popup-mode" style={{display:mode ? 'block':'none'}}>
          <span onClick={()=> setMode(null)}>&times;</span>
          {mode !== null ? <img src={mode?.img_mode} /> : ""}
        </div>
      </Container>
    </div>
  );
}
