import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function Socials({ yt, st, ds }) {
    return (
        <div className="socials-container">
            <div className="socials-yt">
                <a href={yt}><FontAwesomeIcon icon={brands('youtube')}/></a>
            </div>
            <div className="socials-steam">
                <a href={st}><FontAwesomeIcon icon={brands('steam-symbol')}/></a>
            </div>
            <div className="socials-discord">
                <a href={ds}><FontAwesomeIcon icon={brands('discord')}/></a>
            </div>
        </div>
    )
}