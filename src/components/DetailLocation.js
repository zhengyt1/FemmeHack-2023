// import { useEffect } from "react";

export default function DetailLocation(props) {
    const eventLocation = props.loc;
    var locs = require('../data/locations.json');
    locs = locs.filter(loc => loc.name === eventLocation);
    const src = locs.length > 0 ? locs[0].mapUrl : "";
    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '100vh', width: '100%' }}>
            <iframe
                src={src}
                width="600"
                height="450"
                allowFullScreen=""
                loading="lazy"
                title="locMap"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    );
}