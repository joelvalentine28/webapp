//Joel Valentine
//File contains functions to return news from the reddit api


$(function(){
     
     
    //This function returns the output which will be displayed into the html page.  
    function htmlOutput(html) {
        html += '</ul>';
        $('#content').html(html);
    }
    
    
    //This function pulls posts from reddit specifically from the lib dem reddit feed.
    $('#subLID').click(function(){
        event.preventDefault();
        var requrl = "https://www.reddit.com/r/LibDem/";
        var fullurl = requrl + ".json";
        $.getJSON(fullurl, function(json){
            var listing = json.data.children;
            var html = '<ul class="linklist">\n';
            for(var i=0, l=5; i<l; i++) {
                var obj = listing[i].data;
                var votes     = obj.score;
                var title     = obj.title;
                var subtime   = obj.created_utc;
                var thumb     = obj.thumbnail;
                var subrdt    = "/r/"+obj.subreddit;
                var redditurl = "http://www.reddit.com"+obj.permalink;
                var subrdturl = "http://www.reddit.com/r/"+obj.subreddit+"/";
                var exturl    = obj.url;
                var timeago = timeSince(subtime);
                if(obj.thumbnail === 'default' || obj.thumbnail === 'nsfw' || obj.thumbnail === '')
                    thumb = 'img/default-thumb.png';
                html += '<li class="clearfix">\n';
                html += '<img src="'+thumb+'" class="thumbimg">\n';
                html += '<div class="linkdetails"><h2>'+title+'</h2>\n';
                html += '<p class="subrdt">posted to <a href="'+subrdturl+'" target="_blank">'+subrdt+'</a> '+timeago+'</p>';
                html += '<p><a href="'+exturl+'" class="blubtn" target="_blank">visit link</a> - <a href="'+redditurl+'" class="blubtn" target="_blank">view on reddit</a></p>';
                html += '</div></li>\n';
            } 
            htmlOutput(html);
        });
    });
    
    
    //This function pulls posts from reddit specifically from the green party reddit feed.    
	$('#subGRE').click(function(){
        event.preventDefault();
        var requrl = "https://www.reddit.com/r/GreenParty";
        var fullurl = requrl + ".json";
        $.getJSON(fullurl, function(json){
            var listing = json.data.children;
            var html = '<ul class="linklist">\n';
            for(var i=0, l=5; i<l; i++) {
                var obj = listing[i].data;
                var votes     = obj.score;
                var title     = obj.title;
                var subtime   = obj.created_utc;
                var thumb     = obj.thumbnail;
                var subrdt    = "/r/"+obj.subreddit;
                var redditurl = "http://www.reddit.com"+obj.permalink;
                var subrdturl = "http://www.reddit.com/r/"+obj.subreddit+"/";
                var exturl    = obj.url;
                var timeago = timeSince(subtime);
                if(obj.thumbnail === 'default' || obj.thumbnail === 'nsfw' || obj.thumbnail === '')
                    thumb = 'img/default-thumb.png';
                html += '<li class="clearfix">\n';
                html += '<img src="'+thumb+'" class="thumbimg">\n';
                html += '<div class="linkdetails"><h2>'+title+'</h2>\n';
                html += '<p class="subrdt">posted to <a href="'+subrdturl+'" target="_blank">'+subrdt+'</a> '+timeago+'</p>';
                html += '<p><a href="'+exturl+'" class="blubtn" target="_blank">visit link</a> - <a href="'+redditurl+'" class="blubtn" target="_blank">view on reddit</a></p>';
                html += '</div></li>\n';
            } 
            htmlOutput(html);
        }); 
    }); 
    
    
    //This function pulls posts from reddit specifically from the labour party reddit feed.
	$('#subLAB').click(function(){
        event.preventDefault();
        var requrl = "https://www.reddit.com/r/LabourUK";
        var fullurl = requrl + ".json";
        $.getJSON(fullurl, function(json){
            var listing = json.data.children;
            var html = '<ul class="linklist">\n';
            for(var i=0, l=5; i<l; i++) {
                var obj = listing[i].data;
                var votes     = obj.score;
                var title     = obj.title;
                var subtime   = obj.created_utc;
                var thumb     = obj.thumbnail;
                var subrdt    = "/r/"+obj.subreddit;
                var redditurl = "http://www.reddit.com"+obj.permalink;
                var subrdturl = "http://www.reddit.com/r/"+obj.subreddit+"/";
                var exturl    = obj.url;
                var timeago = timeSince(subtime);
                if(obj.thumbnail === 'default' || obj.thumbnail === 'nsfw' || obj.thumbnail === '')
                    thumb = 'img/default-thumb.png';
                html += '<li class="clearfix">\n';
                html += '<img src="'+thumb+'" class="thumbimg">\n';
                html += '<div class="linkdetails"><h2>'+title+'</h2>\n';
                html += '<p class="subrdt">posted to <a href="'+subrdturl+'" target="_blank">'+subrdt+'</a> '+timeago+'</p>';
                html += '<p><a href="'+exturl+'" class="blubtn" target="_blank">visit link</a> - <a href="'+redditurl+'" class="blubtn" target="_blank">view on reddit</a></p>';
                html += '</div></li>\n';
            } 
            htmlOutput(html);
        }); 
    }); 
    
    
    //This function pulls posts from reddit specifically from the conserrvetive party reddit feed.
    $('#subCON').click(function(){
        event.preventDefault();
        var requrl = "https://www.reddit.com/r/UKConservative";
        var fullurl = requrl + ".json";
        $.getJSON(fullurl, function(json){
            var listing = json.data.children;
            var html = '<ul class="linklist">\n';
            for(var i=0, l=5; i<l; i++) {
                var obj = listing[i].data;
                var votes     = obj.score;
                var title     = obj.title;
                var subtime   = obj.created_utc;
                var thumb     = obj.thumbnail;
                var subrdt    = "/r/"+obj.subreddit;
                var redditurl = "http://www.reddit.com"+obj.permalink;
                var subrdturl = "http://www.reddit.com/r/"+obj.subreddit+"/";
                var exturl    = obj.url;
                var timeago = timeSince(subtime);
                if(obj.thumbnail === 'default' || obj.thumbnail === 'nsfw' || obj.thumbnail === '')
                    thumb = 'img/default-thumb.png';
                html += '<li class="clearfix">\n';
                html += '<img src="'+thumb+'" class="thumbimg">\n';
                html += '<div class="linkdetails"><h2>'+title+'</h2>\n';
                html += '<p class="subrdt">posted to <a href="'+subrdturl+'" target="_blank">'+subrdt+'</a> '+timeago+'</p>';
                html += '<p><a href="'+exturl+'" class="blubtn" target="_blank">visit link</a> - <a href="'+redditurl+'" class="blubtn" target="_blank">view on reddit</a></p>';
                html += '</div></li>\n';
            }
            htmlOutput(html);
        }); 
    });
    
    
	//This function returns the timescale of which the post was posted for instance yesterday would be "1 day ago"
    function timeSince(date) {
        var seconds = Math.floor(((new Date().getTime()/1000) - date))
        var interval = Math.floor(seconds / 31536000);
        if (interval >= 1) {
            if(interval == 1) return interval + " year ago";
            else
                return interval + " years ago";
        }
        interval = Math.floor(seconds / 2592000);
        if (interval >= 1) {
            if(interval == 1) return interval + " month ago";
            else
                return interval + " months ago";
        }
        interval = Math.floor(seconds / 86400);
        if (interval >= 1) {
            if(interval == 1) return interval + " day ago";
            else
                return interval + " days ago";
        }
        interval = Math.floor(seconds / 3600);
        if (interval >= 1) {
            if(interval == 1) return interval + " hour ago";
            else
                return interval + " hours ago";
        }
        interval = Math.floor(seconds / 60);
        if (interval >= 1) {
            if(interval == 1) return interval + " minute ago";
            else
                return interval + " minutes ago";
        }
        return Math.floor(seconds) + " seconds ago";
    }
});