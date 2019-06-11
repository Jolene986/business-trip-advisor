import React from 'react'
 
const InputField =(props) => {
   
     const {type, name, placehoalder, onChangeHandler} = props;
   
    return( 
        <input type= {type} name={name} placehoalder ={placehoalder} onChange={onChangeHandler} />
    )
}
export default InputField