import 'package:flutter/material.dart';
import 'package:flutter_application_1/configs/constants.dart';
import 'package:flutter_application_1/registration.dart';
import 'package:flutter_application_1/views/CustomButton.dart';
import 'package:flutter_application_1/views/CustomText.dart';
import 'package:flutter_application_1/views/CustomTextField.dart';
import 'package:get/get_navigation/get_navigation.dart';
import 'package:get/utils.dart';

class Login extends StatelessWidget {
  Login({super.key});

  final TextEditingController usernamecontroller = TextEditingController();
  final TextEditingController passwordcontroller = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Center(child: Text("Login")),
        automaticallyImplyLeading: true,
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
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Center(
                child: Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Image.asset(
                    "assets/images/myapplogo.jpg",
                    width: 200,
                    height: 200,
                  ),
                ),
              ),

              customText(
                label: "Username",
                textStyle: const TextStyle(
                  fontSize: 20.0,
                  color: blackcolor,
                  fontWeight: FontWeight.bold,
                ),
              ),
              //usename controller
              customTextField(
                labelText: "Username",
                controller: usernamecontroller,
                hintText: "example@gmail.com, phone no",
                icon: Icons.person,
              ),
              //SizedBox Widget
              const SizedBox(
                height: 20,
              ),
              //customText Widget for password
              customText(
                label: "Password",
                textStyle: const TextStyle(color: blackcolor, fontSize: 20.0),
              ),
              //password controller = WITH OBSCUREED TEXT
              customTextField(
                labelText: "Password",
                controller: passwordcontroller,
                hintText: "password",
                icon: Icons.lock,
                obscureText: true,
                Iconsuffix: Icons.visibility_off,
              ),
              //customText(label: "ForgotPassword", style: FontWeight: fontWeight.),
              //ELevated Buton
              const SizedBox(
                height: 20,
              ),
              //forgot password hyperlink text
              Row(
                mainAxisAlignment: MainAxisAlignment.end,
                children: [
                  customText(
                      label: "ForgotPassword?",
                      textStyle: const TextStyle(
                        fontSize: 18.0,
                        color: primaryColor,
                        decoration: TextDecoration.none,
                      ),
                      onTap: () {}),
                ],
              ),
              const SizedBox(height: 20.0),
              //sized box widget
              Center(
                child: customButton(
                  btnLabel: "Login",
                  action: navigatetoregistration,
                  btnColor: primaryColor,
                  textStyle: const TextStyle(fontSize: 20.0, color: whitecolor),
                ),
              )
            ],
          ),
        ),
      ),
    );
  }

  void navigatetoregistration() {
    Get.toNamed("/registration");
  }
}
