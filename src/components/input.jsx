
const Input = ({ handleonclick }) => {
    return (
        <input onKeyDown={handleonclick} className="input w-100 mt-2 mb-2 p-2" type="text" placeholder="enter your choice" id="input" />
    );


}
export default Input;
