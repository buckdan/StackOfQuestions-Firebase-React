# StackOfQuestions-Firebase-React
This is a small forum website for Vietnam users only. Using React and Firebase
<br><br>
**HERE ARE SOME STEPS YOU NEED TO DO BEFORE EDIT ANYTHING IN THE PROJECT**
<br>
1./Make sure to run this line of code <br />
```
npm init
```

2./You need a firebase project, create one or use a empty firebase project.<br>
*(Make sure to enable firestore and authatication for google and facebook)*<br>

3./Create a javascript file in `scr/firebase` name it firebaseConfig<br>

4./Inside your firebaseConfig.js script write <br>

```js
const firebaseConfig = {
  // Your firebase api key project here
};
export default firebaseConfig;
```

<br>

5./After done with your script now the project is ready. Do some tweaking to suit with your needs and we have a forum.<br />
**Runing the project locally** <br />

```node
npm start       //For testing locally
npm run build   //For creating a production build
```
<br>

And that is it. Thanks for anyone who checkout my repository. Make sure to leave a star.<br>
Also special thanks to Octoi who is the creator of the celloverflow forum which this project is based on. So yeah special thanks to him make sure to check him out<br>
[Octoi's Projects](https://github.com/octoi/celloverflow)
