import React, { FunctionComponent } from 'react';
import s from './MyProfile.module.scss';
import Preloader from '../../common/Preloader/Preloader';

interface PropsInterface {
    profileInfo: any
}

const MyProfile: FunctionComponent<PropsInterface> = (props) => {
    console.log(!props.profileInfo)
    if(!props.profileInfo) {
        return <Preloader />
    }
    debugger;
    return (
        <div>
            <div >
                <div>
                    <img src="https://png.pngtree.com/thumb_back/fh260/background/20191010/pngtree-blue-glitter-dreamy-background-image_317748.jpg" alt="" />
                </div>
                <div>
                    <img src={props.profileInfo.profile.photos.small} alt=""/>
                    ava + description
                </div>
            </div>
        </div>
    )
}

export default MyProfile;