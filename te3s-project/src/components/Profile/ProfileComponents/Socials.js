import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faSteamSymbol, faYoutube } from '@fortawesome/free-brands-svg-icons'

export default function Socials({ yt, st, ds }) {
    return (
        <div className="socials-container">
            <div className="socials-yt">
                <a href={yt}><FontAwesomeIcon icon={faYoutube}/></a>
            </div>
            <div className="socials-steam">
                <a href={st}><FontAwesomeIcon icon={faSteamSymbol}/></a>
            </div>
            <div className="socials-discord">
                <a href={ds}><FontAwesomeIcon icon={faDiscord}/></a>
            </div>
        </div>
    )
}