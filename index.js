// sec
const time_offset = 0.01;
// total collected data count
const max_count = 1500;

const z_value_dom = document.querySelector('#z-value');
const interval_dom = document.querySelector('#interval');

// window.addEventListener('devicemotion', event => {
//     z_value_dom.innerHTML = event.acceleration.z;
//     interval_dom.innerHTML = event.interval;
// }, true);

let count = 0;

const interal_func = setInterval(function() {
    // console.log(window.DeviceMotionEvent.acceleration)
    z_value_dom.innerHTML = window.DeviceMotionEvent.acceleration.z
    interval_dom.innerHTML = count++;
}, 1000)

console.log(interal_func)

const test_target = document.querySelector('#test-target');
test_target.innerHTML = String(window.DeviceMotionEvent);


if ( location.protocol != "https:" ) {
    location.href = "https:" + window.location.href.substring( window.location.protocol.length );
    }

    function permission () {
        if ( typeof( DeviceMotionEvent ) !== "undefined" && typeof( DeviceMotionEvent.requestPermission ) === "function" ) {
            // (optional) Do something before API request prompt.
            DeviceMotionEvent.requestPermission()
                .then( response => {
                // (optional) Do something after API prompt dismissed.
                if ( response == "granted" ) {
                    window.addEventListener( "devicemotion", (e) => {
                        // do something for 'e' here.
                    })
                }
            })
                .catch( console.error )
        } else {
            alert( "DeviceMotionEvent is not defined" );
        }
    }
    const btn = document.getElementById( "request" );
    btn.addEventListener( "click", permission );