import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css'

export default function Editor(props){
    const [ currentContent, setCurrentContent ] = useState('')

    useEffect(() => {
        setCurrentContent(props.note.body)
    }, [props.note])

    const modules = {
        toolbar: [
            [{'header': '1'}, {'header': '2'}, {'font': []},],
            ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-black'],
            [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
            ['link'],
            ['clean']
        ]
    }

    return <ReactQuill value={currentContent} modules={modules}/>
}