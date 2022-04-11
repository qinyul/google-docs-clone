

declare module '@material-tailwind/react/Icon' {
    type icon = {
        name: string,
        size?: string, 
        color?: string
    }

	const Icon: React.FC<icon>
	export default Icon
}

declare module '@material-tailwind/react/Button' {
    type button = {
        color:string,
        buttonType?:string,
        rounded?:boolean,
        iconOnly?:boolean,
        className?:string,
        ripple:string,
        onClick?:any
        size?:string,
        block?:boolean,
    }   
    
    const Button:React.FC<button>
    export default Button
}

declare module '@material-tailwind/react/Modal'{

    const Modal:React.ReactNode<>
    export default Modal
}

declare module '@material-tailwind/react/ModalBody'{

    const ModalBody:React.FC<any>

    export default ModalBody
}

declare module '@material-tailwind/react/ModalFooter'{

    const ModalFooter:React.FC<any>
    export default ModalFooter
}

declare module 'react-draft-wysiwyg'{

    const Editor:any
    export default Editor
}

declare module 'next/dynamic'{

    const dynamic:any
    export default dynamic 
}

declare module 'draft-js'{
    type editorState = {
        createEmpty?:any,
        createWithContent?:any
    }

    export const convertFromRaw:any
    export const convertToRaw:any
    export const EditorState:editorState
}
