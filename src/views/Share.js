import React, { useRef, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, ContentState } from "draft-js";
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { supabase } from "../supabaseClient"
import { convertToRaw } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Share() {
  const [editorState, setEditorState] = useState(() => {
    return EditorState.createEmpty()
  });

  const [topic, setTopic] = useState('Topic');

  const handleSelect = (e) => {
    setTopic(e)
  }

  const titleForm = useRef(null);
  const [titleState, setTitleState] = useState('')

  const handleClickEvent = async (content, topic) => {
    const user = supabase.auth.user()
    let jsonText = JSON.stringify(convertToRaw(content))
    let title = titleForm.current

    const { data, error } = await supabase
      .from('stories')
      .insert([
        { 
          author_id: user.id,
          title: title,
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
      <div>
        <form 
          ref={titleForm} 
          onChange={(e) => setTitleState(e.target.value)} 
          style={{ padding: '0 0 1em 0' }}
        >
            <input type="text" name="title" placeholder="Title" />
        </form>
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
          placeholder="Give some context about where you come from. Think about the message you're trying to convey through your story."
        />
      </div>
      <div className="buttonNav" style={{ paddingTop: '1em' }}>
        <button
          onClick={ () => handleClickEvent(editorState.getCurrentContent(), topic) }
          style={{ border: 'none' }}
        >
          {'Submit'}
        </button>
      </div>
    </>
  );
}