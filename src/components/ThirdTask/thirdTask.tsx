import React, { useState } from 'react';
import {v1} from 'uuid'; 
import ThirdTaskIn from './thirdTask_in'

export type NameType = {id: string, userName: string};

export default function ThirdTask () {

    let [userNamesArr, setUserNamesArr] = useState<Array<NameType>>([
        
    ]);

    function addUserName (name:string) {
    let userNameArr = {id: v1(), userName: name};
    setUserNamesArr([userNameArr, ...userNamesArr]);
    alert('Hi '+ userNameArr.userName+'!' );
    }
    

    return (
        <div>
           <ThirdTaskIn
            userNamesArr={userNamesArr}
            addUserName={addUserName} />  
        </div>
    )
}


