// sec
const time_offset = 0.01;
// total collected data count
const max_count = 1500;

const z_value_dom = document.querySelector('#z-value');
const interval_dom = document.querySelector('#interval');

const test_target = document.querySelector('#test-target');

let flag = false

const onMotionEvent = (e) => {
    // if (flag) {
    z_value_dom.innerHTML = e.acceleration.z;
    interval_dom.innerHTML = Date.now();
    test_target.innerHTML = 'measure...!'
    // }else {
    //     test_target.innerHTML = 'wait...'
    // }
}

const interal_func = setInterval(function() {
    flag != flag

    console.log(flag)
}, 100)


test_target.innerHTML = String(window.DeviceMotionEvent);

DeviceOrientationEvent.requestPermission();

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
                else {
                    // else case
                }
            })
                .catch( console.error )
        } else {
            alert( "DeviceMotionEvent is not defined" );
        }
    }
    const btn = document.getElementById( "request" );
    btn.addEventListener( "click", permission );

window.addEventListener('devicemotion', onMotionEvent, true);
