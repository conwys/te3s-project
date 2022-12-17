import Profile from "../components/Profile/Profile"
import MemberInfo from "../components/MemberInfo/MemberInfo"
import './Members.css'
import { useEffect, useState } from "react";

export default function Members() {

    const [members, setMembers] = useState([{}]);
    // const [profilePic, setProfilePic] = useState("");

    useEffect(() => {
        
        const getMembers = async() => {
            
            let memberList = await fetch("http://localhost:3001/api/users");
            let memberListData = await memberList.json();
            setMembers(memberListData.payload)

        }
 
        getMembers();

    },[])

    return (
        <div className="member-page-content">
            <div className="member-container">
                {members.map((member, i) => {
                    return (
                        <Profile key={i} name={member.name} pfp={"hello"} yt={member.yt} ds={member.ds} st={member.st}/>
                    )
                })}
            </div>
            <div className="member-information">
                <MemberInfo/>
            </div>
        </div>
    )
}