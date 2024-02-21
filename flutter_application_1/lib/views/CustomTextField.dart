import 'package:flutter/material.dart';

// ignore: must_be_immutable
class customTextField extends StatelessWidget {
  final TextEditingController controller;
  final String labelText;
  String? hintText;
  IconData? icon;
  final bool obscureText;

  IconData? Iconsuffix;

  //this is a constructor
  customTextField({
    super.key,
    required this.labelText,
    required this.controller,
    this.hintText,
    this.icon,
    this.obscureText = false,
    this.Iconsuffix,
  });

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(0.0),
      child: TextField(
        decoration: InputDecoration(
          border: const OutlineInputBorder(),
          prefixIcon: Icon(icon),
          hintText: hintText,
          suffixIcon: Icon(Iconsuffix),
          // suffixIcon: const Icon(Icons.visibility_off),
        ),
        obscureText: obscureText,
      ),
    );
  }
}
