import 'package:flutter/material.dart';

class customText extends StatelessWidget {
  final String label;
  final Function()? onTap;
  final TextStyle textStyle;

  //constructor
  customText({
    super.key,
    required this.label,
    required this.textStyle,
    this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      child: GestureDetector(
        onTap: onTap,
        child: Text(
          label,
        ),
      ),
    );
  }
}
