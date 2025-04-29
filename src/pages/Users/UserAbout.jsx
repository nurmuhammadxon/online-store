import React from 'react';

function UserAbout() {
    const user = JSON.parse(sessionStorage.getItem('user'));
    console.log(user);

    return (
        <>
            <div className='w-full'>
                <h1>
                    {user.userName}
                </h1>
            </div>
        </>
    );
}

export default UserAbout;
