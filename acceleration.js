const z_value_dom = document.querySelector('#z-value');
const interval_dom = document.querySelector('#interval');

// let acl = new Accelerometer({frequency: 100});

// acl.addEventListener('reading', () => {
//     console.log("Acceleration along the X-axis " + acl.x);
//     console.log("Acceleration along the Y-axis " + acl.y);
//     console.log("Acceleration along the Z-axis " + acl.z);

//     z_value_dom.innerHTML = "Acceleration along the Z-axis " + acl.z
//   });
  
//   acl.start();

if (DeviceMotionEvent && typeof DeviceMotionEvent.requestPermission == "function") {
    DeviceMotionEvent.requestPermission();
}