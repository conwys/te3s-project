import Profile from "../components/Profile/Profile"
import MemberInfo from "../components/MemberInfo/MemberInfo"
import './Members.css'
import { useEffect, useState } from "react";

export default function Members() {

    const [members, setMembers] = useState([{}]);
    
    useEffect(() => {
        
        const getMembers = async() => {
            
            let memberList = await fetch("http://localhost:3001/api/users");
            let memberListData = await memberList.json();
            setMembers(memberListData.payload)

        }

        getMembers();

    },[members])

    return (
        <div className="member-page-content">
            <div className="member-container">
                {members.map((member, i) => (
                    <Profile key={i} name={member.name} yt={member.yt} st={member.st} ds={member.ds}/>
                ))}
            </div>
            <div className="member-information">
                <MemberInfo/>
            </div>
        </div>
    )
}