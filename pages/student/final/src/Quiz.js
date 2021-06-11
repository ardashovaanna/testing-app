import React, {useContext, useState} from 'react';
import { render } from 'react-dom';
import { StyleSheet, CheckBox, Text, TextInput, View, Image, TouchableOpacity } from "react-native";
import { Dimensions } from 'react-native'
import {ContextData} from "../../../../Context";
import CircularProgress from './CircularProgress';
import axios from 'react-native-axios';


export default function Quiz(props) {
	
	const questions = [
		{
			questionText: 'Компьютер – это:',
			answerOptions: [
				{ answerText: 'Универсальное устройство для записи и чтения информации', isCorrect: false },
				{ answerText: 'Электронное устройство для обработки информации', isCorrect: false },
				{ answerText: 'Универсальное электронное устройство для хранения, обработки и передачи информации', isCorrect: true },
				{ answerText: 'Универсальное устройство для передачи и приема информации', isCorrect: false },
			],
		},
		{
			questionText: 'Процессор выполняет функцию:',
			answerOptions: [
				{ answerText: 'Сохранения информации', isCorrect: false },
				{ answerText: 'Управления работой ЭВМ по заданной программе', isCorrect: true },
				{ answerText: 'Ввода и вывода информации', isCorrect: false },
				{ answerText: 'Печати информации', isCorrect: false },
			],
		},
		{
			questionText: 'Оперативная память необходима:',
			answerOptions: [
				{ answerText: 'Для хранения исполняемой в данный момент времени программы и данных', isCorrect: true },
				{ answerText: 'Для обработки информации', isCorrect: false },
				{ answerText: 'Для долговременного хранения информации', isCorrect: false },
				{ answerText: 'Для запуска программы', isCorrect: false },
			],
		},
		{
			questionText: 'Единица измерения объема памяти:',
			answerOptions: [
				{ answerText: 'Такт', isCorrect: false },
				{ answerText: 'Мегаволь', isCorrect: false },
				{ answerText: 'Ампео', isCorrect: false },
				{ answerText: 'Мегабайт', isCorrect: true },
			],
		},
		{
			questionText: 'При выключении компьютера вся информация удаляется:',
			answerOptions: [
				{ answerText: 'На гибком диске', isCorrect: false },
				{ answerText: 'На CD-диске', isCorrect: false },
				{ answerText: 'В оперативной памяти', isCorrect: true },
				{ answerText: 'На жестком диске', isCorrect: false },
			],
		},
		{
			questionText: 'Какое устройство компьютера относится к внешним?',
			answerOptions: [
				{ answerText: 'Принтер', isCorrect: true },
				{ answerText: 'Процессор', isCorrect: false },
				{ answerText: 'Оперативная память', isCorrect: false },
				{ answerText: 'Материнская плата', isCorrect: false },
			],
		},
		{
			questionText: 'Устройством ввода является:',
			answerOptions: [
				{ answerText: 'Принтер', isCorrect: false },
				{ answerText: 'Плоттер', isCorrect: false },
				{ answerText: 'Колонки', isCorrect: false },
				{ answerText: 'Сканер', isCorrect: true },
			],
		},
		{
			questionText: 'Файл – это:',
			answerOptions: [
				{ answerText: 'Единица измерения информации', isCorrect: false },
				{ answerText: 'Программа в оперативной памяти', isCorrect: false },
				{ answerText: 'Программа или данные на диске', isCorrect: true },
				{ answerText: 'Текст, распечатанный на принтере', isCorrect: false },
			],
		},
		{
			questionText: 'Алгоритмом является:',
			answerOptions: [
				{ answerText: 'Маршрут движения', isCorrect: true },
				{ answerText: 'Трамвайный билет ', isCorrect: false },
				{ answerText: 'Правила проезда', isCorrect: false },
				{ answerText: 'Номер трамвая', isCorrect: false },
			],
		},
		{
			questionText: 'Информацию, не зависящую от личного мнения суждения, называют:',
			answerOptions: [
				{ answerText: 'Достоверной', isCorrect: false },
				{ answerText: 'Актуальной', isCorrect: false },
				{ answerText: 'Полезной', isCorrect: false },
				{ answerText: 'Объективной', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}

	
	};


	const updateDB = () =>{
		let self = this
		axios.post('http://192.168.0.4:8001/updateUser',{
			username: global.username,
			group: global.group,
			rating: score
		})
			.then(function (response) {
				console.log(response.data);
				if (response.data === true){
					console.log('успешно')

				}else {
					self.changeSerch()
				}
			})
			.catch(function (err) {
				console.log(err)
			});
	}

	return (
		<View style={styles.container}>
		{showScore ? (

			<View style={styles.result}>
				<View style={styles.resultHeader}><Text>{global.username}   {global.group}</Text></View>
			<Text style={styles.resultText}>
					Количество набранных баллов: </Text>
			<Text style={styles.resultText}>
					 {score} из {questions.length}</Text>
					 <View style={styles.progress}>
					 <CircularProgress percentage={score} progressColor={'#000080'}>
                     <Text style={{ fontSize:54 , color: "white" }}>{score}</Text></CircularProgress>

					 </View>
					 <TouchableOpacity onPress={updateDB}
      style={styles.button}>
      <Text style={styles.btnText}> Сохранить результат</Text>
    </TouchableOpacity>
					 </View>
			) : (
				<>
				  <View style={styles.header}>
					    <Text  style={styles.student}>{global.username}  {global.group}</Text>
</View>

		<View style={styles.imagecontainer}>
  <Text  style={styles.quizText}>Вопрос №{currentQuestion + 1} </Text>
    <Text style={styles.textvoprosa} >{questions[currentQuestion].questionText}</Text>
  </View>
  <View style={styles.btncontainer}>
  {questions[currentQuestion].answerOptions.map((answerOption) => (
  <TouchableOpacity
      style={styles.button}
	onPress={() => handleAnswerOptionClick(answerOption.isCorrect)}>
		<Text style={styles.btnText}>{answerOption.answerText} </Text>
	 </TouchableOpacity>
    ))}
      </View>

				</>
			)}
		</View>
);
	}

Quiz.contextType = ContextData;

const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Roboto',
      fontSize: 22,
      width: Dimensions.get('window').width,

      },


    header:{
        fontFamily: 'Roboto',
        fontSize: 22,
        alignContent: 'center',
        paddingBottom: 10,
        paddingTop: 10,
        backgroundColor: '#FF8C00',
        width: Dimensions.get('window').width,
		height:50
        },
		button: {
			width: 250,
			fontSize: 18,
			alignItems: 'center',
			backgroundColor: '#000080',
			textShadowColor: '#FFFFFF',
			padding: 10,
			height: 45,
			borderRadius: 8,
			elevation: 3,
			justifyContent: "center",
			marginTop: 80,
			marginBottom:50,
		  },
		  btnText: {
			color: "#fff",
		  },
    student:{
      color: '#FFFFFF',
      fontSize: 18,
      fontWeight: "bold",
      marginLeft: 20
    },

     quizText: {
        color: '#8B0000',
        fontSize: 22,
        fontWeight: "bold",
        alignContent: 'center',
        marginBottom: 20
      },

	 textvoprosa: {
        color: '#000000',
        fontSize: 18,
        fontWeight: "bold",
        alignContent: 'center',
        marginBottom: 20,
		marginLeft: 10
      },

progress:{
marginTop:70,
},
      imagecontainer: {
      marginBottom: 30,
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
	  height:300,
      backgroundColor: '#fff',
      width: Dimensions.get('window').width,

      },
	  result: {
		flex: 1,
		backgroundColor: '#f5f5f5',
		alignItems: 'center',
		justifyContent: 'center',
		fontFamily: 'Roboto',
		fontSize: 22,
		width: Dimensions.get('window').width,
		marginBottom:310
	},
	resultHeader:{
        fontFamily: 'Roboto',
        fontSize: 22,
        alignContent: 'center',
        paddingBottom: 10,
        paddingTop: 10,
        backgroundColor: '#FF8C00',
        width: Dimensions.get('window').width,
		marginBottom:150,
		height:50
        },

      btncontainer:{
      marginBottom: 35,
      },
      button: {
        width: 300,
        fontSize: 18,
        alignItems: 'center',
        backgroundColor: '#000080',
        textShadowColor: '#FFFFFF',
        padding: 10,
        height: 50,
        borderRadius: 8,
        elevation: 3,
        justifyContent: "center",
        marginTop: 5,
        marginBottom:10,
		alignContent: 'center'
      },
      btnText: {
        color: "#fff",
		alignContent: 'center',
		alignItems:'center',
		fontSize: 14,
		marginLeft: 12
      },
	  resultText: {
        color: '#000080',
		fontSize: 20,
		alignContent: 'center',


      },
	});
