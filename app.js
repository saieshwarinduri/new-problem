const express = require("express");
const path = require("path");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");

const app = express();
app.use(express.json());

const dbPath = path.join(__dirname, "moviesData.db");
let db = null;

const intializeDbAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });
    app.listen(3000, () => console.log("Server running at"));
  } catch (error) {
    console.log(`DB Error ${error.message}`);
    process.exit(1);
  }
};

/*const convertDbObjectToArray=(dbObject)=>{
    return {
        movieId:dbObject.movie_id,
        movieName:dbObject.movie_name,
        leadActor:dbObject.lead_actor
    }
};

app.get("/movies/", async (request, response)=>{
    const getMovieNameQuery=`
    SELECT
     movie_name
    FROM 
      movie`;
      const dbResponse= await db.get(getMovieNameQuery);
      response.send(
          dbResponse.map((eachValue)=>convertDbObjectToArray(eachValue)  
          );
      );

});*/

intializeDbAndServer();

module.exports = app;
