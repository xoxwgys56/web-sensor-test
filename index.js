// sec
const time_offset = 0.01;
// total collected data count
const max_count = 1500;

const z_value_dom = document.querySelector('#z-value');
const interval_dom = document.querySelector('#interval');

window.addEventListener('devicemotion', event => {
    z_value_dom.innerHTML = event.acceleration.z;
    interval_dom.innerHTML = event.interval;
}, true);

setInterval(function() {
    console.log(window.DeviceMotionEvent.acceleration)
}, 1000)

const test_target = document.querySelector('#test-target');
test_target.innerHTML = String(window.DeviceMotionEvent.acceleration);
