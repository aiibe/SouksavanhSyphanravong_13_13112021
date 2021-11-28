import { CSSProperties, FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../redux/actions";
import { StateType } from "../redux/types";

// Type
type PropTypes = {
  firstName?: string;
  lastName?: string;
  onClose: () => void;
};

// Component
function EditName({ firstName, lastName, onClose }: PropTypes) {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const dispatch = useDispatch();
  const { token } = useSelector((state: StateType) => state.auth);

  const handleSave = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Request update user infos
    dispatch(updateProfile(token, first, last));
    onClose();
  };

  useEffect(() => {
    if (firstName && lastName) {
      // Auto batch updated fields
      setFirst(firstName);
      setLast(lastName);
    }
  }, []);

  return (
    <>
      <form style={formStyle} onSubmit={handleSave}>
        <div style={formBoxStyle}>
          <input
            type="text"
            style={inputStyle}
            value={first}
            onChange={(event) => setFirst(event.target.value)}
          />
          <input
            type="text"
            style={inputStyle}
            value={last}
            onChange={(event) => setLast(event.target.value)}
          />
        </div>
        <div style={formBoxStyle}>
          <button type="submit" style={{ ...buttonStyle, justifySelf: "end" }}>
            Save
          </button>
          <button onClick={() => onClose()} style={buttonStyle}>
            Cancel
          </button>
        </div>
      </form>
    </>
  );
}

// Inline styles
const formStyle: CSSProperties = {
  margin: "0 auto",
  maxWidth: 400,
  display: "flex",
  flexDirection: "column",
  padding: "0 20px",
  marginBottom: 20,
};

const formBoxStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: 30,
  boxSizing: "border-box",
  marginBottom: 20,
};

const inputStyle: CSSProperties = {
  padding: 5,
  fontSize: "1.2rem",
  width: "100%",
  display: "inline-block",
  boxSizing: "border-box",
};

const buttonStyle: CSSProperties = {
  width: "50%",
};

export default EditName;
