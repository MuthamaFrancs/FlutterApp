import 'package:flutter/material.dart';

class CustomTextField extends StatelessWidget {
  final TextEditingController controller;
  //this is a constructor
  const CustomTextField({
    super.key,
    required this.passwordController,
    required this.controller,
  });

  final TextEditingController passwordController;

  @override
  Widget build(BuildContext context) {
    return TextField(
      controller: controller,
    );
  }
}
