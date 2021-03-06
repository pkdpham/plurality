import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { supabase } from "../supabaseClient"
import { convertToRaw } from 'draft-js';
import { useAlert } from "react-alert";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Share() {
  const [editorState, setEditorState] = useState(() => {
    return EditorState.createEmpty();
  });
  const [topic, setTopic] = useState('Topic');
  const [titleState, setTitleState] = useState('')
  
  const alert = useAlert();
  // const [action, setAction] = useState("");
  let navigate = useNavigate();

  const handleClickEvent = async (content, topic) => {
    try {
      const user = supabase.auth.user();
      let jsonText = JSON.stringify(convertToRaw(content));
  
      const { data, error } = await supabase
        .from('stories')
        .insert([
          { 
            author_id: user.id,
            title: titleState,
            content: jsonText,
            attributes: {
              topic: topic,
              hearts: 1
            }
          }
        ], { returning: 'minimal' });

        // TODO: fetch the unique ID from the database and use that ID to jump to the new page
        
    } catch (error) {
      console.log(error.message)
    }

    // TODO: change navigate from home to specific ID page: /story/<ID>
    navigate("/", { replace: true});
  }

  return (
    <>
      <div style={{ marginTop: "20px" }}>
        <h1 className="title">Share Your Story</h1>
        <h5 style={{ fontWeight: '100' }}>
          Share about the impacts that United States politics has had on you.
        </h5>
      </div>
      <div style={{ paddingTop: '1em', paddingBottom: '1em' }}>
        <p style={{ fontSize: '14px' }}>
          <b>Categorize your story by choosing a topic in the dropdown menu below.</b>
        </p>
        <DropdownButton id="dropdown-basic-button" title={topic} onSelect={setTopic}>
          <Dropdown.Item eventKey="COVID-19">COVID-19</Dropdown.Item>
          <Dropdown.Item eventKey="Economics">Economics</Dropdown.Item>
          <Dropdown.Item eventKey="Gun Policy">Gun Policy</Dropdown.Item>
          <Dropdown.Item eventKey="Healthcare">Healthcare</Dropdown.Item>
          <Dropdown.Item eventKey="Immigration">Immigration</Dropdown.Item>
          <Dropdown.Item eventKey="Reproductive Rights">Reproductive Rights</Dropdown.Item>
          <Dropdown.Item eventKey="Social Justice">Social Justice</Dropdown.Item>
          <Dropdown.Item eventKey="Other">Other</Dropdown.Item>
        </DropdownButton>
      </div>
      <div>
        <form
          onChange={(e) => setTitleState(e.target.value)} 
          style={{ padding: '0 0 1em 0' }}
        >
            <input type="text" name="title" placeholder="Title" style={{ borderColor: '#e5e5e5' }}/>
        </form>
      </div>
      <div style={{ border: "1px solid black", padding: '2px', minHeight: '400px', borderRadius: '5px', borderColor: '#e5e5e5' }}>
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
          placeholder=" Give some context about where you come from. Think about the message you're trying to convey through your story."
        />
      </div>
      <div className="buttonNav" style={{ paddingTop: '1em' }}>
        <button
          onClick={ () => {
            alert.show("Are you ready to submit?", {
            actions: [
                {
                  copy: "Submit",
                  onClick: () => handleClickEvent(editorState.getCurrentContent(), topic)
                }
              ],
            closeCopy: "Cancel"
            });
          }}
          style={{ border: 'none' }}
        >
          {'Submit'}
        </button>
      </div>
      <div style={{ paddingTop: '1em' }}>
        <p>
          Your story will be reviewed by a moderator under <b><u>Plurality's Content Policy</u></b> before it is published.
        </p>
      </div>
    </>
  );
}