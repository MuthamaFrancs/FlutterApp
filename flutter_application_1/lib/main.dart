import 'package:flutter/material.dart';
import 'package:flutter_application_1/configs/constants.dart';
import 'package:flutter_application_1/views/CustomButton.dart';
import 'package:flutter_application_1/views/CustomText.dart';

void main() {
  runApp(MaterialApp(
    home: Home(),
    debugShowCheckedModeBanner: false,
  ));
}

class Home extends StatelessWidget {
  Home({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Center(child: Text("Login to My app")),
        backgroundColor: primaryColor,
        foregroundColor: whitecolor,
      ),
      //this is the body
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          Center(
            child: customText(
              label: "Username",
              style: const TextStyle(fontWeight: FontWeight.w200),
            ),
          ),
          //CustomTextField(
          //  passwordController: ,
          //  controller: ,
          //),
          customText(
              label: "Password",
              style: const TextStyle(
                fontWeight: FontWeight.w200,
              )),
          customButton(
              btnLabel: "Proceed",
              btnColor: primaryColor,
              onPressed: () {
                // Handle button press
              },
              style: const ButtonStyle(
                alignment: Alignment.center,
              ))
        ],
      ),
    );
  }
}
