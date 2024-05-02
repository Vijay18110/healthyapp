import { useState } from "react";
import Header from "./header";
import Input from "./input";
import Items from "./item";


const Healthyapp = () => {
    const [arr1, setarr1] = useState(["fruits", "dall", "roti", "dhee", "dry-fruits", "milk"]);
    const handleonclick = (e) => {
        if (e.key === 'Enter') {
            let newarr = [...arr1, e.target.value];
            setarr1(newarr);

        }
    }

    return (
        <div className="container  border2 w-50  c-container">
            <div className="flud-container w-80 m-3  fc">
                <Header></Header>
                <Input arr1={arr1} setarr1={setarr1} handleonclick={handleonclick}></Input>
                <Items arr1={arr1} setarr1={setarr1} ></Items>
            </div>

        </div>
    )
}
export default Healthyapp;