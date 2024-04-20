import { useState } from 'react'
import './App.css'
import { useForm } from 'react-hook-form';
import quiz from './questions';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1));
}

function generateList(){
  var randomIntegersSet = new Set();

  while (randomIntegersSet.size < 10) {
    var randomNumber = getRandomInt(0, 119);
    randomIntegersSet.add(randomNumber);
  }

  var randomIntegers = Array.from(randomIntegersSet);
  return randomIntegers
}

function App() {

  const [questions,setQuestions] = useState([]);
  var [wrongList, setWrongList] = useState([]);
  var [score,setScore] = useState(0);
  var [correct,setCorrect] = useState(0);
  var [wrong,setWrong]  = useState(0);

  const handleClick = () => {
    const ls = generateList();
    setQuestions(ls);
    console.log(questions);
  }

  const {register, handleSubmit, formState:{errors}} = useForm({shouldUseNativeValidation:true})

  const onSubmit = async data => {
    let s = 0;
    let c = 0;
    let w = 0;
    let wl = [];
    questions.map((id)=>{
      var a = data[id+1].split(",").map(Number);
      var givenAnswer = a.sort();
      var b = quiz[id].answers;
      var actualAnswer = b.sort();
      if(JSON.stringify(givenAnswer) == JSON.stringify(actualAnswer)) {
        s = s+1;
        c = c+1;
        const answer = document.getElementById(`${id}`)
        answer.style.backgroundColor = "#4dff4d"
      }
      else {
        w = w+1;
        wl.push(id+1)
        const answer = document.getElementById(`${id}`)
        answer.style.backgroundColor = "#ff4d4d"
      }

    })
    setScore(s);
    setCorrect(c);
    setWrong(w);
    setWrongList(wl);
  }
  
  return (
    <div className='appContainer'>
      <div className='header'>
          <h1>Incubation Exam practice quiz</h1>
          <button onClick={handleClick}>Generate Questions</button>
      </div>
      <div className='quiz'>
          <form onSubmit={handleSubmit(onSubmit)}>
            {questions.map((item)=>{
              return <InputGroup key={item} item={item} register={register} errors={errors} />
            })}
            {questions.length !== 0 ? <button type="submit">Submit Answers</button>:""}
          </form>
      </div>
      <div className='header'>
            <h1>Your Score: {score}</h1>
            <h4>
              Correct answers: {correct}
              <br />
              <br />
              Wrong answers: {wrong}
            </h4>
            <h3>wrong answers id: {wrongList.map((item)=> `${item}, `)}</h3>
      </div>
    </div>
  )
}

const InputGroup = ({item, register,errors}) => {
  const question = quiz[item];
  const name = `${question.id}`;
  return (
    <div className='questionContainer' id={item}>
      <div className='questionBox'>
        <h4>Question Id: {question.id}</h4>
        <h2 className='question'>{question.question}{` `}{`(${question.type} choice)`}</h2>
        <ol className='options'>
          {question.options.map((option,index)=>{
            return <li key={index}>{option}</li>
          })}
        </ol>
      </div>
      <label htmlFor={`${question.id}`}>Write your answer</label>
      <p>{errors[name]?.message}</p>
      <input type="text" {...register(`${question.id}`,{required:"Enter your answer",})} name={`${question.id}`} placeholder={question.type=="single" ? "example: 1":"example: 1,3,4"}/>
    </div>
  )
}

export default App
