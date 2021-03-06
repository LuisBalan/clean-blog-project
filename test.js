require('dotenv').config();
// require(process.env)

console.log(process.env.PATH)

const mongoose = require('mongoose');

const BlogPost = require('./models/BlogPost');

// function connect({DB_USER, DB_PASSWORD, DB_HOST, DB_NAME}){
//     const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`
//     return mongoose.connect(URL)
// }

// const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;
// const URL = `mongodb+srv://balanAdminDB:JNbd63fYqbmih7K4@cluster0.xfkki.mongodb.net/clean-blog-project-DB?retryWrites=true&w=majority`;
const URL = `mongodb+srv://balanAdminDB:JNbd63fYqbmih7K4@didactic-cluster.xfkki.mongodb.net/clean-blog-project?retryWrites=true&w=majority`
mongoose.connect(URL)




//CREATE
BlogPost.create({
    title: 'The Mythbuster’s Guide to Saving Money on Energy Bills',
    body: `If you have been here a long time, you might remember when I went on ITV Tonight to
    dispense a masterclass in saving money on energy bills. Energy-saving is one of my favourite money
    topics, because once you get past the boring bullet-point lists, a whole new world of thrifty nerdery
    opens up. You know those bullet-point lists. You start spotting them everything at this time of year.
    They go like this:`
    }, (error, blogpost) => {
    console.log(error, blogpost)
    });


//READ

    BlogPost.find({}, (error, blogpost) => {
        console.log(error, blogpost)
    });

    BlogPost.find({
        title:'The Mythbuster’s Guide to Saving Money on Energy Bills'
    }, (error, blogpost) => {
        console.log(error, blogpost)
    });

    BlogPost.find({
        title:/The/}, (error, blogpost) => {
            console.log(error, blogpost)
        });
    
    let id = '621abeecf5a9696fc1427aba';

    BlogPost.findById(id, (error, blogpost) => {
        console.log(error, blogpost)
    });

//UPDATE

BlogPost.findByIdAndUpdate(id, {
    title:'Update title'
}, (error, blogpost) => {
    console.log(error, blogpost)
});


//DELETE

BlogPost.findByIdAndRemove(id, (error, blogpost) => {
    console.log(error, blogpost)
});
