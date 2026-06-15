function showMatchReminder(){

if(Notification.permission==="granted"){

new Notification(
"UEFA Champions League",
{
body:
"Real Madrid vs Arsenal 10 daqiqadan keyin boshlanadi!"
}
);

}

}

function requestPermission(){

Notification.requestPermission();

}