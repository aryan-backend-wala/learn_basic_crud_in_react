export default function TitleList({
  titles, 
  onDeleteTitle, onEditTitle
}){
  return (
    <>
      {titles.map(title => <li key={title.id}>
        {title.title}
        <button onClick={() => onDeleteTitle(title.id)}>Delete</button>
        <button onClick={() => onEditTitle(title.id)}>Edit</button>
      </li>)}
    </>
  );
}