import { useState } from "react";
import DiceRoller from './DiceRoller.jsx'
import { useSelector, useDispatch} from "react-redux";
import { addItem , removeItem , editItem , setSearchedValue } from "./store.jsx";
// import {delIcon} from './assets/icons8-delete.svg' 

function ToDoList(){
    const [newItems,setNewItems] = useState("");
    const [editingIndex,setEditingIndex] = useState(-1);
    const [editValue,setEditValue] = useState("");
    const dispatch = useDispatch();
    // const actualIndex = useRef();
    const {items,searchedValue} = useSelector((state)=>state.todos);
    

// //     function handleInputChange(event){
// //         setNewItems(event.target.value);
// //     }

    const handleAddItems=()=>{
        if(newItems.trim() !==""){
           dispatch(addItem(newItems));
        setNewItems("");
        console.log("added");
        }
    };

// //     function handleRemoveItem(index){
// //         const actualIndex = items.findIndex((item)=> item === FilteredItems[index]);
// //         const updatedItemList = items.filter(( _ , i) => i !== actualIndex);
    
// //         setItems(updatedItemList);
// //     }

    const handleSaveEdit=()=>{
        dispatch(editItem({ index:editingIndex, newValue: editValue}));
        setEditingIndex(-1);
        setEditValue("");
    };

// //     function handleCancelEdit(){
// //         setEditingIndex(-1);
// //         setEditValue("");
// //     }


    const FilteredItems = items.filter((item) =>
            (item.toLowerCase().includes(searchedValue.toLowerCase()))
        ); 

// //     // useEffect(()=>
// //     //     document.title = 'Total Items are: ${items.length()'
    // )

    return(
        <>
            <div className="to-do-ands-dice-roller-container-main">
                <div className="to-do-list-container">
                <div>
      <h1>ToDo List</h1>
      <input
        type="text"
        value={newItems}
        onChange={(e) => setNewItems(e.target.value)}
        placeholder="Add new item"
      />
      <button onClick={handleAddItems}>Add</button>
      <input
        type="text"
        value={searchedValue}
        onChange={(e) => dispatch(setSearchedValue(e.target.value))}
        placeholder="Search"
      />
      <ul>
        {FilteredItems.map((item, index) => (
          <li key={index}>
            {editingIndex === index ? (
              <>
                <input
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                />
                <button onClick={handleSaveEdit}>Save</button>
                <button onClick={() => setEditingIndex(-1)}>Cancel</button>
              </>
            ) : (
              <>
                {item}
                <button onClick={() => setEditingIndex(index)}>Edit</button>
                <button onClick={() => dispatch(removeItem(index))}>
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
                    {/* <h1>ToDo List</h1>
                    <input type="text" onChange={(e)=>setNewItems(e.target.value)} placeholder="Enter Item Name" value={newItems}/>
                    <button onClick={handleAddItems}>Add</button><br />
                    <input className="search-bar" type="text" placeholder="search" value={searchedValue} onChange={(e)=>dispatch(setSearchedValue(e.target.value))}/>
                  
                    <ul className="toDoList-main-ulTag">
                        {FilteredItems.map((task,index) =>
                            (
                                <li key={index}>
                                     {editingIndex=== index ? (
                                        <div>
                                            <input type="text" value={editValue} onChange={(e) => setEditValue(e.target.value)} />
                                            <button onClick={()=>handleSaveEdit(index)}>Save</button>
                                            <button onClick={()=>setEditingIndex(-1)}>Cancel</button>
                                        </div>
                                    ) : (
                                        <div>
                                                <span>{task}</span>
                                                <button className="del-button" onClick={()=> dispatch(removeItem(index))}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                                        <path d="M 20.5 4 A 1.50015 1.50015 0 0 0 19.066406 6 L 14.640625 6 C 12.796625 6 11.086453 6.9162188 10.064453 8.4492188 L 7.6972656 12 L 7.5 12 A 1.50015 1.50015 0 1 0 7.5 15 L 40.5 15 A 1.50015 1.50015 0 1 0 40.5 12 L 40.302734 12 L 37.935547 8.4492188 C 36.913547 6.9162187 35.202375 6 33.359375 6 L 28.933594 6 A 1.50015 1.50015 0 0 0 27.5 4 L 20.5 4 z M 8.9726562 18 L 11.125 38.085938 C 11.425 40.887937 13.77575 43 16.59375 43 L 31.40625 43 C 34.22325 43 36.574 40.887938 36.875 38.085938 L 39.027344 18 L 8.9726562 18 z"></path>
                                                    </svg>
                                                </button>
                                                <button className="edit-button" onClick={()=>setEditingIndex(index)}>
                                                    <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    x="0px"
                                                    y="0px"
                                                    width="100"
                                                    height="100"
                                                    viewBox="0 0 24 24">
                                                    <path d="M 14.925781 2 C 14.813054 1.9991672 14.748047 2.0058594 14.748047 2.0058594 A 0.50005 0.50005 0 0 0 14.378906 2.2207031 L 4.2558594 16.998047 A 0.50005 0.50005 0 0 0 4.1699219 17.253906 L 4 20.474609 A 0.50005 0.50005 0 0 0 4.7128906 20.953125 L 7.6328125 19.585938 A 0.50005 0.50005 0 0 0 7.8320312 19.416016 L 17.955078 4.6386719 A 0.50005 0.50005 0 0 0 18.021484 4.2109375 C 18.021484 4.2109375 17.722643 3.2071312 16.755859 2.5566406 C 16.031006 2.0689324 15.263963 2.0024984 14.925781 2 z M 15.019531 3.0546875 C 15.173987 3.0505575 15.632727 3.0068745 16.197266 3.3867188 C 16.759177 3.7647948 16.88795 4.2002352 16.943359 4.3476562 L 15.902344 5.8652344 L 13.980469 4.5703125 L 15.019531 3.0546875 z M 13.416016 5.3964844 L 15.337891 6.6914062 L 7.0859375 18.736328 L 5.0429688 19.693359 L 5.1601562 17.447266 L 13.416016 5.3964844 z M 11.5 20 A 0.5 0.5 0 0 0 11.5 21 A 0.5 0.5 0 0 0 11.5 20 z M 14.5 20 A 0.5 0.5 0 0 0 14.5 21 A 0.5 0.5 0 0 0 14.5 20 z M 17.5 20 A 0.5 0.5 0 0 0 17.5 21 A 0.5 0.5 0 0 0 17.5 20 z"></path>
                                                </svg>
                                                </button>
                                        </div>
                                    )}
                                </li>
                                ))
                            }
                        </ul> */}
                </div>
                <div className="dice-roller-container">
                    <DiceRoller />
                </div>
            </div>
        </>
    );
}

export default ToDoList


// import { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { addItem, removeItem, editItem, setSearchValue } from './store';

// function ToDoList() {
//   const [newItem, setNewItem] = useState('');
//   const [editingIndex, setEditingIndex] = useState(-1);
//   const [editValue, setEditValue] = useState('');
//   const dispatch = useDispatch();
//   const { items, searchValue } = useSelector((state) => state.todos);

//   const handleAddItem = () => {
//     if (newItem.trim() !== '') {
//       dispatch(addItem(newItem));
//       setNewItem('');
//     }
//   };

//   const handleEditSave = () => {
//     dispatch(editItem({ index: editingIndex, newValue: editValue }));
//     setEditingIndex(-1);
//     setEditValue('');
//   };

//   const filteredItems = items.filter((item) =>
//     item.toLowerCase().includes(searchValue.toLowerCase())
//   );

//   return (
//     <div>
//       <h1>ToDo List</h1>
//       <input
//         type="text"
//         value={newItem}
//         onChange={(e) => setNewItem(e.target.value)}
//         placeholder="Add new item"
//       />
//       <button onClick={handleAddItem}>Add</button>
//       <input
//         type="text"
//         value={searchValue}
//         onChange={(e) => dispatch(setSearchValue(e.target.value))}
//         placeholder="Search"
//       />
//       <ul>
//         {filteredItems.map((item, index) => (
//           <li key={index}>
//             {editingIndex === index ? (
//               <>
//                 <input
//                   type="text"
//                   value={editValue}
//                   onChange={(e) => setEditValue(e.target.value)}
//                 />
//                 <button onClick={handleEditSave}>Save</button>
//                 <button onClick={() => setEditingIndex(-1)}>Cancel</button>
//               </>
//             ) : (
//               <>
//                 {item}
//                 <button onClick={() => setEditingIndex(index)}>Edit</button>
//                 <button onClick={() => dispatch(removeItem(index))}>
//                   Delete
//                 </button>
//               </>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ToDoList;