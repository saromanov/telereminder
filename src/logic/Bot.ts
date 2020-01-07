import { Telegram } from 'telegraf';


class Bot {
    private bot: Telegram;
    constructor(tolen:string){
        this.bot = new Telegram(process.env.TELEGRAM_TOKEN, {});
    }
}