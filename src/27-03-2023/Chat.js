import { useEffect, useState } from 'react';

const Chat = () => {
  const [show, setShow] = useState(false);
  const [roomId, setRoomId] = useState('general');
  return (
    <>
    <label>
      Choose the chat room
      <select value={roomId} onChange={(evt) => setRoomId(evt.target.value)}>
        <option value="general">general</option>
        <option value="travel">travel</option>
        <option value="music">music</option>
      </select>
    </label>
      <button onClick={() => setShow(!show)}>
        {show ? 'Close chat' : 'Open chat'}
      </button>
      {show && <ChatRoom roomId={roomId} />}
    </>
  );
};

const ChatRoom = ({roomId}) => {
  useEffect(() => {
    const connection = createConnection(roomId);
    connection.connect();

    return () => { // thirret sa here qe nje komponente te largohet ose te mos shfaqet (callback function)
      connection.disconnect();
    }
  }, [roomId]) // thirret kur komponenta behet mount, edhe sa her qe roomid nderron vlere

  return <h1>Welcome to the {roomId} chat room</h1>;
};

const createConnection = (roomId) => {
  return {
    connect() {
      console.log(`Connected to the ${roomId} room`)
    },
    disconnect() {
      console.log(`Disconnected from the ${roomId} room`)
    }
  }
}

export default Chat;

// komponenta behet mount
// komponenta behet unmount
// komponenta behet update (kur pranon state te ri (setState) ose props nderrojne)
