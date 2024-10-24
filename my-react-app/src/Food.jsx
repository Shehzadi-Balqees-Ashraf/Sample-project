import propTypes from 'prop-types'
function Food(props){
    const food1 = "Apple"
    const food2 = "banana"
    const fruits = ["Banana" , "Apple" , "Coconut" , "Guavas" , "Watermelon"];
    const updatedFruits = fruits.map(function(value){
        return <li key={value}>{value}</li>;
    })
    return(
        <>
        <ul>
            <li>Orange</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
        <p>My favourite food is {props.favFood} </p>
        {props.isSugarPerson ? <p>But I am not supposed to eat it due to high sugar level.</p> : <p>I enjoy with it daily.</p>};
        <ul>{updatedFruits}</ul>
        </>
    );
}

Food.propTypes = {
    favFood: propTypes.string,
    isSugarPerson: propTypes.bool
}

export default Food