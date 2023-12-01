
export const Item = ({item, cardIndex, taskIndex, updateTask}) => {

    const handleClick = (e) => {
        e.preventDefault();
        const action = e.target.id;
        updateTask(cardIndex, taskIndex, action)
    }
  return (
    <div className="item">
        <p onClick={handleClick} id='prev'>prev</p>
        <p>{item}</p>
        <p onClick={handleClick} id='next'>next</p>
    </div>
  )
}
