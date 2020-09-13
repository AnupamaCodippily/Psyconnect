import React from 'react'

export default function SessionRow(props) {

    const date = new Date(props.session.date)


    return (
        <tr>
            <td>
                {props.session._id}
            </td>
            <td>
                {props.session.date}
            </td>
            <td>
                {date.getHours()}:{date.getMinutes()}
            </td>
            <td>
                {props.patientsCount}
            </td>
        </tr>
    )
}
