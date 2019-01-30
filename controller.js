function accesscontrol() {
    var user = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ((user == "grupo12") && (password == "1234")) {
        // var url = "prueba.html";
        //$(location).attr('href', url);
    } else {
        alert("Nombre o contraseña incorrectas");
    }
}
function enter(e) {
    var push = (document.all) ? e.keyCode : e.which;
    if (push == 13) {
        accesscontrol();
    }
}
function loginindex(data) {
    document.getElementById("login").style.display ="none";
    switch (data) {
        case "teacher": {
            document.getElementById("loginStudent").style.display ="block";            
            break;
        }
        case "student": {
            document.getElementById("loginTeacher").style.display ="block";                        
            break;
        }
        case "visitor": {
            //goTo(); -->Irá directamente al dashboard con las opciones de visitante
            break;
        }
    }
}