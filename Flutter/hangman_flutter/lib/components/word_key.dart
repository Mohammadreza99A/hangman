import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class WordKey extends StatelessWidget {
  WordKey({required this.word, required this.wordKeyPressed});

  final String word;
  final VoidCallback wordKeyPressed;

  @override
  Widget build(BuildContext context) {
    return Container(
        margin: EdgeInsets.all(5),
        child: RaisedButton(
          elevation: 3.0,
          shape:
              RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
          padding: EdgeInsets.all(4.0),
          color: Colors.teal,
          child: Text(word,
              textAlign: TextAlign.center,
              style: GoogleFonts.patrickHandSc(
                  fontSize: 30.0, fontWeight: FontWeight.w400)),
          onPressed: wordKeyPressed,
        ));
  }
}
