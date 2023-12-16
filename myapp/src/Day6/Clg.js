export default function Clg()
{
const college=[{id:1, stdName:"sharon", age:19},
{id:2, stdName:"vish", age:19},
{id:3, stdName:"trisha", age:20},]
const display=college.map((clg)=><li key={clg.id}>{clg.stdName} {clg.age}</li>)
return(
    <div style={{backgroundColor:"powderblue"}}>
        <h1>List of Students</h1>
        {display}
    </div>
)
}