import 'package:flutter/material.dart';
import 'package:flutter_application_1/configs/constants.dart';

class customText extends StatelessWidget {
  final String label;

  //constructor
  customText({
    super.key,
    required this.label,
    required TextStyle style,
  });

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      child: Text(
        label,
        style: const TextStyle(
          color: greycolor,
          fontSize: 18,
        ),
        textAlign: TextAlign.left,
      ),
    );
  }
}
