import 'package:flutter/material.dart';

class customTextField extends StatelessWidget {
  final TextEditingController controller;
  final String labelText;

  //this is a constructor
  const customTextField({
    super.key,
    required this.labelText,
    required this.controller,
  });


  @override
  Widget build(BuildContext context) {
    return const Padding(padding: EdgeInsets.all(16.0),
    child: TextField(
      decoration: InputDecoration(
      border: OutlineInputBorder(),
      ),
      
    ),
    );
  }
}
