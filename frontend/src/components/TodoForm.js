import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';
import styled from 'styled-components';


function TodoForm() {

    const link = 'http://localhost:5000/api/v1/crud';
    const [todos, setTodos] = useState([]);
    const [todoName, setTodoName] = useState('')
    const [todoComment, setTodoComment] = useState('')
    const [editTodoData, setEditTodoData] = useState(null)


    useEffect(() => {
        getTodos();
        console.log(todos);
    }, [])


    //update
    useEffect(()=>{
        if(editTodoData){
            setTodoName(editTodoData.name ? editTodoData.name : '')
            setTodoComment(editTodoData.comment ? editTodoData.comment : '')
            
            
        }

    }, [editTodoData])

    async function getTodos() {
        //get data coming from url
        const data = await axios.get(link);
        setTodos(data.data.crud)
    }

    const editTodos = (todosData) =>{
        setEditTodoData(todosData);
    
    }


    //add
    async function addToDos(e) {
        //stop the refreshing by submit button
        //e.preventDefault();


        const todoData = {
            //unable to add anything if nothing
            name: todoName ? todoName : undefined,
            comment: todoComment ? todoComment : undefined,
        }

        //Only post data if the editTodoData is not provided
        if(!editTodoData){
            
            await axios.post(link, todoData);
        }else{
            //update data if we do have the editToDodata
            await axios.patch(`http://localhost:5000/api/v1/crud/${editTodoData._id}`, todoData);
            
        }
        
        
        setTodoName('');
        setTodoComment('');
        
        getTodos();
        
        setEditTodoData('');

    }


    const renderTodos = () => {

        let sortedTodos = [...todos];
        sortedTodos = sortedTodos.sort((a,b)=>{
            return new Date(b.createdAt) - new Date(a.createdAt)
        })

        return sortedTodos.map((todo, i) => {
            return <TodoItem key={i} todo={todo} getTodos={getTodos} editTodos={editTodos}/>
        })
    }

    const insertTodos = () => {
        return <div className="Texteditor">
            <form onSubmit={addToDos}>
                <div className="input-control">
                    <input type="text" id="id" placeholder="Enter Name . . ." value={todoName}
                        onChange={(e) =>
                            setTodoName(e.target.value)
                        }
                    required></input>
                </div>

                <div className="input-control">
                    <textarea name="" id="comment" cols="30" rows="5" placeholder="Task Name . . . " value={todoComment}
                        onChange={(e) =>
                            setTodoComment(e.target.value)
                        }
                    ></textarea>
                </div>

                <button className="submit-btn">Add Item</button>


            </form>
        </div>
    }

    return (
        <TodoItemStyled>
           
            {insertTodos()}
            {renderTodos()}
        </TodoItemStyled>
    )
}
//div will be replaced by TodoItemStyled

const TodoItemStyled = styled.div`
    width: 80%;
    display: flex;
    align-items : center;
    flex-direction: column;
    .Texteditor{
        width: 60%;
        padding-top: 4rem;

        form{
            padding-bottom: 5rem;
            .submit-btn{
                padding: .5rem 1.5rem;
                outline: none;
                cursor: pointer;
                background-color: #6BBE92;
                border: none;
                border-radius: 34px;
                color: white;
                box-shadow: 10px 12px 20px rgba(0,0,0, .2);
            }
        }
    }
`;

export default TodoForm;