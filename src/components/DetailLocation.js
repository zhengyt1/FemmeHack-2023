// import { useEffect } from "react";

export default function DetailLocation(props) {
    const eventLocation = props.loc;
    var locs = require('../data/locations.json');
    locs = locs.filter(loc => loc.name.includes(eventLocation));
    const upennMapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.515815767868!2d-75.19321369999999!3d39.95221879999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c65a7f3bccc1%3A0x9eaa6a2b2d6fe94!2sUniversity%20of%20Pennsylvania!5e0!3m2!1sen!2sus!4v1676154718677!5m2!1sen!2sus";
    const src = locs.length > 0 ? locs[0].mapUrl : upennMapSrc;
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