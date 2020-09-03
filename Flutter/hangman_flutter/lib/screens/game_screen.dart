import 'package:flutter/material.dart';
// import 'package:google_fonts/google_fonts.dart';
import 'package:hangman_flutter/components/letter_input.dart';
import 'package:hangman_flutter/components/word_key.dart';

class GameScreen extends StatefulWidget {
  final String selectedWord = 'hello';

  @override
  GameScreenState createState() => GameScreenState();
}

class GameScreenState extends State<GameScreen> {
  List<String> correctLetters;
  List<String> wrongLetters;
  int hangmanStage = 0;

  Widget _letterInput() {
    List<String> letters = widget.selectedWord.split('');

    return Center(
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceAround,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: <Widget>[
          for (var letter in letters) LetterInput(letter: letter)
        ],
      ),
    );
  }

  Widget _buildHangmanImage() {
    return Expanded(
        child: Container(
      child: Image.asset(
        'images/$hangmanStage.png',
        gaplessPlayback: true,
      ),
      margin: EdgeInsets.fromLTRB(0, 10, 0, 10),
      padding: EdgeInsets.all(30),
    ));
  }

  /// @return A table with alphabet words
  Widget _buildKeyboard() {
    return Container(
        padding: EdgeInsets.fromLTRB(10.0, 2.0, 8.0, 10.0),
        margin: EdgeInsets.fromLTRB(0, 25, 0, 0),
        child: Table(
          defaultVerticalAlignment: TableCellVerticalAlignment.baseline,
          textBaseline: TextBaseline.alphabetic,
          children: [
            TableRow(children: [
              TableCell(child: WordKey(word: 'a')),
              TableCell(child: WordKey(word: 'b')),
              TableCell(child: WordKey(word: 'c')),
              TableCell(child: WordKey(word: 'd')),
              TableCell(child: WordKey(word: 'e')),
              TableCell(child: WordKey(word: 'f')),
              TableCell(child: WordKey(word: 'g')),
            ]),
            TableRow(children: [
              TableCell(child: WordKey(word: 'h')),
              TableCell(child: WordKey(word: 'i')),
              TableCell(child: WordKey(word: 'j')),
              TableCell(child: WordKey(word: 'k')),
              TableCell(child: WordKey(word: 'l')),
              TableCell(child: WordKey(word: 'm')),
              TableCell(child: WordKey(word: 'n')),
            ]),
            TableRow(children: [
              TableCell(child: WordKey(word: 'o')),
              TableCell(child: WordKey(word: 'p')),
              TableCell(child: WordKey(word: 'q')),
              TableCell(child: WordKey(word: 'r')),
              TableCell(child: WordKey(word: 's')),
              TableCell(child: WordKey(word: 't')),
              TableCell(child: WordKey(word: 'u')),
            ]),
            TableRow(children: [
              TableCell(child: Text(' ')),
              TableCell(child: WordKey(word: 'v')),
              TableCell(child: WordKey(word: 'w')),
              TableCell(child: WordKey(word: 'x')),
              TableCell(child: WordKey(word: 'y')),
              TableCell(child: WordKey(word: 'z')),
              TableCell(child: Text(' ')),
            ])
          ],
        ));
  }

  // Widget _buildHeader() {
  //   return Expanded(
  //     flex: 0,
  //     child: Text(
  //       "Find the hidden word before it's to late",
  //       style: GoogleFonts.patrickHand(fontSize: 25.0),
  //       textAlign: TextAlign.center,
  //     ),
  //   );
  // }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
          child: Column(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: <Widget>[
          // _buildHeader(),
          _buildHangmanImage(),
          _letterInput(),
          _buildKeyboard()
        ],
      )),
    );
  }
}
