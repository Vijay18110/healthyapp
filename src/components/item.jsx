
const Item = (probs) => {


    return (
        <ul className="list-group">
            {
                probs.arr1.map((item) => {
                    return (
                        <li className="list-group-item ">
                            <strong>
                                {
                                    item
                                }
                            </strong>
                            <button className="bg-primary btn ">buy</button>
                        </li>
                    )
                })
            }



        </ul>
    );
}
export default Item;