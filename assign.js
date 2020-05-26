function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle('active');
}

function savedPage() {
    document.getElementById("comment").disabled=true;
    
    
}

function editPage() 
{
    document.getElementById("").enabled=true;
    
}


function addNote() {
    var h = document.getElementById("add");
    var g = document.getElementById("Note");
    g.insertAdjacentHTML("afterend", g.outerHTML);
}
