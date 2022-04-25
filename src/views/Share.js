import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import { Dropdown, DropdownButton } from 'react-bootstrap';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const [value, setValue] = useState('Topic');

  useEffect(() => {
    console.log(editorState);
  }, [editorState]);

  const handleSelect = (e) => {
    setValue(e)
  }

  return (
    <>
      <b><h1>Share Your Story</h1></b>
      <h2>Share about the impacts that United States politics has had on you.</h2>
      <h3>Categorize your story by choosing a topic in the dropdown menu below.</h3>
      <div style={{ paddingTop: '1em', paddingBottom: '1em' }}>
        <DropdownButton id="dropdown-basic-button" title={value} onSelect={handleSelect}>
          <Dropdown.Item eventKey="COVID-19">COVID-19</Dropdown.Item>
          <Dropdown.Item eventKey="Immigration">Immigration</Dropdown.Item>
          <Dropdown.Item eventKey="Reproductive Rights">Reproductive Rights</Dropdown.Item>
          <Dropdown.Item eventKey="Economics">Economics</Dropdown.Item>
          <Dropdown.Item eventKey="Healthcare">Healthcare</Dropdown.Item>
        </DropdownButton>
      </div>
      <div style={{ border: "1px solid black", padding: '2px', minHeight: '400px' }}>
        <Editor
          editorState={editorState}
          onEditorStateChange={setEditorState}
        />
      </div>
      <div className="buttonNav" style={{ paddingTop: '1em' }}>
        <button
          onClick={() => App({ editorState })}
          style={{ border: 'none' }}
        >
          {'Submit'}
        </button>
      </div>
    </>
  );
}