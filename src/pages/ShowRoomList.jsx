import React, { useEffect, useState } from "react";
import { HTTP_GET_REQUEST, HTTP_POST_REQUEST } from "../helpers/network";
import ENDPOINTS from "../constants/network.constant";
import moment from 'moment'

const ShowRoomList = (props) => {
  const [showRoomsList, setShowRoomsList] = useState([]);
  const[serverError, setServerError] = useState('');

  useEffect(() => {
    loadRooms();
  }, []);

  const loadRooms = () => {
    //const date = "2024-01-26";
    var dateformate = new Date();
    const date = moment(dateformate).format('YYYY-MM-DD');
    const requestBody = {
      date,
    };
    HTTP_GET_REQUEST(ENDPOINTS.SHOWROOMS_LIST, requestBody)
      .then((response) => setShowRoomsList(JSON.parse(response.data)))
      .catch((err) => console.error("[test] server error : ", err));
  }

  const disconnectConfereceCall = (roomUrl, roomName) => {
    const urlParts = roomUrl.split("/");
    const roomKey = urlParts[urlParts.length - 1];
    HTTP_POST_REQUEST(ENDPOINTS.DISCONNECT_CONFERENCE_CALL, {
      roomKey,
      roomName
    })
      .then(() => {
        alert(`Room # ${roomName} # disconnected`);
        loadRooms();
      })
      .catch((err) => {
      console.error("[test] server error : ", err)
      if(err.code === 'ERR_NETWORK' && err.message === 'Network Error'){
        setServerError("Network error try disconnecting room after some time");
        return;
       }
      }
      );
  };

  return (
    showRoomsList.length === 0) ? <div> <h1 className="title">Scheduled Room List</h1> No scheduled room (record) found </div> :(
      <div style={{ backgroundColor: "#DDDDDD" }}>
      <h1 className="title">Scheduled Room List</h1> 
      <table>
        <tr>
          <td colSpan={2}><font color="red">{serverError}</font></td>
            <td></td>
        </tr>
        <tr>
          <th>Room Name</th>
          <th>Room URL</th>
          {/* <th>Room Status</th> */}
          <th>Disconnect</th>
        </tr>
        {showRoomsList.map((showRoomItem) => (
          <tr>
            <td>{showRoomItem.roomName}</td>
            <td>{showRoomItem.roomURL}</td>
            {/* <td>{showRoomItem.roomStatus}</td> */}
            <td>
              {/* <button
                disabled={showRoomItem.roomStatus === "Inactive"}
                onClick={() => disconnectConfereceCall(showRoomItem.roomURL, showRoomItem.roomName)}
              >
                {showRoomItem.roomStatus === "Inactive" ? "Disconnected" : "Disconnect"}
              </button> */}
              <button 
              onClick={() => disconnectConfereceCall(showRoomItem.roomURL, showRoomItem.roomName)}
              > 
              {showRoomItem.roomStatus === "Inactive" ? "Disconnected" : "Disconnect"}
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div> 
  ); 
};

export default ShowRoomList;