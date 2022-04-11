import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {EditorState,convertFromRaw,convertToRaw} from "draft-js";
import { useRouter } from "next/dist/client/router";
import { doc, setDoc } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { db } from "../firebase";
import { useDocumentOnce } from "react-firebase-hooks/firestore";

const Editor = dynamic(
    () => import('react-draft-wysiwyg').then((module:any) => module.Editor),
    {
        ssr:false
    }
)

const TextEditor = () => {

    const [editorState,setEditorState] = useState(EditorState.createEmpty())
    const router = useRouter()
    const {id}:any = router.query
    const { data:session }:any = useSession()
    const docRef = doc(db,'userDocs',session?.user?.email,'docs',id)
    const [snapshot] = useDocumentOnce(docRef)

    useEffect(() => {
        if(snapshot?.data()?.editorState){
            setEditorState(
                EditorState.createWithContent(
                    convertFromRaw(snapshot?.data()?.editorState)
                )
            )
        }
    },[snapshot])

    const onEditorStateChange = async (editorState:any) => {
        setEditorState(editorState)

        await setDoc(docRef,{
            editorState:convertToRaw(editorState.getCurrentContent())
        },{merge:true})
    }

    return(
        <div className="bg-[#F8F9FA] min-h-screen pb-16">
            <Editor
                editorState={editorState}
                onEditorStateChange={onEditorStateChange}
                toolbarClassName="flex sticky top-0 z-50 !justify-center mx-auto"
                editorClassName="mt-6 p-10 bg-white shadow-lg max-w-5xl"
            />
        </div>
    )
}

export default TextEditor