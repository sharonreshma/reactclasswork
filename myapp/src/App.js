import PropsFunctional from "./Day4/PropsFunctional.js";
import PropClass from "./Day4/PropClass.js";
import PropsFunctionalEx1 from "./Day4/PropsFunctionalEx1.js";
import ArrowProps from "./Day4/ArrowProps.js";
import StateClassCom from "./Day4/StateClassCom.js";
import StateFunction from "./Day4/StateFunction.js";
import StateHoldObject from "./Day4/StateHoldObject.js";
import DynamicRendering from "./Day4/DynamicRendering.js";
import TwoWayBinding from "./Day4/TwoWayBinding.js";
export default function App()
{

return(
  <div>
    <PropsFunctional name="Sharon" college="SKCT"></PropsFunctional>
    <PropClass college="SKCT"></PropClass>
    <PropsFunctionalEx1 college="SKCT"place ="coimbatore"></PropsFunctionalEx1>
    <ArrowProps place="cbe"></ArrowProps>
    <StateClassCom color="lavaender" price="120"></StateClassCom>
<StateFunction ></StateFunction>
<StateHoldObject></StateHoldObject>
<DynamicRendering></DynamicRendering>
<TwoWayBinding></TwoWayBinding>
  </div>
)
}