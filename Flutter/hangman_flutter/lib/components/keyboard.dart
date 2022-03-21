import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class Keyboard extends StatelessWidget {
  Keyboard({required this.wordKeyPressed, required this.chosenWords});

  final Function wordKeyPressed;
  final List<String> chosenWords;

  Widget _createWordKey(String letter) {
    if (!chosenWords.contains(letter)) {
      return Container(
          margin: EdgeInsets.all(5),
          child: RaisedButton(
            elevation: 3.0,
            shape:
                RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
            padding: EdgeInsets.all(4.0),
            color: Colors.teal,
            child: Text(letter,
                textAlign: TextAlign.center,
                style: GoogleFonts.patrickHandSc(
                    fontSize: 30.0, fontWeight: FontWeight.w400)),
            onPressed: () => wordKeyPressed(letter),
          ));
    } else {
      // if the word is already chosen, so make it disbale
      return Container(
          margin: EdgeInsets.all(5),
          child: RaisedButton(
            elevation: 3.0,
            shape:
                RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
            padding: EdgeInsets.all(4.0),
            color: Colors.teal,
            child: Text(letter,
                textAlign: TextAlign.center,
                style: GoogleFonts.patrickHandSc(
                    fontSize: 30.0, fontWeight: FontWeight.w400)),
            onPressed: null,
          ));
    }
  }

  @override
  Widget build(BuildContext context) {
    return Container(
        padding: EdgeInsets.fromLTRB(10.0, 2.0, 8.0, 10.0),
        margin: EdgeInsets.fromLTRB(0, 25, 0, 0),
        child: Table(
          defaultVerticalAlignment: TableCellVerticalAlignment.baseline,
          textBaseline: TextBaseline.alphabetic,
          children: [
            TableRow(children: [
              TableCell(child: _createWordKey('a')),
              TableCell(child: _createWordKey('b')),
              TableCell(child: _createWordKey('c')),
              TableCell(child: _createWordKey('d')),
              TableCell(child: _createWordKey('e')),
              TableCell(child: _createWordKey('f')),
              TableCell(child: _createWordKey('g')),
            ]),
            TableRow(children: [
              TableCell(child: _createWordKey('h')),
              TableCell(child: _createWordKey('i')),
              TableCell(child: _createWordKey('j')),
              TableCell(child: _createWordKey('k')),
              TableCell(child: _createWordKey('l')),
              TableCell(child: _createWordKey('m')),
              TableCell(child: _createWordKey('n')),
            ]),
            TableRow(children: [
              TableCell(child: _createWordKey('o')),
              TableCell(child: _createWordKey('p')),
              TableCell(child: _createWordKey('q')),
              TableCell(child: _createWordKey('r')),
              TableCell(child: _createWordKey('s')),
              TableCell(child: _createWordKey('t')),
              TableCell(child: _createWordKey('u')),
            ]),
            TableRow(children: [
              TableCell(child: Text(' ')),
              TableCell(child: _createWordKey('v')),
              TableCell(child: _createWordKey('w')),
              TableCell(child: _createWordKey('x')),
              TableCell(child: _createWordKey('y')),
              TableCell(child: _createWordKey('z')),
              TableCell(child: Text(' ')),
            ])
          ],
        ));
  }
}
