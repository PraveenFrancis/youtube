import React from "react";

const commentsData = [
  {
    name: "Praveen",
    comment: " Lorem ipsum dolor sit amet consectetur adipisicing elit",
    replies: [],
  },
  {
    name: "Praveen",
    comment: " Lorem ipsum dolor sit amet consectetur adipisicing elit",
    replies: [
      {
        name: "Praveen",
        comment: " Lorem ipsum dolor sit amet consectetur adipisicing elit",
        replies: [
          {
            name: "Praveen",
            comment: " Lorem ipsum dolor sit amet consectetur adipisicing elit",
            replies: [
              {
                name: "Praveen",
                comment:
                  " Lorem ipsum dolor sit amet consectetur adipisicing elit",
                replies: [
                  {
                    name: "Praveen",
                    comment:
                      " Lorem ipsum dolor sit amet consectetur adipisicing elit",
                    replies: [
                      {
                        name: "Praveen",
                        comment:
                          " Lorem ipsum dolor sit amet consectetur adipisicing elit",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Praveen",
    comment: " Lorem ipsum dolor sit amet consectetur adipisicing elit",
    replies: [],
  },
  {
    name: "Praveen",
    comment: " Lorem ipsum dolor sit amet consectetur adipisicing elit",
    replies: [],
  },
];

const CommentList = ({comments}) =>{
    return comments.map((comment, index) => (
        <div key={index}>
             <Comment  data={comment} />
             <div key={index} className="pl-5 border border-l-black ml-5">
                <CommentList key={index} comments={comment.replies || []} />
             </div>
        </div>
    ))
}

const Comment = ({ data }) => {
  const { name, comment,     } = data;
  return (
    <div className="flex py-2">
      <img
        className="w-6 h-6"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        alt=""
      />
      <div className="px-4">
        <p>{name} </p>
        <p>{comment}</p>
      </div>
    </div>
  );
};
const CommentsContainer = () => {
  return (
    <div className="py-4">
      <h1 className="font-bold">Comments</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
