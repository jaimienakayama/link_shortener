import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../src/styles/styles.css";
import Header from "./Header.jsx";
import Input from "./Input.jsx";
import Button from "./Button.jsx";
import { shortenLink } from "./utils/api.js";
import ClipboardJS from "clipboard";

const App = () => {
  const [longLink, setLongLink] = useState("");
  const [shortLink, setShortLink] = useState("");

  const clipboard = new ClipboardJS(".copy-button");

  return (
    <div>
      <Header />
      <div className="long-link-container">
        <Input
          className="long-link"
          placeholder="Enter long link here"
          setLongLink={setLongLink}
          readOnly={false}
        />
        <Button
          className="go-button"
          text="Go"
          onClick={() => {
            shortenLink(longLink).then((d) => {
              setShortLink(d.data.link);
            });
          }}
        />
      </div>
      <div className="short-link-container">
        <Input
          className="short-link"
          placeholder={"Your short link!"}
          readOnly={"readonly"}
          value={shortLink}
        />
        <Button className="copy-button" text={"Copy"} dct={".short-link"} />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
