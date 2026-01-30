import { Outlet } from "react-router-dom"
import SecondHeader from "../components/SecondHeader"
function SubAdmin() {
    return (
        <div className="bg-[#434c5d] text-white">
            <SecondHeader />
            <Outlet/>
        </div>
    )
}

export default SubAdmin
