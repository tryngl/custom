CXBus.configure({debug: true, pluginsPath: 'https://apps.mypurecloud.com/widgets/9.0/plugins/'}); // determines the pluginsPath

// Create a plugin (or reuse your own if you have one already)
var oCore = CXBus.registerPlugin("myCore");

// Use before function to intercept 'WebChat.open' command
// and manipulate the input 'options' object before execution continues
oCore.subscribe("WebChat.opened", function(options){
  // Disable start chat button
  document.getElementsByClassName("cx-submit cx-btn cx-btn-primary i18n")[0].disabled = true;
});