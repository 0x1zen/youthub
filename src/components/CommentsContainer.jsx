import { USER_ICON } from "../utils/constants";

const commentsData = [
  {
    "name": "Raj",
    "text": "Hello World",
    "replies": [
      {
        "name": "Karan",
        "text": "In Python",
        "replies": [
          {
            "name": "Charan",
            "text": "In Python",
            "replies": [
              {
                "name": "Karan",
                "text": "In Python",
                "replies": [
                  {
                    "name": "Charan",
                    "text": "In Python",
                    "replies": []
                  }
                ]
              }
            ]
          }
        ]
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

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return <div className="flex bg-gray-200 rounded-full mb-2">
    <img className="w-10 h-10 rounded-full" src={USER_ICON}></img>
    <div>
      <p className="font-bold">{name}</p>
      <p>{text}</p>
    </div>
  </div>
}

const CommentsList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment,index)=>{
        const {replies}=comment;
        return (
          <div>
            <Comment key={index} data={comment}></Comment>
            <div className="pl-3 border-l-2">
              <CommentsList key={index} comments={replies}></CommentsList>
            </div>
          </div>
        )
      })}
    </div>
  )
}

const CommentsContainer = () => {
  return (
    <div>
      {/* <Comment data={commentsData[0]}></Comment> */}
      <CommentsList comments={commentsData}></CommentsList>
    </div>
  )
}

export default CommentsContainer