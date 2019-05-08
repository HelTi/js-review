var str = '<p><image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJAQMAAADaX5RTAAAAA3NCSVQICAjb4U/gAAAABlBMVEX///+ZmZmOUEqyAAAAAnRSTlMA/1uRIrUAAAAJcEhZcwAACusAAArrAYKLDVoAAAAWdEVYdENyZWF0aW9uIFRpbWUAMDkvMjAvMTIGkKG+AAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAAB1JREFUCJljONjA8LiBoZyBwY6BQQZMAtlAkYMNAF1fBs/zPvcnAAAAAElFTkSuQmCC"/></p><p>文字</p>'

var regex1 = /<.+\/>/g
var regex2 = /<\/?.+?>/g

console.log(regex1.test(str))
console.log(str.replace(regex1, ''))
console.log(str.replace(regex2, ''))
