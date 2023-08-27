
const parseUrl = (href) => { 
    let hash = href.match(/#.*/g) || "";
    hash = (hash.length) ? hash[0] : "";
    let port = href.match(/(?:[^:])\d{2,}(?=\/)/g) || ""; 
    port = (port.length) ? port[0] : "";
    let protocolAndHost = href.match(/[^\/\/].*?(?=\/)/g) || ""; 
    let protocol = protocolAndHost[0] || ""; 
    let host = protocolAndHost[1] || "";
    let origin = protocol + "//" + host || "" 
    let hostname = host.replace(`:${port}`,"") || "" 
    let pn = href.replace(origin, "")
    let pathname = pn.match(/^.*?(?=\?)/) || pn.match(/^.*/) || ""
    let a = {
        href,
        hash,
        port,
        hostname,
        host,
        protocol,
        pathname: pathname[0],
        origin
    }
    return a;
}

let a = parseUrl('http://sys.it-co.ru:8080/do/any.php?a=1&b[]=a&b[]=b#foo')
console.log( a.href == "http://sys.it-co.ru:8080/do/any.php?a=1&b[]=a&b[]=b#foo" )
console.log( a.hash == "#foo" )
console.log( a.port == "8080" )
console.log( a.host == "sys.it-co.ru:8080" )
console.log( a.protocol == "http:" )
console.log( a.hostname == "sys.it-co.ru" )
console.log( a.pathname == "/do/any.php" )
console.log( a.origin == "http://sys.it-co.ru:8080" )
console.log(a)


let b = parseUrl("https://dzen.ru/news?issue_tld=ru&utm_referrer=dzen.ru#top")
console.log( b.href == "https://dzen.ru/news?issue_tld=ru&utm_referrer=dzen.ru#top" )
console.log( b.hash == "#top" )
console.log( b.port == "" )
console.log( b.host == "dzen.ru" )
console.log( b.protocol == "https:" )
console.log( b.hostname == "dzen.ru" )
console.log( b.pathname == "/news" )
console.log( b.origin == "https://dzen.ru" )
console.log(b)


let c = parseUrl("https://vk.com/video")
console.log( c.href == "https://vk.com/video" )
console.log( c.hash == "" )
console.log( c.port == "" )
console.log( c.host == "vk.com" )
console.log( c.protocol == "https:" )
console.log( c.hostname == "vk.com" )
console.log( c.pathname == "/video" )
console.log( c.origin == "https://vk.com" )
console.log(c)
