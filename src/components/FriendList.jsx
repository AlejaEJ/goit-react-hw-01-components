import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem";
import css from "./FriendList.module.css"

const FriendList = ({ friends }) => {
    return (
        <ul className={css["friend-list"]}>
            {friends.map((friend) => (
                <FriendListItem key={friend.id} friend={friend} />
            ))}
        </ul>
    );
};

FriendListItem.propTypes = {
    friend: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        }) 
    ),
};

export default FriendList;
