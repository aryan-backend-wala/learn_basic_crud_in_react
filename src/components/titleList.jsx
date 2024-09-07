export default function TitleList({
  titles, 
  onDeleteTitle, onEditTitle
}){
  return (
    <>
      {titles.map(title => <div className="container" key={title.id}>
        <p>{title.title}</p>
        <button onClick={() => onDeleteTitle(title.id)}>Delete</button>
        <button onClick={() => onEditTitle(title.id)}>Edit</button>
      </div>)}
    </>
  );
}