import React from 'react'
// widgets
import ButtonTwo from '../../widgets/ButtonTwo'
import TextInput from '../../widgets/TextInput'

const Profile = () => {
    return <section>
        <div className="head">My Profile</div>
        <div className="small">Feel free to edit any of your details below so your account is totally up to date.</div>
        <form>
            <TextInput
                label="Phone"
                type="phone"
                styling="bg-white"
                label_size={16}
            />
            <TextInput
                label="Address"
                type="address"
                styling="bg-white"
                label_size={16}
            />
            <TextInput
                label="City"
                type="text"
                styling="bg-white"
                label_size={16}
            />
            <div className="button-container">
                <span>
                    <ButtonTwo
                        text="Save Changes"
                        styling="bg-primary half-input"
                    />
                </span>
            </div>
        </form>
    </section>
}

export default Profile
