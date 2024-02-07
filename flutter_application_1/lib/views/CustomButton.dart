import 'package:flutter/material.dart';

class customButton extends StatelessWidget {
  final String btnLabel;
  final Color btnColor;
  final void Function()?
      onPressed; //changed the type of onPressed to void Function()? to avoid the conflict with the 'dart:html' library.

  //constructor
  const customButton(
      {super.key,
      required this.btnLabel,
      required this.btnColor,
      required ButtonStyle style,
      required this.onPressed});

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
        onPressed: onPressed,
        style: ButtonStyle(
          backgroundColor: MaterialStateProperty.all<Color>(btnColor),
        ),
        child: Text(btnLabel));
  }
}
