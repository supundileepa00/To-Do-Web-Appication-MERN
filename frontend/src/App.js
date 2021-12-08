import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm';
import styled from 'styled-components';

function App() {
  return (
    <div>
    
    <AppStyled>
      
      <div className="content-container">
        <TodoForm />
      </div>

    </AppStyled>

    </div>
  );
}


const AppStyled = styled.div`
height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .content-container{
    background-color: #374954;
    width: 80%;
    height: 80vh;
    border-top-left-radius:20px;
    border-bottom-left-radius:20px;
    box-shadow: 10px 12px 20px rgba(0,0,0, .3);
    display: flex;
    align-item: center;
    justify-content: center;
    overflow-y : scroll;
    align-items: flex-start;

    /* width */
    ::-webkit-scrollbar {
      width: 8px;
    }
    
    /* Track */
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px grey; 
      border-radius: 10px;
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: linear-gradient(179.75deg, #EB5757 -12.26%, #4F6877 55.88%);
      border-radius: 10px;
    }

    form{
      input, textarea{
        width: 100%;
        padding:.7rem 1rem;
        font-size: inherit;
        font-family: inherit;
        outline: none;
        border: none;
        border-radius: 15px; 
        box-shadow: 10px 12px 20px rgba(0,0,0, .25);
        margin: .5rem 0;
        background-color: #4F6877;
        color: white;
        ::-webkit-input-placeholder{
          color: white;
          opacity: 0.7;
        }
      }
    }
  }
`;
export default App;
