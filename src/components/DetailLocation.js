// import { useEffect } from "react";

export default function DetailLocation(props) {
    const eventLocation = props.loc;
    var locs = require('../data/locations.json');
    locs = locs.filter(loc => loc.name.includes(eventLocation));
    const src = locs.length > 0 ? locs[0].mapUrl : "";
    return (
        // Important! Always set the container height explicitly
        <div style={{ margin: '30px', height: '40vh', width: '70%' }}>
            <iframe
                src={src}
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                title="locMap"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    );
}