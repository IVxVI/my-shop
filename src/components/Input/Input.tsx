import { XCircle } from "react-feather"

type Props = {
  inputValue: string,
  query: string | null,
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleQueryClear: () => void
}

const Input: React.FC<Props> = ({ inputValue, query, handleInputChange, handleQueryClear }) => {
  return (
    <div className="input__group">      
      <input 
        className="input__field" 
        type="text" 
        name="search" 
        id="search"
        placeholder='You can find anything here!'
        onChange={handleInputChange} 
        value={inputValue}
      />
      {
        !!query?.length && (
          <button 
            className="input__clear" 
            onClick={handleQueryClear}
            title='Clear'
          >
            <XCircle color='#000'/> 
          </button>
        ) 
      }
    </div>
  )
}

export default Input;