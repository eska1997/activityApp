import React from 'react'
import './SideBar.css'
import {Avatar, Button, ButtonBase, ButtonGroup} from '@material-ui/core'

function SideBar() {
    return (
        <div className="sideBar">
            <div className="sideBar_profile">
               
               <div className="sideBar_profileHeader"> 
                <Avatar src="https://scontent.fktm8-1.fna.fbcdn.net/v/t1.0-9/48413418_2448712341816914_3074408500386856960_o.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_ohc=kx4pibYwtxIAX8bKCa5&_nc_ht=scontent.fktm8-1.fna&oh=7c6bde1c49ef3ad1a52cdb387b4b9730&oe=5F873F1D"/>
                <h5>Shreeya Karmacharya</h5>
                <p>Live your life to the fullest because YOLO</p>
                </div>

                <div className="sideBar_profileBody">
                    <button>Like</button>
                    <button>Message</button>
                    <button />
                </div>            
            </div>
            <div className="sideBar_action">
                <h5>I am action button section</h5>
                <ButtonGroup>
                    <Button>Hi</Button>
                </ButtonGroup>
            </div>
        </div>
    )
}

export default SideBar
