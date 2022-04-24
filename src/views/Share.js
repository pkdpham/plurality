import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
export default function App() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  useEffect(() => {
    console.log(editorState);
  }, [editorState]);
  return (
    <div>
      <b><h1>Share Your Story</h1></b>
      <h2>Share about the impacts that United States politics has had on you.</h2>
      <h3>Categorize your story by choosing a topic in the dropdown menu below.</h3>
      <DropdownButton id="dropdown-basic-button" title="Topic">
        <Dropdown.Item href="#/action-1">COVID-19</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Immigration</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Abortion</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Economics</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Healthcare</Dropdown.Item>
      </DropdownButton>
      <div style={{ border: "1px solid black", padding: '2px', minHeight: '400px' }}>
        <Editor
          editorState={editorState}
          onEditorStateChange={setEditorState}
        />
      </div>
      <button
          className="buttonNav items"
          onClick={() => App({ editorState })}
        >
          {'Publish'}
        </button>
    </div>
  );
}