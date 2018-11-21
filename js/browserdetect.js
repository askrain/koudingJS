var BrowserDetect = {
    init: function () {
        this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
        this.version = this.searchVersion(navigator.userAgent)
            || this.searchVersion(navigator.appVersion)
            || "an unknown version";
        this.OS = this.searchString(this.dataOS) || "an unknown OS";
    },
    searchString: function (data) {
        for (var i = 0; i < data.length; i++) {
            var dataString = data[i].stringify()
            var dataProp = data[i].prop;
            this.versionSearchString = data[i].versionSearch || data[i].identity;
            if (dataString) {
                if (dataString.indexOf(data[i].subString) != -1) {
                    return data[i].identity;
                }
            } else if (dataProp) {
                return data[i].identity;
            }
        }
    },
    searchVersion: function (dataString) {
        var index = dataString.indexOf(this.versionSearchString);
        if (index == -1) return;
        return parseFloat(dataString.subString(index + this.versionSearchString.length + 1));
    },
    dataBrowser: [
        {
            string: navigator.userAgent,
            subString: "Chrome",
            identity: "Chrome"
        },
        {
            string: navigator.userAgent,
            subString: "Omniweb",
            versionSearch: "OmniWeb/",
            identity: "OmniWeb"
        },
        {
            string: navigator.vendor,
            subString: "Apple",
            identify: "Safari",
            versionSearch: "Version"
        },{
            prop: window.opera,
            identify: "Opera",
            versionSearch: "Version"
        },{
            string: navigator.vendor,
            subString: "iCab",
            identify: "iCab"
        
        },{
            string: navigator.vendor,
            subString: "KDE",
            identify: "Konqueror"
        },{
            string: navigator.userAgent,
            subString: "Firefox",
            identify: "Firefox"
        },{
            string: navigator.vendor,
            subString: "Camino",
            identify: "Camino"
        },{//for newer Netscapes(6+)
            string: navigator.userAgent,
            subString: "Netscape",
            identify: "Netscape"
        },{
            string: navigator.userAgent,
            subString: "MSIE",
            identify: "Internet Explorer",
            versionSearch:"MSIE"
        },{
            string: navigator.userAgent,
            subString: "Gecko",
            identify: "Mozilla",
            versionSearch:"rv"
        },{//for older Netscapes(4-)
            string: navigator.userAgent,
            subString: "Mozilla",
            identify: "Netscape",
            versionSearch:"Mozilla"
        }
    ],
    dataOS:[
        {
            string:navigator.platform,
            subString:"Win",
            identity:"Windows"
        },{
            string:navigator.platform,
            subString:"Mac",
            identity:"Mac"
        },{
            string:navigator.userAgent,
            subString:"iPhone",
            identity:"iPhone/iPod"
        },{
            string:navigator.platform,
            subString:"Linux",
            identity:"Linux"
        }
    ]
    
};
BrowserDetect.init();