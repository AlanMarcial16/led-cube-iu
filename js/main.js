let clientId = `client_id_${Math.floor((Math.random()*1000000)+1)}`
let client = new Paho.MQTT.Client("driver.cloudmqtt.com", 38594, clientId);
client.onConnectionLost = onConnectionLost
client.onMessageArrived = onMessageArrived

let options = {
    useSSL:true,
    userName: "zrbouvpv",
    password: "-_z_R0C9DGkT",
    onSuccess:onConnect,
    onFailure:onConnectionLost
}
client.connect(options);

function onConnect() {
    console.log(clientId)

    $("#circle-status").removeClass("disconnect")
    $("#circle-status").addClass("connected")
    client.subscribe("salida");
}

function disconnectClient(){
    client.disconnect()
    $("#circle-status").removeClass("connected")
    $("#circle-status").addClass("disconnected")
    console.log("Cliente desconectado")
}

function command(mensaje){
    console.log(mensaje)
    message = new Paho.MQTT.Message(mensaje)
    message.destinationName = "entrada"
    client.send(message)
}

function onConnectionLost(responseObject) {
if (responseObject.errorCode !== 0) {
    console.log("onConnectionLost:"+responseObject.errorMessage);
    $("#circle-status").removeClass("connected")
    $("#circle-status").addClass("disconnected")
    }
}

function doFail(e){
    console.log(e)
}

function onMessageArrived(message) {
    console.log("Un mensaje ha llegado :"+message.payloadString);
    $("#display").html(message.payloadString)
}