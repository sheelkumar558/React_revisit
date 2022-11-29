const express = require("express");
const mongooose = require("mongoose");

const app = express();
app.use(express.json());
const connect = () => {
  try {
    return mongooose.connect(
      "mongodb+srv://sheelu:sheelu@cluster0.jrnulch.mongodb.net/?retryWrites=true&w=majority"
    );
  } catch (error) {
    console.log(error, "server not connected");
  }
};

//USER SCHEMA
//step -1 -- creating the svhema

const userSchema = new mongooose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: false },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

//step -2-- creating the model

const User = mongooose.model("user", userSchema);

//POST SCHEMA
//step -1 -- creating the svhema

const postSchema = new mongooose.Schema(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },
    userId: {
      type: mongooose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

//step -2-- creating the model

const Post = mongooose.model("post", postSchema);

//COMMENT SCHEMA
//step -1 -- creating the svhema

const commentSchema = new mongooose.Schema(
  {
    body: { type: String, required: true },
    userId: {
      type: mongooose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    postId: {
      type: mongooose.Schema.Types.ObjectId,
      ref: "post",
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

//step -2-- creating the model

const Comment = mongooose.model("comment", commentSchema);

//CRUD OPRATIONS
//get => getting data from the server
//post => adding to te server
//put / patch => updating to the server
//delete => deleting data from the server

// USERS CRUD OPRATIONS

app.get("/users", async (req, res) => {
  try {
    const users = await User.find().lean().exec();
    return res.status(200).send({ users: users });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "somthing went wrong... try again leter" });
  }
});

app.post("/users", async (req, res) => {
  try {
    const user = await User.create(req.body);
    return res.status(201).send({ user: user });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id).lean().exec();
    return res.status(200).send({ user: user });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

app.patch("/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    return res.status(200).send({ user: user });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(200).send({ user: user });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

// POSTs CRUD OPRATIONS

app.get("/posts", async (req, res) => {
  try {
    const posts = await Post.find().lean().exec();
    return res.status(200).send({ posts: posts });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "somthing went wrong... try again leter" });
  }
});

app.post("/posts", async (req, res) => {
  try {
    const post = await Post.create(req.body);
    return res.status(201).send({ post: post });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});
app.get("/posts/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).lean().exec();
    return res.status(200).send({ post: post });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});
app.patch("/posts/:id", async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    return res.status(200).send({ post: post });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

app.delete("/posts/:id", async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(200).send({ post: post });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

// COMMENTS CRUD OPRATIONS

app.get("/comments", async (req, res) => {
  try {
    const comments = await Comment.find().lean().exec();
    return res.status(200).send({ comments: comments });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "somthing went wrong... try again leter" });
  }
});

app.post("/comments", async (req, res) => {
  try {
    const comment = await Comment.create(req.body);
    return res.status(201).send({ comment: comment });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});
app.get("/comments/:id", async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id).lean().exec();
    return res.status(200).send({ comment: comment });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});
app.patch("/comments/:id", async (req, res) => {
  try {
    const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    return res.status(200).send({ comment: comment });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

app.delete("/comments/:id", async (req, res) => {
  try {
    const comment = await Comment.findByIdAndDelete(req.params.id)
      .lean()
      .exec();
    return res.status(200).send({ comment: comment });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

app.listen(5000, async (req, res) => {
  try {
    await connect();
  } catch (error) {
    console.log(error);
  }
  console.log("listening on port 5000 ");
});
