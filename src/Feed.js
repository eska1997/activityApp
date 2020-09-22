import React from 'react'
import './Feed.css'
import { Avatar, IconButton } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import EcoIcon from '@material-ui/icons/Eco';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import DescriptionIcon from '@material-ui/icons/Description';
import FavoriteIcon from '@material-ui/icons/FavoriteBorder';
import ChatIcon from '@material-ui/icons/Chat';
import ShareIcon from '@material-ui/icons/Share';
function Feed() {
    return (
        <div className="feed">
            <div className="feed_body">
                <div className="feed_bodySearch">
                    <div className="feed_bodysearchdiv">
                        <SearchIcon />
                        <input type="text" placeholder="Search"/>
                    </div>
                </div>
                <div className="feed_bodyCard">
                    <div className="feed_bodyCardHeader">
                        <Avatar />
                        <div >
                            <h5>Shreeya Karmacharya</h5>
                            <p>Plantation</p>
                        </div>
                    </div>
                    <div className="feed_bodyCardActivity">
                        <img src="https://scontent.fktm8-1.fna.fbcdn.net/v/t1.0-9/23032784_1843069292381225_7731431363306366087_n.jpg?_nc_cat=108&_nc_sid=174925&_nc_ohc=phEJX4B-L0wAX9xOGpw&_nc_ht=scontent.fktm8-1.fna&oh=d30b647a5bb3d965a0f76d289dd81e81&oe=5F877830" alt="Logo"></img>
                        <div className="feed_bodyCardDetails">
                            <div className="feed_options">
                                <EcoIcon fontSize="small"/><p>Outdoor Activity</p>
                            </div>
                            <div className="feed_options">
                                <CheckCircleIcon fontSize="small"/><p>5 Points</p>
                            </div>
                            <div className="feed_options">
                                <DescriptionIcon fontSize="small"/><p>"Beautiful Girls" is the debut single by reggae-influenced musician Sean Kingston from his eponymous debut; it was first released in 2007, when Kingston was 17. The song samples Ben E. King's classic "Stand by Me". The song is about a boy who is suicidal (or rather "in denial" in the edited version) over the failure of his relationship with a "beautiful girl".</p>
                            </div>
                        </div>
                    </div>
                    <div className="feed_bodyCardhearticon">
                        <IconButton>
                       <FavoriteIcon />                       </IconButton>
                       <IconButton>
                       <ChatIcon />
                       
                       </IconButton>
                       <IconButton>
                           <ShareIcon />
                           
                        </IconButton>  
                    </div>
                </div>
                <div className="feed_bodyCard">
                    <div className="feed_bodyCardHeader">
                        <Avatar />
                        <div >
                            <h5>Shreeya Karmacharya</h5>
                            <p>Plantation</p>
                        </div>
                    </div>
                    <div className="feed_bodyCardActivity">
                        <img src="https://scontent.fktm8-1.fna.fbcdn.net/v/t1.0-9/23172476_1850157258339095_4037203466892361903_n.jpg?_nc_cat=107&_nc_sid=174925&_nc_ohc=635CP4dXUZQAX_sJ8yl&_nc_ht=scontent.fktm8-1.fna&oh=40b5eb4358c497b8a6b780d80220658b&oe=5F86D5FD" alt="s"></img>
                        <div className="feed_bodyCardDetails">
                            <div className="feed_options">
                                <EcoIcon fontSize="small"/><p>Outdoor Activity</p>
                            </div>
                            <div className="feed_options">
                                <CheckCircleIcon fontSize="small"/><p>5 Points</p>
                            </div>
                            <div className="feed_options">
                                <DescriptionIcon fontSize="small"/><p>"Beautiful Girls" is the debut single by reggae-influenced musician Sean Kingston from his eponymous debut; it was first released in 2007, when Kingston was 17. The song samples Ben E. King's classic "Stand by Me". The song is about a boy who is suicidal (or rather "in denial" in the edited version) over the failure of his relationship with a "beautiful girl".</p>
                            </div>
                        </div>
                    </div>
                    <div className="feed_bodyCardhearticon">

                       <FavoriteIcon />
                       <p>Like</p>
                       
                       <IconButton>
                       <ChatIcon />
                       <p>Comment</p>
                       </IconButton>
                       <IconButton>
                           <ShareIcon />
                           <p>Share</p>
                        </IconButton>  
                    </div>
                </div>
                <div className="feed_bodyCard">
                    <div className="feed_bodyCardHeader">
                        <Avatar />
                        <div >
                            <h5>Shreeya Karmacharya</h5>
                            <p>Plantation</p>
                        </div>
                    </div>
                    <div className="feed_bodyCardActivity">
                        <img src="https://scontent.fktm8-1.fna.fbcdn.net/v/t1.0-9/46488464_2388192461202236_2695535313354227712_o.jpg?_nc_cat=108&_nc_sid=174925&_nc_ohc=I_afPzmlbaoAX9HZ_eY&_nc_ht=scontent.fktm8-1.fna&oh=db7ccad8d7509e3156b286b1d0a4351b&oe=5F861CA8" alt=""></img>
                        <div className="feed_bodyCardDetails">
                            <div className="feed_options">
                                <EcoIcon fontSize="small"/><p>Outdoor Activity</p>
                            </div>
                            <div className="feed_options">
                                <CheckCircleIcon fontSize="small"/><p>5 Points</p>
                            </div>
                            <div className="feed_options">
                                <DescriptionIcon fontSize="small"/><p>"Beautiful Girls" is the debut single by reggae-influenced musician Sean Kingston from his eponymous debut; it was first released in 2007, when Kingston was 17. The song samples Ben E. King's classic "Stand by Me". The song is about a boy who is suicidal (or rather "in denial" in the edited version) over the failure of his relationship with a "beautiful girl".</p>
                            </div>
                        </div>
                    </div>
                    <div className="feed_bodyCardhearticon">

                       <FavoriteIcon />
                       <p>Like</p>
                       
                       <IconButton>
                       <ChatIcon />
                       <p>Comment</p>
                       </IconButton>
                       <IconButton>
                           <ShareIcon />
                           <p>Share</p>
                        </IconButton>  
                    </div>
                </div>               
            </div>
        </div>
    )
}

export default Feed
