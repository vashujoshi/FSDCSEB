import React from 'react'


function Student(props) {
  return (
    <div className='icard'>
        <table>
            <tbody>
                <tr><td colSpan={2}>{props.college}</td></tr>
                <tr><td>Namw</td><td>{props.name}</td></tr>
                <tr><td>    
                    </td><td>{props.pic}</td></tr>
                <tr><td>Branch</td><td>{props.branch}</td></tr>
                <tr><td>roll</td><td>{props.Roll}</td></tr>
                <tr><td>Section</td><td>{props.section}</td></tr>

            </tbody>
        </table>
    </div>
  )
}
export default Student