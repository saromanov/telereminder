import * as mongoose from 'mongoose';
import Bot from './logic/Bot';

mongoose.connect("mongodb://localhost:27017/${process.env.DATABASE_HOST}", (err:any)=> {
  if (err) {
    console.log(err.message);
  } else {
    console.log('connected to mongo');
  }
});
mongoose.connection.on('error', () => {
  process.exit(1);
});

mongoose.connection.on('open', () => {
    const bot = new Bot(process.env.TELEGRAM_TOKEN);
    bot.init();
})

