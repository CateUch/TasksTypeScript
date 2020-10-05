import React, { useState } from 'react';
import { Button } from '../common/Button';
import EditableSpan from '../common/EditableSpan';
import { saveState, restoreState } from './localStorage';

export default function DemoEditableSpan() {

    const [inputValue, setValue] = useState('doble click to change');
    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
        setValue(e.currentTarget.value);
    }
    // сохраняем объект типа StateType в ячейке "test"
    const saveInputValue = () => {
        saveState<string>('inputValue', inputValue);
    };

    // получем объект из ячейки "test" или дэфолтный объект если ячейка пуста
    const getValueBack = () => {
        setValue(restoreState<string>('inputValue', inputValue));
    };

    return (
        <div>
            <EditableSpan title={inputValue} onChange={onChange} />
            <div className={'span_btn'}>
                <Button buttonName='SAVE' onClick={saveInputValue} />
                <Button buttonName='RESTORE' onClick={getValueBack} />
            </div>
        </div>
    );
}
