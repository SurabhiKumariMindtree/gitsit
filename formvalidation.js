function validate() {
    var namepattern = document.myForm.name.value;
    var midpattern = document.myForm.mid.value;
    var emailpattern = document.myForm.email.value;
    var dobpattern = document.myForm.dob.value;
    var alphaExp = /^[a-zA-Z]/;
    var betaExp = /^[M]+[0-9]/;
    var gamaExp = /^[M]+([0-9]{7})+[@]+[m]+[i]+[n]+[d]+[t]+[r]+[e]+[e]+[.]+[c]+[o]+[m]/;
    var pattern = /^([0-9]{2})-([0-9]{2})-([0-9]{4})$/;
    if (!namepattern.match(alphaExp)) {
        alert("Input should be character only");
        return false;
    }
    if (!midpattern.match(betaExp)) {
        alert("MID should be like M1039307 only");
        return false;
    }
    if (midpattern.length > 8) {
        alert("MID consist of 8 chracters only");
        return false;
    }
    if (!(emailpattern.match(gamaExp))) {
        alert("Invalid Email Id");
        return false;
    }
    if (emailpattern.length > 21 || emailpattern.length < 21) {
        alert("check ur mail id");
        return false;
    }
    if (dobpattern == null || dob == "" || (!dobpattern.match(pattern))) {
        alert("enter valid date of birth");
        return false;
    }


    return true;
}
// $(document).ready(function() {

//     $.getJSON("../form.json", function(data) {
//         $.each(data.obj, function() {
//             $("#name").append("<h4>" + this['name'] + "</h4>");
//             $("#mid").append("<h4>" + this['mid'] + "</h4>");
//             $("#email").append("<h4>" + this['email'] + "</h4>");
//             $("#dob").append("<h4>" + this['dob'] + "</h4>");
//             $("#pswd").append("<h4>" + this['pswd'] + "</h4>");

//         });
//         $.each(data.obj1, function() {
//             $("#name").append("<h4>" + this['name'] + "</h4>");
//             $("#mid").append("<h4>" + this['mid'] + "</h4>");
//             $("#email").append("<h4>" + this['email'] + "</h4>");
//             $("#dob").append("<h4>" + this['dob'] + "</h4>");
//             $("#pswd").append("<h4>" + this['pswd'] + "</h4>");

//         });
//         $.each(data.obj2, function() {
//             $("#name").append("<h4>" + this['name'] + "</h4>");
//             $("#mid").append("<h4>" + this['mid'] + "</h4>");
//             $("#email").append("<h4>" + this['email'] + "</h4>");
//             $("#dob").append("<h4>" + this['dob'] + "</h4>");
//             $("#pswd").append("<h4>" + this['pswd'] + "</h4>");

//         });
//         $.each(data.obj3, function() {
//             $("#name").append("<h4>" + this['name'] + "</h4>");
//             $("#mid").append("<h4>" + this['mid'] + "</h4>");
//             $("#email").append("<h4>" + this['email'] + "</h4>");
//             $("#dob").append("<h4>" + this['dob'] + "</h4>");
//             $("#pswd").append("<h4>" + this['pswd'] + "</h4>");

//         });

//     });

// });