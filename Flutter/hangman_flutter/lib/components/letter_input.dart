import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class LetterInput extends StatelessWidget {
  LetterInput({this.letter});

  final String letter;

  @override
  Widget build(BuildContext context) {
    return Container(
        padding: EdgeInsets.fromLTRB(5, 0, 5, 0),
        decoration: BoxDecoration(
            border: BorderDirectional(
                bottom: BorderSide(width: 6.0, color: Colors.green))),
        child: Text(letter,
            textAlign: TextAlign.center,
            style:
                GoogleFonts.acme(fontSize: 28.0, fontWeight: FontWeight.w400)));
  }
}
