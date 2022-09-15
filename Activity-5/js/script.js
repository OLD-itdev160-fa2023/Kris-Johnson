(function() {

    /**
     * Package Data and constructor object
     */

    //Package Data array(simulated data source, such as JSON or database recordset)
    var data = [
        {
        name:'PathIntellisense',
        description: 'This extension helps to autocomplete filenames. Super useful when writing out paths in markup, or in any file that has path references.',
        author: 'Christian Kohler',
        url:'https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense',
        downloads:7927491,
        stars:107,
        price:0,
        selector:'p1'
        },
        {
        name:'CSSPeak',
        description: 'Extends HTML and Embedded JavaScript templates with Go To Definition support for CSS classes and IDs found in your markup.',
        author: 'Pranay Prakash',
        url:'https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek' ,
        downloads:3381321,
        stars:77,
        price:0,
        selector:'p2'
        },
        {
        name:'OpeninBrowser',
        description: 'This Visual Studio Code extension does exactly what it says: it enables you to view an HTML file in-browser. It opens HTML pages in your default browser, but you can also select “open in other browsers” to open in a different one on right click.',
        author:'TechER',
        url:'https://marketplace.visualstudio.com/items?itemName=techer.open-in-browser',
        downloads:6353378,
        stars:80,
        price:0,
        selector:'p3'
        }
    ];

    function Package(data){
        this.name = data.name;
        this.description = data.description;
        this.author = data.author;
        this.url = data.url;
        this.downloads = data.downloads;
        this.stars = data.stars;
        this.selector= data.selector;

        this.getFormattedDownloads = function(){
            return this.downloads.toLocaleString();
        };

        this.getFormattedStars = function(){
            return this.stars.toLocaleString();
        };
    }

    //utility function

    //Return Today's date, formatted
    var getTodaysDate = function() {
        var today = new Date();
            return today.toDateString();
    };

    //return DOM elements by id
    var getEl= function(id){
        return document.getElementById(id);
    }
    
    //write the package object's data to the
    //appropriate DOM elements utilizing the package selector property.
    var writePackageInfo =function(package){
        var selector = package.selector,
            nameEL= getEl(selector + '-name'),
            descEL= getEl(selector + '-description'),
            authEL= getEl(selector + '-author'),
            downloadEL= getEl(selector + '-downloads'),
            starsEL= getEl(selector + '-stars');
        // Write package to the DOM Elements
            nameEL.textContent = package.name;
            descEL.textContent = package.description;
            authEL.textContent = package.author;
            downloadEL.textContent = package.getFormattedDownloads();
            starsEL.textContent = package.getFormattedStars();
        }

        //write date
        var dateEL = getEl('date');
        dateEL.textContent = getTodaysDate();

        // write data package one-by-one
        var PathIntellisense = new Package(data[0]);
        writePackageInfo(PathIntellisense);

        var CSSPeak = new Package(data[1]);
        writePackageInfo(CSSPeak);

        var OpeninBrowser = new Package(data[2]);
        writePackageInfo(OpeninBrowser);
}());