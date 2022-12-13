import Profile from "../components/Profile/Profile"
import MemberInfo from "../components/MemberInfo/MemberInfo"
import './Members.css'

export default function Members() {
    return (
        <div className="member-page-content">
            <div className="member-container">
                <Profile/>
                <Profile/>
                <Profile/>
                <Profile/>
                <Profile/>
                <Profile/>
                <Profile/>
                <Profile/>
            </div>
            <div class="member-information">
                <MemberInfo/>
            </div>
        </div>
    )
}