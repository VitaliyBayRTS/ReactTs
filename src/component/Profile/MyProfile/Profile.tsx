import React, { FunctionComponent, useState } from 'react';
import s from './MyProfile.module.scss';
import Preloader from '../../common/Preloader/Preloader';
import UserPhoto from './../../../assets/img/user.jpeg';
import ProfileStatusWithHook from './ProfileStatusWithHook';
import ProfileDataForm from './ProfileDataForm';
import facebook from '../../../assets/img/socialNetworkIcon/facebook.svg';
import github from '../../../assets/img/socialNetworkIcon/github.svg';
import instagram from '../../../assets/img/socialNetworkIcon/instagram.svg';
import mainLink from '../../../assets/img/socialNetworkIcon/mainLink.svg';
import twitter from '../../../assets/img/socialNetworkIcon/twitter.svg';
import vk from '../../../assets/img/socialNetworkIcon/vk.svg';
import website from '../../../assets/img/socialNetworkIcon/website.svg';
import youtube from '../../../assets/img/socialNetworkIcon/youtube.svg';
import cn from 'classnames';
import { profileInfoType } from '../../../types/types';

interface PropsInterface {
    profileInfo: profileInfoType | null,
    status: string,
    isOwner: boolean,
    updateUserStatusThunk: (status: string) => void,
    savePhoto: (photo: File) => void,
    saveProfileInfo: (profile: profileInfoType) => any
}

const MyProfile: FunctionComponent<PropsInterface> = ({profileInfo, ...props}) => {

    let [editMode, setEditMode] = useState(false);

    if(!profileInfo) {
        return <Preloader />
    }

    const selectedPhoto = (e: any) => {
        if(e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (dataForm: any) => {
        props.saveProfileInfo(dataForm).then(() => {
            setEditMode(false)
        })
    }

    return (
        <div>
            <div>
                <div className={s.profileBox}>
                    <div className={s.imgBox}>
                        <img className={s.userPhoto} src={profileInfo.photos.large || UserPhoto} alt=""/>
                        <input type="file" id="file" onChange={selectedPhoto}/>
                        <label htmlFor="file" className={s.btn}>upload</label>
                    </div>
                    <div>
                        { editMode 
                            ? <ProfileDataForm initialValues={profileInfo} onSubmit={onSubmit} /> 
                            : <ProfileData profileInfo={profileInfo} isOwner={props.isOwner} changeEditMode={() => {setEditMode(true)}}/> }
                        <ProfileStatusWithHook isOwner={props.isOwner} status={props.status} updateUserStatusThunk={props.updateUserStatusThunk}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

type ProfileDataType = {
    profileInfo: profileInfoType,
    isOwner: boolean,
    changeEditMode: () => void
}

const ProfileData: FunctionComponent<ProfileDataType> = ({profileInfo, isOwner, changeEditMode}) => {
    return <div>
        {isOwner && <button onClick={changeEditMode}>Edit Information</button>}
        <div>
            <b>Full Name: </b> {profileInfo.fullName}
        </div>
        <div>
            <b>About me: </b> {profileInfo.aboutMe}
        </div>
        <div>
            <b>Looking for a job: </b> {profileInfo.lookingForAJob ? "Yes" : "No"}
        </div>
        <div>
            <b>My profesional skills: </b> {profileInfo.lookingForAJobDescription}
        </div>
        <div >
            <b>Contacts: </b> <div className={s.itemBox}>
                {Object.keys(profileInfo.contacts).map((key: string) => {
                    //@ts-ignore
                    return  <Contacts key={key} contactKey={key} contactValue={profileInfo.contacts[key]}/>
                })}
            </div> 
        </div>
    </div>
}

type iconType = {
    [key:string]: string;
}

const icon: iconType = {
    'facebook': facebook,
    'website': website,
    'vk': vk,
    'twitter': twitter,
    'instagram': instagram,
    'youtube': youtube,
    'github': github,
    'mainLink': mainLink
}

type ContactsType = {
    contactKey: string,
    contactValue: string
}

const Contacts: FunctionComponent<ContactsType> = ({contactKey, contactValue}) => {
    let img = icon[contactKey];
    return <div className={cn({[s.contactItem]: contactValue}, s.default)}>
        <a href={contactValue} target="_blanc">{contactValue && <img src={img} alt={contactKey}/>}</a>
    </div>
}

export default MyProfile;