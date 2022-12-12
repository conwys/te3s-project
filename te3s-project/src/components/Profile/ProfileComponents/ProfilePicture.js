export default function ProfilePicture({ pfp }) {
    return (
        <div className="profile-picture">
            <img src={pfp} alt="pfp"></img>
        </div>
    )
}