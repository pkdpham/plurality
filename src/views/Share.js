import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { supabase } from "../supabaseClient"
import { convertToRaw } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Share() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const [topic, setTopic] = useState('Topic');

  const handleSelect = (e) => {
    setTopic(e)
  }

  const handleSubmit = async (content, topic) => {
    let jsonText = JSON.stringify(convertToRaw(content))
    const user = supabase.auth.user()
    console.log(jsonText, topic)

    console.log(user)

    const { data, error } = await supabase
      .from('stories')
      .insert([
        { 
          author_id: user.id,
          content: jsonText,
          attributes: {
            topic: topic,
            hearts: 1
          }
        }
      ], { returning: 'minimal' })
  }

  return (
    <>
      <b><h1>Share Your Story</h1></b>
      <h2>Share about the impacts that United States politics has had on you.</h2>
      <h3>Categorize your story by choosing a topic in the dropdown menu below.</h3>
      <div style={{ paddingTop: '1em', paddingBottom: '1em' }}>
        <DropdownButton id="dropdown-basic-button" title={topic} onSelect={handleSelect}>
          <Dropdown.Item eventKey="COVID-19">COVID-19</Dropdown.Item>
          <Dropdown.Item eventKey="Economics">Economics</Dropdown.Item>
          <Dropdown.Item eventKey="Gun Policy">Gun Policy</Dropdown.Item>
          <Dropdown.Item eventKey="Healthcare">Healthcare</Dropdown.Item>
          <Dropdown.Item eventKey="Immigration">Immigration</Dropdown.Item>
          <Dropdown.Item eventKey="Reproductive Rights">Reproductive Rights</Dropdown.Item>
          <Dropdown.Item eventKey="Social Justice">Social Justice</Dropdown.Item>
        </DropdownButton>
      </div>
      <div style={{ border: "1px solid black", padding: '2px', minHeight: '400px', borderRadius: '5px' }}>
        <Editor
          editorState={editorState}
          onEditorStateChange={setEditorState}
          toolbar={{
            options: ['inline', 'blockType', 'fontSize', 'textAlign', 'list', 'link', 'emoji', 'history'],
            inline: { 
              options: ['bold', 'italic', 'underline', 'strikethrough']
            },
            blockType: {
              options: ['Normal', 'H1', 'H2', 'H3', 'H4', 'Blockquote', 'Code'],
            },
            list: { inDropdown: true },
            textAlign: { inDropdown: false },
            link: { inDropdown: true },
            history: { inDropdown: false },
          }}
        />
      </div>
      <div className="buttonNav" style={{ paddingTop: '1em' }}>
        <button
          onClick={ () => handleSubmit(editorState.getCurrentContent(), topic) }
          style={{ border: 'none' }}
        >
          {'Submit'}
        </button>
      </div>
    </>
  );
}