import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Editor, EditorState, convertFromRaw } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import { useEffect, useState } from 'react';

import { supabase } from "../supabaseClient"
import { useParams } from 'react-router-dom'

export default function Story() {
    const { id } = useParams()

    // TODO: promise(?) and requests go here

    const [story, setStory] = useState({});

    useEffect(async () => {
      await supabase
          .from("stories")
          .select('id, title, content')
          .eq("id", id)
          // .order("id", { ascending: false })
          // .limit(6) // get the first 6 rows
          .then(({ data, error }) => {
            console.log(data)
            if (!error && data !== []) {
              
              data = data[0]

              let contentState = convertFromRaw(JSON.parse(data.content))
              let editorState = EditorState.createWithContent(contentState)
              let editor = <Editor editorState={editorState} readOnly={true} />

              let story = {
                id: data.id,
                title: data.title,
                content: editor
              }

              setStory(story);
            }
          });
    }, []);

    console.log(story)

    // if (story != []) {
    //   html = stateToHTML(convertFromRaw(JSON.parse(story[0].content)));
    // }

    // const storyData = async () => {
    //   try {
    //     const { data: story, error } = await supabase
    //       .from('stories')
    //       .select('id, title, content') // TODO: get author from profiles table
    //       .eq('id', id)

    //   // setStory([story.title, story.content])
    // console.log(story)
    //   // 
    //   } catch (error) {
    //     console.log(error)
    //   }
    // };
    // let html = stateToHTML(convertFromRaw(JSON.parse(story.content)));

    // TODO: fill this return with story name, content, and everything from the HTTP request
    return(
        <>
          <div className='title-container'>
            <Typography variant="h4" fontWeight={'bold'} mt={'1.5em'} component="div">
              {story.title}
            </Typography>
          </div>
          <div className="story-body">
            {story.content}
          </div>
        </>
    )
}