import React from "react";

function Student(props){
    return(
        <div className='icard'>
            <table>
                <tbody>
                    <tr><td>College: {props.college}</td></tr>
                    <tr><td>Name: {props.name}</td></tr>
                    <tr><td colSpan={2}>ABES Engineering College</td></tr>
                </tbody>    
            </table>
        </div>
    )
}
export default Student;