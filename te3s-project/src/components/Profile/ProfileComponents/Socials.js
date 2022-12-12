

export default function Socials({ yt, st, ds }) {
    return (
        <div className="socials-container">
            <div className="socials-yt">
                <a href={yt}>Hi</a>
            </div>
            <div className="socials-steam">
                <a href={st}>Hi</a>
            </div>
            <div className="socials-discord">
                <a href={ds}>Hi</a>
            </div>
        </div>
    )
}