import React, { useEffect, useState } from "react";
import "./Ranking.css";
import { Container, Table } from "react-bootstrap";
import axios from "axios";

export default function RankingsData() {
    const [ranking, setRanking] = useState([]);
    
    const [filterRank, setFilterRank] = useState([]);

    const getRankings = async () => {
        const res = await axios.get("http://localhost:9000/Rankings");
        setRanking(res.data);
    
    };

    useEffect(() => {
        getRankings();
    }, []);
    return (
        <div className="bg-Ranking">
        <Container>
            <h1 className="text-center what-is py-5  fw-bold">RANKINGS</h1>
            <div className="d-flex justify-content-between align-items-center d-res">
            <h2 className="fw-bold fs-1">COMPETITIVE LEADERBOARDS</h2>
            <div className="search-container my-4">
            <div className="input ps-4">
                <input
                id="input-search"
                className="input-search"
                placeholder="search..."
                type="q"
                onChange={(e) => {
                    setFilterRank(e.target.value);
                }}
                />
            </div>
            <div
                className="icon-search"
                onClick={() => {
                const search = document.querySelector(".search-container");
                search.classList.toggle("active");
                }}
            ></div>
            <span
                className="clear"
                onClick={() => {
                document.getElementById("input-search").value = "";
                setFilterRank("");
                }}
            ></span>
            </div>

            </div>
            <div className="table-over">
            <Table striped bordered hover className="bg-light m-0 table-w ">
            <thead>
                <tr>
                <th>#</th>
                <th>Tier</th>
                <th>RANK</th>
                <th>PLAYER NAME</th>
                <th>KDR</th>
                <th>WIN_RATE</th>
                <th>CLAN</th>
                </tr>
            </thead>
            <tbody>

                {ranking
                .filter((rank) => {
                if (filterRank == "") {
                    return rank;
                } else if (
                    rank.PlayerName 
                    .toLowerCase()
                    .includes(filterRank.toLowerCase()) ||
                    rank.CLAN
                    .toLowerCase()
                    .includes(filterRank.toLowerCase())

                ) {
                    return rank;
                }
                })
                .map((rank,key) => {
                return (
                    <tr className="rank-tr" key={key}>
                        <td>{rank.id}</td>
                        <td><img width={"35px"} src={rank.Tier} alt=""/></td>
                        <td><img src={rank.Rank} alt=""/></td>
                        <td className="fw-bold">{rank.PlayerName}</td>
                        <td>{rank.KDR}</td>
                        <td>{rank.WIN_RATE}</td>
                        <td>{rank.CLAN}</td>
                    </tr>
                );
                })}
                
            </tbody>
            </Table>
            </div>
        </Container>
        </div>
    );
}
