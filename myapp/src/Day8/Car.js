export default function Car({carName})
{
    if(carName==="JCB")
    {
        throw new Error("JCB is not a car")
    }
    return(
        <div>
            {carName}
        </div>
    )
}