import { Container,Questions, ContTextos,FormHelp} from "./style";

import btn from "../../../../img/btnHelp.svg";

const HelpQuest = [
{
  id:1,
  question:"How do i sign up for the project?",
  img:btn
},
{
  id:2,
  question:"What thing that i should prepare before starting?",
  img:btn
},
{
  id:3,
  question:"Does my company need help for marketing advices?",
  img:btn
},
]

export default function Help(){
  return(
    <Container>
      <Questions>
      <hr />
      {
        HelpQuest.map(
          (item)=> {
            const  {id, question, img} = item;
            return (
              <li key={id}>
                <div className="contLi">
                  <p>{question}</p>
                  <button> <img src={img} alt="btn"  width={20} height={20}/></button>
                 
                </div>
                  <hr />
              </li>
            )
          }
        )
      }
      </Questions>
      <ContTextos>
        <h1>How we can help you?</h1>
        <p>Follow our newsletter. We will regulary update our latest project and availability.</p>
          <FormHelp>
            <input type="email"  name="email" placeholder="Enter your Email" id="email"/>
            <button type="submit">Lets Talk</button>
          </FormHelp>
          <a href="#">more FAQ</a>
      </ContTextos>
    </Container>
  )
}