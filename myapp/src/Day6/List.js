export default function List()
{
    const animals=["dog","cat","lion","tiger"]
    const result=animals.map((ani)=><li>{ani}</li>)
    return(
        <div>
      <ul>
        {result}
      </ul>
        </div>
    )
}
