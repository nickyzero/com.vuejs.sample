var app = new Vue({
    el: "#app",
    data: {
        message : "Hello webOS OpenSourceEdition World! - Vue.js",
        timezone : "",
        date: ""
    },
    methods:{
        setLocalTime: function(args){
            this.date = args.year + " / " + args.month + " / " + args.day;
        },
        setTimeZone: function(args){
            this.timezone = args;
        }
    }
});

//sample code for calling LS2 API
var lunaReq= webOS.service.request("luna://com.webos.service.systemservice",
{
     method:"time/getSystemTime",
     parameters:{},
     onSuccess: function (args) {
         console.log("UTC:", args.utc);
         app.setLocalTime(args.localtime);
         app.setTimeZone(args.timezone);
     },
     onFailure: function (args) {
         app.setLocalTime(args.errorText);
         app.setTimeZone(args.errorText);
     }
 });