module.exports = {
  //url: "mongodb+srv://speedDB:Selin55;@cloud.te1os.mongodb.net/speedDatabase?retryWrites=true&w=majority"
  //url: "mongodb+srv://"+process.env.DB_USERNAME+":"+process.env.DB_PASSWORD+"@"+process.env.DB_URL+"/"+process.env.DB_NAME+"?retryWrites=true&w=majority"
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  url: process.env.DB_URL,
  name: process.env.DB_NAME
};