import { Telegram } from 'telegraf';


export class Bot {
    private bot: Telegram;
    constructor(tolen:string){
        this.bot = new Telegram(process.env.TELEGRAM_TOKEN, {});
    }

    async init(){

    }
}

export default Bot;