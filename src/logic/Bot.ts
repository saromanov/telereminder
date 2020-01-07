import { Telegram } from 'telegraf';


export class Bot {
    private bot: Telegram;
    constructor(token:string){
        this.bot = new Telegram(token, {});
    }

    async init(){

    }
}

export default Bot;