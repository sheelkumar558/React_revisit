import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Container,
  Form,
  Image,
} from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { BsMusicNoteBeamed } from "react-icons/bs";
import StarRating from "../Components/Rating";
import { useDispatch, useSelector } from "react-redux";
import { GetSong } from "../Redux/songs/songAction";
import moment from "moment";

const Songs = () => {
  const [rating, setRating] = useState(0);
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const songs = useSelector((store) => store.Song.songs);
  const load = useSelector((store) => store.Song.loading);
  const err = useSelector((store) => store.Song.error);

  const navigate = useNavigate();
  const AddSong = () => {
    navigate("/addsong");
  };

  const handleChange = (value) => {
    setRating(value);
  };

  useEffect(() => {
    dispatch(GetSong());
  }, [dispatch]);

  return (
    <Container>
      <Container
        style={{
          width: "90%",
          height: "40px",
          margin: "4% 0% 3% 10%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Form.Control
          style={{ height: "40px", width: "60%" }}
          type="search"
          placeholder="Search by song name...."
          className="me-2"
          aria-label="Search"
          onChange={(e) => setQuery(e.target.value)}
        />

        <Button onClick={AddSong} variant={"success"}>
          {" "}
          <BsMusicNoteBeamed /> Add Song
        </Button>
      </Container>

      <Table striped>
        <thead>
          <tr>
            <th>ArtWork</th>
            <th>Song</th>
            <th>Date of Release</th>
            <th>Artists</th>
            <th>Rate</th>
          </tr>
        </thead>
        <tbody>
          {songs?.songs
            .filter((e) => e.name.toLowerCase().includes(query.toLowerCase()))
            .sort((a,b)=>a.rating-b.rating)
            .slice(0,10)
            .map((e) => (
              <tr key={e._id}>
                <td>
                  {" "}
                  <Image style={{width:"100px"}} src={e.cover} alt={e._name} />{" "}
                </td>
                <td>{e.name}</td>
                <td>{moment(e.createdAt).format("Do MMMM YYYY")}</td>
                <td>
                  {e?.artistId?.map((e) => (
                    <span key={e._id}>{e.name}</span>
                  ))}
                </td>
                <td>
                  <StarRating id={e._id}  style={{ cursor: "pointer" }} />
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Songs;
