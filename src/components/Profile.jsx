const Profile = ({
    username, 
    tag,
    location,
    avatar, 
    stats, 
}) => {
    return (
    <div className="profile">
        <div className="description">
            <img
                src= {avatar}
                alt="User avatar"
                className="avatar"
            />
            <p className="name">{username}</p>
            <p className="tag">@{tag}</p>
            <p class="location">{location}</p>
        </div>

        <ul className="stats">
            <li>
                <span className="label">Followers</span>
                <span className="quantity">{stats.followers}</span>
            </li>
            <li>
                <span className="label">Views</span>
                <span class="quantity">{stats.views}</span>
            </li>
            <li>
                <span className="label">Likes</span>
                <span class="quantity">{stats.likes}</span>
            </li>
        </ul>
    </div>
    );
};

export default Profile;