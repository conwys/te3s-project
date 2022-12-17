import Name from './ProfileComponents/Name';
import ProfilePicture from './ProfileComponents/ProfilePicture';
import Socials from './ProfileComponents/Socials';
import './Profile.css';

export default function Profile({ name, pfp, yt, st, ds }) {

    return (
        <div className='profile-container'>
            <ProfilePicture pfp={pfp}/>
            <Name name={name}/>
            <Socials yt={yt} st={st} ds={ds}/>
        </div>
    )
}