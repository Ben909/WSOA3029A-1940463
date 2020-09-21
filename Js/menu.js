function generateNav(){
    if(document.getElementById("nav-wrap")){
        document.getElementById("nav-wrap").innerHTML ="<nav class='navbar'> <img class='mylogo' src='../images/logovisual-min.png'> <ul><li><a href='../index.html'>Home</a></li><li><a href='../blog/index.html'>Theory Blogs</a></li><li><a href='../visualizations/index.html'>Visualizations</a></li><li><a href='../wireframes/index.html'>Wireframes</a></li></ul></nav>";
    }
    else{
        document.getElementById("nav-wrap1").innerHTML ="<nav class='navbar'> <img class='mylogo' src='images/logovisual-min.png'> <ul><li><a href='index.html'>Home</a></li><li><a href='blog/index.html'>Theory Blogs</a></li><li><a href='visualizations/index.html'>Visualizations</a></li><li><a href='wireframes/index.html'>Wireframes</a></li></ul></nav>";
    }

}