import { useState } from "react";

const Player = ({ initialName, symbol, isActive }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleEditing() {
    setIsEditing((prev) => !prev);
  }

  function handleChange(e) {
    setPlayerName(e.target.value);
  }

  let EditPlayerName = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    EditPlayerName = (
      <input type="text" onChange={handleChange} value={playerName} required />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {EditPlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditing}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
