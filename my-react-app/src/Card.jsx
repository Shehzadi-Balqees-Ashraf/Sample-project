import cardimg from './assets/Ronaldo.png';
import {useState} from 'react';

function Card(){

    const [name, setName] = useState("Guest");
    function handleNameChange(event){
        setName(event.target.value)
    }

    const [age, setAge] = useState(0);
    function handleQuantityChange(event){
        setAge(event.target.value)
    }

    const [comment, setComment] = useState();
    function handleCommentChange(event){
        setComment(event.target.value)
    }

    const [payment, setPayment] = useState();
    function handlePaymentChange(event){
        setPayment(event.target.value)
    }
    
    const [shipping, setShipping] =useState();
    function handleShippingChange(event){
        console.log(event.target.value)
        setShipping(event.target.value)
    }
    return(
        <>
            <div className='card-form-main'>
                <div id='card-div'>
                    <img src={cardimg} alt="profile picture" />
                    <h2>Cristiano Ronaldo</h2>
                    <p>He is a Portuguese professional footballer who plays as a forward for and captains both 
                        Saudi Pro League club Al Nassr and the Portugal national team.</p>
                </div>
                <div className='form-div'>
                    <form  action="">
                        <input value={name} onChange={handleNameChange} />
                        <p>Name: {name}</p>

                        <input type='number' placeholder='"Enter your age"' value={age} onChange={handleQuantityChange} />
                        <p>Age: {age}</p>

                        <textarea value={comment} id="" placeholder='More details about delivery' onChange={handleCommentChange}></textarea>

                        <p>Payment Method: {payment}</p>
                        <select name="" id="" value={payment} onChange={handlePaymentChange}>
                            <option value="">Select an option</option>
                            <option value="Cash on delivery">Cash on delivery</option>
                            <option value="Jazzcash">Jazzcash</option>
                            <option value="Easypaisa">Easypaisa</option>
                            <option value="Bank">Bank</option>
                        </select>
                        
                        <p>Shipping: {shipping}</p>
                        <label >
                            <input type='radio' value='Pick-up'  name='Pick-up'
                            defaultChecked = {shipping === "Pick-up"}
                             onChange={handleShippingChange} />
                            Pick-up
                        </label><br />
                        
                        <label >
                            <input type='radio' value='Delivery'  name='Pick-up'
                            defaultChecked = {shipping === "Delivery"}
                             onChange={handleShippingChange} />
                            Delivery
                        </label>
                        

                    </form>
                </div>
            </div>
        </>

    );
}

export default Card