import React, {useState} from "react";

const EventComponent: React.FC = () => {
    const [name, setName] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    const onDragStart = (e:  React.DragEvent<HTMLDivElement>) => {
        console.log(e)
    }

    return (
        <div>
            <input onChange={e => handleChange(e)}/>
            <div draggable onDragStart={e=>onDragStart(e)}>Drag Me!</div>
        </div>
    )
}

export default EventComponent