export default function MemberInfo({ memberCount , }) {
    return (
        <div className="member-info-container">
            <div className="member-info-heading">
                <h1>member info</h1>
            </div>
            <div className="member-info-body">
                <p>members: {memberCount}</p>
            </div>
        </div>
    )
}