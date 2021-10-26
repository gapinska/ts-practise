import {Child, ChildAsFC} from "./Child";

const Parent = () => {
    const onClick= ()=> {
        console.log("clicked")
    }
    return (<div>
        <Child color={"red"} onClick={onClick}/>
        <ChildAsFC color={"green"} onClick={onClick}>This is children</ChildAsFC>
    </div>)
}

export default Parent