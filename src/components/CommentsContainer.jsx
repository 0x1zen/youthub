import { USER_ICON } from "../utils/constants";

const commentsData=[
    {
      "name": "Raj",
      "text": "Hello World",
      "replies": [
        {
          "name": "Karan",
          "text": "In Python",
          "replies": []
        },
        {
          "name": "Karan",
          "text": "In Python",
          "replies": []
        }
      ]
    },
    {
      "name": "Amit",
      "text": "JavaScript is awesome!",
      "replies": [
        {
          "name": "Vikram",
          "text": "I totally agree!",
          "replies": [
            {
              "name": "Rohit",
              "text": "Same here!",
              "replies": []
            }
          ]
        },
        {
          "name": "Pooja",
          "text": "I prefer TypeScript though.",
          "replies": []
        }
      ]
    },
    {
      "name": "Sneha",
      "text": "Learning React is fun!",
      "replies": [
        {
          "name": "Anjali",
          "text": "Yes, but it can be challenging at times.",
          "replies": [
            {
              "name": "Vivek",
              "text": "Once you get the hang of it, it's amazing!",
              "replies": []
            }
          ]
        }
      ]
    }
  ]
const CommentsContainer = ({data}) => {
    const {name,text,replies} = data;
      
  return (
    <div>
        <img src={USER_ICON}></img>
        <div>
            <h3>{name}</h3>
            <h2>{text}</h2>
        </div>
    </div>
  )
}

export default CommentsContainer