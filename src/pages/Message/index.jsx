import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function Message() {
  const [message] = useState([
    { id: 1, title: "message1", content: "111" },
    { id: 2, title: "message2", content: "222" },
    { id: 3, title: "message3", content: "333" },
  ]);
  const navigate = useNavigate();
  const showData = (elem) => {
    navigate("detail", {
      replace: false,
      state: {
        id: elem.id,
        title: elem.title,
        content: elem.content,
      },
    });
  };
  return (
    <div>
      <ul>
        {message.map((elem) => (
          <li key={elem.id}>
            <Link
              to="detail"
              state={{ id: elem.id, title: elem.title, content: elem.content }}
            >
              {elem.title}
            </Link>
            <button onClick={() => showData(elem)}>click</button>
          </li>
        ))}
      </ul>
      <hr />
      <Outlet />
    </div>
  );
}
