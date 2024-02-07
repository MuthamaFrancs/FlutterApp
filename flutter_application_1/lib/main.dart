
import 'package:flutter/material.dart';
import 'package:flutter_application_1/configs/constants.dart';
import 'package:flutter_application_1/views/CustomButton.dart';
import 'package:flutter_application_1/views/CustomText.dart';
import 'package:flutter_application_1/views/CustomTextField.dart';

void main() {
  runApp(MaterialApp(
    home: Home(),
    debugShowCheckedModeBanner: false,
  ));
}

class Home extends StatelessWidget {
  Home({super.key});
  
 final TextEditingController usernamecontroller = TextEditingController() ;
 final TextEditingController passwordcontroller = TextEditingController() ;


  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Center(child: Text("Login to myapp")),
        backgroundColor: primaryColor,
        foregroundColor: whitecolor,
      ),
      //this is the body
      //SINGLE CHILD SCROLL VIEW WIDGET
      body: SingleChildScrollView(
        //PADDING WIDGET
        child: Padding(
          padding: const EdgeInsets.all(50.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            
            children: [
              Padding(
                padding: const EdgeInsets.all(8.0),
                child: Image.asset("assets/images/myapplogo.jpg",width: 80,height: 80, ),
              ),
              customText(label: "Login", style: const TextStyle( fontWeight: FontWeight.w700)),
              customText(
              label: "Username",
                  style: const TextStyle(fontWeight: FontWeight.w200),
              ),
              //usename controller
              customTextField(
              labelText: "Username", 
              controller: usernamecontroller,hintText: "example@gmail.com, phone no",icon: Icons.person,
              ),
              //SizedBox Widget 
              const SizedBox(height: 10,),
              //customText Widget for password
              customText(
                  label: "Password",
                  style: const TextStyle(
                    fontWeight: FontWeight.w200,
                  )
                  ),
              //password controller = WITH OBSCUREED TEXT
              customTextField(labelText: "Password", controller: passwordcontroller,hintText: "password",icon: Icons.lock,obscureText: true, Iconsuffix: Icons.visibility_off,),
              //customText(label: "ForgotPassword", style: FontWeight: fontWeight.),
              //ELevated Buton
              customButton(
                  btnLabel: "Proceed",
                  btnColor: primaryColor,
                  onPressed: () {
                    // Handle button press
                    print("Button clicked ${usernamecontroller.text}");
                  },
                  style: const ButtonStyle(
                    alignment: Alignment.center,
                  ))
                //sized box widget
                
            ],
          ),
        ),
      ),
    );
  }
}
