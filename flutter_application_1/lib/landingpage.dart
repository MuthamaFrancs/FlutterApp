import 'dart:ui_web';

import 'package:flutter/material.dart';
import 'package:flutter_application_1/configs/constants.dart';
import 'package:google_fonts/google_fonts.dart';

class Landingpage extends StatelessWidget {
  const Landingpage({dynamic});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      //i want the main axis to have a maximum width
      appBar: AppBar(
          title: RichText(
        text: const TextSpan(
          children: [
            TextSpan(
              text: 'Hi ',
              style: TextStyle(
                fontSize: 20.0,
              ),
            ),
            TextSpan(
              text: 'Francis!',
              style: TextStyle(
                fontSize: 22.0,
                fontWeight: FontWeight.bold,
              ),
            ),
          ],
        ),
      )),
      body: Container(
        //color: primaryColor,
        child: const Center(
            child: Padding(
          padding: const EdgeInsets.all(8.0),
          child: Column(
            children: [
              // Container(
              //   height: 30.0,
              //   color: greycolor,
              // ),
              Text(""),
            ],
          ),
        )),
      ),
    );
  }
}

class time extends StatelessWidget {
  const time({dynamic});
  @override
  Widget build(BuildContext context) {
    return Container(
      child: const Padding(
        padding: EdgeInsets.all(8.0),
        child: Row(
          children: [
            const Text("The date is 21/02/2024"),
            Card(
              child: Column(
                children: [
                  Row(
                    children: [
                      Icon(
                        Icons.sunny,
                        color: Colors.yellow,
                        size: 20.0,
                      ),
                      Text(
                        "Wednesday 21/02/2024",
                        style: TextStyle(
                            fontSize: 20.0, fontWeight: FontWeight.normal),
                      ),
                    ],
                  ),
                  Divider(),
                  Row(
                    children: [
                      Text(
                        "Chapel Day Coming in 6 days!",
                        style: TextStyle(
                            fontSize: 25.0, fontWeight: FontWeight.bold),
                      ),
                    ],
                  ),
                ],
              ),
            )
          ],
        ),
      ),
    );
  }
}
