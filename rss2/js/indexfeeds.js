
	
		

	function getRssFeed1(url){
	    var api = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&callback=?&q="
	              + encodeURIComponent(url) + "&num=5&output=json_xml";
	    $.getJSON(api, function(data){
	        $('#div_rss_feed1').html(_getXMLDoc(data.responseData));
	    });
	}
	
	function getRssFeed2(url){
		    var api = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&callback=?&q="
		              + encodeURIComponent(url) + "&num=5&output=json_xml";
		    $.getJSON(api, function(data){
		        $('#div_rss_feed2').html(_getXMLDoc(data.responseData));
		    });
		}	
	function getRssFeed3(url){
		    var api = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&callback=?&q="
		              + encodeURIComponent(url) + "&num=5&output=json_xml";
		    $.getJSON(api, function(data){
		        $('#div_rss_feed3').html(_getXMLDoc(data.responseData));
		    });
		}
	function getRssFeed4(url){
		    var api = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&callback=?&q="
		              + encodeURIComponent(url) + "&num=5&output=json_xml";
		    $.getJSON(api, function(data){
		        $('#div_rss_feed4').html(_getXMLDoc(data.responseData));
		    });
		}		
					
		

	function getRssFeeden(url){
	    var api = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&callback=?&q="
	              + encodeURIComponent(url) + "&num=1&output=json_xml";
	    $.getJSON(api, function(data){
	        $('#div_rss_feeden').html(_getXMLDoc(data.responseData));
	    });
	}
	
	function getRssFeedap(url){
		    var api = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&callback=?&q="
		              + encodeURIComponent(url) + "&num=1&output=json_xml";
		    $.getJSON(api, function(data){
		        $('#div_rss_feedap').html(_getXMLDoc(data.responseData));
		    });
		}	
	function getRssFeedgi(url){
		    var api = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&callback=?&q="
		              + encodeURIComponent(url) + "&num=1&output=json_xml";
		    $.getJSON(api, function(data){
		        $('#div_rss_feedgi').html(_getXMLDoc(data.responseData));
		    });
		}
	function getRssFeedmu(url){
		    var api = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&callback=?&q="
		              + encodeURIComponent(url) + "&num=1&output=json_xml";
		    $.getJSON(api, function(data){
		        $('#div_rss_feedmu').html(_getXMLDoc(data.responseData));
		    });
		}		
					
		function _getXMLDoc(rssData){
			var xml = $.parseXML(rssData.xmlString);
			var retval = "";
			
			$(xml).find("item").each(function()
			{ 
			retval += 
			"<div><h5 class='featurette-heading'>" + $(this).find("title").text() + 
			"</h5><h6>Author: "  + $(this).find("author").text() + 
			"<br/></h6><p>" + $(this).find("description").text() + 
			"</p><h6>Publish Date: " + $(this).find("pubDate").text() + 
			"</h6><h4><a href='#top'>Back to Top</a></h4></div><hr/>";
			});
			return retval;		
			
		}
		
		window.onload = function() { 
			getRssFeeden('http://www.engadget.com/rss.xml'); 
			getRssFeedap('https://developer.apple.com/news/rss/news.rss'); 
			getRssFeedgi('http://feeds.gawker.com/Gizmodo/full'); 
			getRssFeedmu('http://feeds.feedburner.com/makeuseof');
			getRssFeed('http://www.winthrop.edu/news-events/rss/winthropnews.xml');
			getRssFeed1('http://www.engadget.com/rss.xml'); 
			getRssFeed2('https://developer.apple.com/news/rss/news.rss'); 
			getRssFeed3('http://feeds.gawker.com/Gizmodo/full'); 
			getRssFeed4('http://feeds.feedburner.com/makeuseof');  
};