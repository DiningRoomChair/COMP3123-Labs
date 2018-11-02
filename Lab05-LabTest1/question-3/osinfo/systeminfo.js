var os = require("os");

exports.getSystemInfo = function(){
    cpu = os.arch();
    hostname = os.hostname();
    osName = os.type();

    return "CPU: " + cpu + "Host Name: " + "Name: " + osName;
}

exports.getUserInfo = function(){
    userInfo = os.userInfo();
    userName = userInfo.userName;
    homeDir = userInfo.homeDir

    return "User name: " + userName + "Home dir: " + homeDir;
}