import { useState } from "react";

const headerStyle = {
    fontSize: '20px',
    backgroundColor: 'yellow',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
};

export function Header() {
    const [count, setCount] = useState(0);

    function handleLikeClick() {
        setCount(count + 1);
    }

    function handleDislikeClick() {
        setCount(count - 1);
    }

    return (
        <header style={headerStyle}>
            HEADER CONTENT: {count} like
            <button onClick={handleLikeClick} type="button">👍</button>
            <button onClick={handleDislikeClick} type="button">👎</button>
        </header>
    );
}