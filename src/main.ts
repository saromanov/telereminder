import mongoose from 'mongoose';

mongoose.connect(`mongodb://localhost:27017/${process.env.DATABASE_HOST}`, {
  useNewUrlParser: true,
  useFindAndModify: false
});
mongoose.connection.on('error', err => {
  logger.error(
    undefined,
    `Error occurred during an attempt to establish connection with the database: %O`,
    err
  );
  process.exit(1);
});
