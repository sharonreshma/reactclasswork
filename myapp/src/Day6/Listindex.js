export default function Listindex()
{
    const animals=["dog","cat","lion","tiger"]
    const result=animals.map((ani,index)=><li key={index}>{index}=>{ani}</li>)
    return(
        <div>
      <ul type="none">
        {result}
      </ul>
        </div>
    )
}
