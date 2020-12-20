// sec
const time_offset = 0.01;
// total collected data count
const max_count = 1500;

DeviceMotionEvent.acceleration;

const z_value_dom = document.querySelector('#z-value');
const interval_dom = document.querySelector('#interval');

window.addEventListener('devicemotion', event => {
    z_value_dom.innerHTML = event.acceleration.z;
    interval_dom.innerHTML = event.interval
});
