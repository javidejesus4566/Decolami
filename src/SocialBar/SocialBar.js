import React from 'react';
//import './SocialBar.css';
import { SocialIcon } from 'react-social-icons';

const WIDTH = 45;
const HEIGHT = 45;
const SocialBar = () => {

    return (
        <>
            <div class="icon-bar">
                <a href="#" class="whatsapp" >
                    <SocialIcon
                        style={{ height: HEIGHT, width: WIDTH, }}
                        fgColor="#FFFFFF"
                        network="whatsapp"
                        url="https://wa.me/message/KU3PFKBWT6BGB1"
                        target="https://wa.me/message/KU3PFKBWT6BGB1"
                    />
                </a>
                <a href="#" class="facebook">
                    <SocialIcon
                        fgColor="#FFFFFF"
                        style={{ height: HEIGHT, width: WIDTH }}
                        url="https://www.facebook.com/decolamird-104257594327220"
                        target="https://www.facebook.com/decolamird-104257594327220"
                    />
                </a>
                <a href="#" class="instagram">
                    <SocialIcon
                        fgColor="#FFFFFF"
                        style={{ height: HEIGHT, width: WIDTH }}
                        url="https://www.instagram.com/decolamird/?"
                        target="https://www.instagram.com/decolamird/?"

                    />
                </a>
            </div>
        </>
    )
}

export default SocialBar;