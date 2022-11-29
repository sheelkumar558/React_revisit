import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { getArtist } from '../Redux/artist/artistAction';
import { GetSong } from '../Redux/songs/songAction';

const Artists = () => {
  const dispatch = useDispatch();
  const songs = useSelector((store) => store.Song.songs);

  useEffect(() => {

     dispatch(GetSong());


  }, []);

  // console.log(artists,"art");

  return (
    <Container>
    <Table striped>
    <thead>
      <tr>
        <th>Artists</th>
        <th>Date Of Birth</th>
        <th>Songs</th>
      </tr>
    </thead>
    <tbody>
      {

      songs?.songs.sort((a,b)=>a.rating-b.rating).slice(0,10).map((e)=>(
      <tr key={e._id}>
        <td>{e?.artistId.map((e)=>e.name)}</td>
        <td>{e?.artistId.map((e)=>e.DOB)}</td>
        <td>{e.name}</td>
      </tr>

        ))

      }
     
    </tbody>
  </Table>
  </Container>
  )
}

export default Artists