import React from 'react'
import './Events.css'

function Events() {
    return (
        <div className="events">
            <div className="events_body">
                <div className="events_bodyCard">
                    <img src={require('../src/innovativecrew.jpg')} alt="" />
                    <h6 className="event_bodyCardTitle">Stay Home Stay Safe</h6>
                    <p className="event_bodyCardDesc">20th june 2020</p>
                </div>
                <div className="events_bodyCard">
                    <img src="https://www.laijau.com/wp-content/uploads/2018/08/events.jpg" alt="" />
                    <h6 className="event_bodyCardTitle">Online Musical Night</h6>
                    <p className="event_bodyCardDesc">20th june 2020</p>
                </div>
                <div className="events_bodyCard">
                    <img src="https://www.commpartners.com/wp-content/uploads/2018/11/community-virtualevents.jpg" alt=""/>
                    <h6 className="event_bodyCardTitle">Stay Home Stay Safe</h6>
                    <p className="event_bodyCardDesc">20th june 2020</p>
                </div>
                <div className="events_bodyCard">Event</div>
                <div className="events_bodyCard">Event</div>
                <div className="events_bodyCard">Event</div>
            </div>
        </div>
    )
}

export default Events
