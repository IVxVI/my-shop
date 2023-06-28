import { Categories } from "../../Types/Categories"

type Props = {
  handleCategoryChange: (arg: React.ChangeEvent) => void,
}

const SelectDropdown: React.FC<Props> = ({handleCategoryChange}) => {  
  return (
    <div className="category">
      <span>Choose a category:</span>
      <select onChange={handleCategoryChange} className="category__select">
        <option className="category__option" value={Categories.ALL}>All</option>
        <option className="category__option" value={Categories.PARFUM}>Parfums</option>
        <option className="category__option" value={Categories.SKINCARE}>Skincare</option>
        <option className="category__option" value={Categories.BODY_CARE}>Body-care</option>
        <option className="category__option" value={Categories.FACE_CARE}>Face-care</option>
        <option className="category__option" value={Categories.HAIR_CARE}>Hair-care</option>
        <option className="category__option" value={Categories.ACCESSORIES}>Accessories</option>
      </select>
    </div>
  )
}

export default SelectDropdown;