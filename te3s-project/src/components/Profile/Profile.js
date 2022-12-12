import Name from './ProfileComponents/Name';
import ProfilePicture from './ProfileComponents/ProfilePicture';
import Socials from './ProfileComponents/Socials';

export default function Profile() {
    return (
        <div className='profile-container'>
            <ProfilePicture/>
            <Name/>
            <Socials/>
        </div>
    )
}