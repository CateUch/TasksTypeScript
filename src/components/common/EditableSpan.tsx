import React, { useState } from 'react';
import Input from '../common/Input'

type EditableSpanType = {
    title: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

const EditableSpan = (props: EditableSpanType) => {

    const [editMode, setEditMode] = useState(false);

    function activateEditMode() {
        setEditMode(true);
    };
    function deActivateEditMode() {
     setEditMode(false);
    }


    return (editMode
        ? <Input type='text'
                onBlur={deActivateEditMode}
                //onKeyPress={deActivateEditMode} 
                onChange={props.onChange}/>
        : <span onDoubleClick={activateEditMode}>{props.title}</span>
    )
}

export default EditableSpan;