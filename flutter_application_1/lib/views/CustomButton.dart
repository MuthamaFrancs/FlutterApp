import 'package:flutter/material.dart';

class customButton extends StatelessWidget {
  final String btnLabel;
  final Color btnColor;
  final VoidCallback? action;
  //final void Function()? onPressed;
  final TextStyle textStyle;

  //constructor
  const customButton(
      {super.key,
      required this.btnLabel,
      required this.btnColor,
      //required this.onPressed,
      required this.textStyle,
      this.action,
      });

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 50,
      width: 150,
      child: ElevatedButton(
          onPressed: action,
          style: ButtonStyle(
            backgroundColor: MaterialStateProperty.all<Color>(btnColor),
          ),
          child: Text(btnLabel)),
    );
  }
}
