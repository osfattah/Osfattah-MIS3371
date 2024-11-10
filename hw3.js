 /*
    Name: Osman Fattah
    Date Last Update: 10-19-24
    Purpose: Homework 2 js Form
    */

    const today = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById("today").textContent = today.toLocaleDateString(undefined, options);


    let slider = document.getElementById("painlvl")
        let output = document.getElementById("pain-slider")
        output.innerHTML = slider.value;

        slider.oninput = function () {output.innerHTML = this.value;};
       
       
       //date of birth validation
        function validateDob() {
            const dob=document.getElementById("dob");
            const date = new Date(dob.value);
            const maxDate = new Date().setFullYear(new Date().getFullYear() - 150);

            if(date> new Date()) {
                document.getElementById("dob-error").innerHTML= "Date cannot be in the future."
                dob.value="";
                return false;
            } else if(date < new Date(maxDate)) {
                document.getElementById("dob-error").innerHTML="Date cannot be more than 150 years ago."
                dob.value="";
                return false;
            }
            else {
                document.getElementById("dob-error").innerHTML="";
                return true;

            }
                
        }
        
        //validate First name
        function validateFname(){
            const fnameInput = document.getElementById("fname");
            const fnameError = document.getElementById("fname-error");
            const fname = fnameInput.value;

            const fnamePattern = /^[a-zA-Z'-]{1,30}$/;
            if (fname === "") {
                fnameError.innerHTML = "First Name cannot be empty.";
                return false;
            }else if (!fname.match(fnamePattern)) {
                fnameError.innerHTML = "First Name can only contain letters, apostrophes, and dashes.";
                return false;
            }else {
            fnameError.innerHTML = "";
            return true;
        }
        }
        //middle initial
        function validateMini(){
            const miniInput = document.getElementById("mini");
            const miniError = document.getElementById("mini-error");
            const mini = miniInput.value;

            const miniPattern = /^[A-Za-z]$/;

            //check if input matches the pattern
            if (mini === "") {
                miniError.innerHTML =
                "Middle initial cannot be empty.";
                return false;
            }else if (!mini.match(miniPattern)) {
                miniError.innerHTML = "Middle initial must be a single letter."
                return false;
            } else {
                miniError.innerHTML = "";
                return true;
            }

        }
        function validateLname(){
            const lnameInput = document.getElementById("lname");
            const lnameError = document.getElementById("lname-error");
            const lname = lnameInput.value;

            const lnamePattern = /^[a-zA-Z'-]{1,30}$/;
            
            //check if the input matches
            if (lname === "") {
                lnameError.innerHTML = "Last name cannot be empty.";
                return false;
            } else if (!lname.match(lnamePattern)){
                lnameError.innerHTML = "Last name must contain only letters, apostrophes, or dashes.";
                return false;
            } else {
                lnameError.innerHTML = "";
                return true;
            }
        }
        
        
        //ssn validation code
        function validateSsn() {
            const ssn= document.getElementById("ssn").value;

            //for ssn pattern
            const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

            if (!ssnR.test(ssn)){
                document.getElementById("ssn-error").innerHTML=
                "Please enter a valid Social Sercurity Number.";
                return false;
            } else {
                document.getElementById("ssn-error").innerHTML="";
                return true;
            }

        }
        //address validation code
       function validateAddress1() {
            var ad1 = document.getElementById("address1").value;
            console.log(ad1);
            console.log(ad1.length);

            if(ad1.length <2) {
                document.getElementById("address1-error").innerHTML=
                "please enter something on address line";
                return false;
            }
            else {
                document.getElementById("address1-error").innerHTML="";
                return true;

            }
        }
        //zip code validation
        function validateZip() {
            const zipInput = document.getElementById("zip");
            let zcode = zipInput.value.replace(/[^\d]/g, '') //removes any non-number and non dash chars.

            if (!zcode) {
                document.getElementById("zip-error").innerHTML=
                "Zip code cannot be left blank";
                return false;
            }
            if (zcode.length >5) {
                zcode= zcode.slice(0,5); //removes all digits after 5

            }
            zipInput.value=zcode;
            document.getElementById("zip-error").innerHTML="";
            return true
        } //WHY DOES STILL LET ME TYPE LETTERS????!!!!!!!!!! 

        function validateEmail() {
            const emailInput = document.getElementById("email");
            const email = emailInput.value;
            const emailR = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  //pattern for email PLEASE WORK

            if (email==""){
                document.getElementById("email-error").innerHTML=
                "Email cannot be empty.";  
                return false;

            } else if (!email.match(emailR)){
                document.getElementById("email-error").innerHTML=
                "please enter a valid email address";
                return false;

            }else{
                document.getElementById("email-error").innerHTML="";
                return true;
            }
        }
            
            //phone number validation
            function validatePhone() {
                const phoneInput = document.getElementById("phone");
                const phoneError = document.getElementById("phone-error"); 
                const phnum = phoneInput.value.replace(/\D/g,""); //Should remove all non number chars

                if (phnum.length !== 10) {
                    phoneError.innerHTML = "Phone number must be exactly 10 digits.";
                    return false;

                }
                if (phnum.length === 10) {
                const formattedPhone = `(${phnum.slice(0, 3)}) ${phnum.slice(3, 6)}-${phnum.slice(6)}`;
                phoneInput.value= formattedPhone;
                phoneError.innerHTML="";
                return true;
                } else {
                    phoneError.innerHTML = "Phone number must be exactly 10 digits.";
                    return false;

                }
            }
           
            //Username validation
            function validateUname() {
                let uname = document.getElementById("uname").value;

                uname = uname.toLowerCase();
                //display username in lowercase
                document.getElementById("uname").value = uname;
                
                if (uname.length ==0) {
                    document.getElementById("uname-error").innerHTML =
                    "Username field cannot be empty";
                    return false;
                }
                //checks if username is correct length (hopefully)
                if (uname.length < 5 || uname.length > 30){
                    document.getElementById("uname-error").innerHTML=
                    "Username must be between 5 and 30 characters";
                    return false;
                }
                //checks that username consists of only letters, number, or underscores
                const unamePattern = /^[a-z0-9_]+$/;
                if (!uname.match(unamePattern)) {
                    document.getElementById("uname-error").innerHTML =
                    "Username can only contain letters, numbers, or underscores";
                    return false;

                    
             }else{
                document.getElementById("uname-error").innerHTML="";
                 return true;
             }
            }
        //password validation
        function validatePassword(){
            const pword = document.getElementById("password").value;
            const uname = document.getElementById("uname").value;

            //sets up array
            const errorMessage = [];
            //for checking lowercase letter
            if(!pword.match(/[a-z]/)){
                errorMessage.push("Enter at least one lowercase letter.")
            }
            //for checking uppercase letter
            if(!pword.match(/[A-Z]/)){
                errorMessage.push("Enter at least one uppercase letter.")
            }
            //for checking numbers
            if(!pword.match(/[0-9]/)){
                errorMessage.push("Enter at least one number.")
            }
            //for checking special chars
            if(!pword.match(/[!@#$%^&*(),.?":{}|<>]/)){
                errorMessage.push("Enter at least on special character.")
            }
            //for checking username in password
            if(pword == uname|| pword.includes(uname)){
                errorMessage.push("Password cannot contain username.")
            }
            
            //error message display if needed
            const errorElement = document.getElementById("password-error");
            if (errorMessage.length > 0) {
                errorElement.innerHTML = errorMessage.join("<br>");
                return false;

        }else{
            errorElement.innerHTML="";
            return true;
        }
        }
        //confirm password
        function confirmPassword(){
            const pword1= document.getElementById("password").value;
            const pword2= document.getElementById("confirm_password").value;
            
            document.getElementById("password-error").innerHTML="";

            if(pword1 != pword2){
                document.getElementById("password2-error").innerHTML=
                "Passwords do not match.";
                return false;
            }else {
                document.getElementById("password2-error").innerHTML=
                "Passwords match.";
                return true
            }
        }
         //for review button
         function reviewInput() {
            var formcontent = document.getElementById("signup");
            var formoutput;
            var i;
            formoutput = "<table class='output'><th colspan = '3'>Your Information:</th>";
            for (i=0; i < formcontent.length; i++) {
                if (formcontent.elements[i].value !== "") {
                    datatype = formcontent.elements[i].type;
                    switch(datatype){
                        case "checkbox":
                         if (formcontent.elements[i].checked) {
                            formoutput += "<tr><td align='right'>" + formcontent.elements[i].name + "</td><td>Yes</td></tr>";
                         } break;
                         case "radio":
                          if (formcontent.elements[i].checked) {
                            formoutput += "<tr><td align='right'>" + formcontent.elements[i].name + "</td><td>" + formcontent.elements[i].value + "</td></tr>";


                        }break;
                        case "button":
                        case "submit":
                        case "reset" :
                            break;
                        default:
                            formoutput = formoutput + "<tr><td align='right'>" + formcontent.elements[i].name + "</td>";
                            formoutput = formoutput + "<td class='outputdata'>" + formcontent.elements[i].value + "</td></tr>";

                    }
                }
            }
            if (formoutput.length>0) {
                formoutput = formoutput + "</table>";
                document.getElementById("showInput").innerHTML = formoutput;
            }

         }
         //remove user input
         function removeReview(){
            document.getElementById("showInput").innerHTML="";

         }




        
