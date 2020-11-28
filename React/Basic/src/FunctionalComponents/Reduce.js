import React from 'react';

const Reduce = () => {
    const friends = [
        { money: 12 },
        { money: 121 },
        { money: 100 },
        { money: 122 }
    ]
    return (
        <div>
            <p>
                {
                    friends.reduce((sum, friend) => sum + friend.money, 0)
                }
            </p>
        </div>
    );
};

export default Reduce;